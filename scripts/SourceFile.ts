import fs from 'fs'
import path from 'path'
import getAppDataPath from 'appdata-path'
import { absoluteToRelativePath } from '../src/filesystem/absoluteToRelativePath'
import { TsDoc } from '../src/tsdoc/TsDoc'
import { tsExtractImports } from '../src/tscode/tsExtractImports'
import { tsStripDeclSourceMapComments } from '../src/tscode/tsStripDeclSourceMapComments'
import { createDirectorySync } from '../src/filesystem/createDirectorySync'
import { readFileStringSync } from '../src/filesystem/readFileStringSync'
import { funParseFunction } from '../src/function/funParseFunction'
import { setNonEnumerable } from '../src/object/setNonEnumerable'
import { tsDocExtractFirstComment } from '../src/tsdoc/tsDocExtractFirstComment'
import { funParseClass } from '../src/function/funParseClass'
import { tsGetClassMemberAccessModifiers } from '../src/tscode/tsGetClassMemberAccessModifiers'
import { ISourceFileParseClassResult } from './types/ISourceFileParseClassResult'
import { tsCountExports } from '../src/tscode/tsCountExports'
import { tsHasDefaultExport } from '../src/tscode/tsHasDefaultExport'
import { strCountCharOccurances } from '../src/string/strCountCharOccurances'
import { ITsExtractImportsResult } from '../src/tscode/types/ITsExtractImportsResult'
import { tsStripImports } from '../src/tscode/tsStripImports'
import { tsStripFullSlashCommentLines } from '../src/tscode/tsStripFullSlashCommentLines'

export class SourceFile {
  /**
   * An in-memory cache for source file requires/evals.
   * If not set when ´evalSourceFileExport´ is first invoked, the entire ´SourceFile.sourceDir´ directory is evaluted and its exports are placed here..
   */
  private static entryPointImport: Record<string, any>

  /**
   * An in-memory cache for source file requires/evals.
   * This is used when the desired module is not found in ´allExports´.
   */
  protected static moduleImportCache: WeakMap<SourceFile, any> = new WeakMap()

  /**
   * The working directory of the process.
   */
  static workdir = process.cwd()

  /**
   * The root directory of the source code.
   */
  static sourceDir = path.join(this.workdir, 'src')

  /**
   * The root directory of the declaration files.
   */
  static declarationDir = path.join(this.workdir, 'types')

  /**
   * The directory where source files are backed up to.
   */
  static backupDir = path.join(getAppDataPath(), 'SourceFileBackups', path.basename(this.workdir))

  /**
   * The relative path from the working directory to the source file.
   */
  readonly relative: string

  /**
   * The source code of the source file.
   */
  source: string

  /**
   * Each source file has only one named exported.
   * This is type that export. Can be ´class´, ´function´, ´interface´, etc.
   */
  readonly exportType: string

  /**
   * Creates a new SourceFile instance.
   * @param filepath The absolute path to the source file.
   */
  constructor(filepath: string) {
    this.relative = absoluteToRelativePath(filepath)
    this.source = readFileStringSync(this.filepath)
    this.exportType = this.getExportType()
    this.assertTsFile()
    this.assertMatchingFileAndExportName()
    this.assertValidFilename()
    this.assertExactlyOneNamedExport()
    setNonEnumerable(this, 'source')
  }

  /**
   * Whether or not the source file is private.
   * Private source files are not exported from the entry point.
   */
  get isPrivate() {
    return this.filename.startsWith('_')
  }

  /**
   * The file extension of the source file.
   */
  get fileExtension(): string {
    return '.ts'
  }

  /**
   * The name of the source file's exported member.
   */
  get exportName(): string {
    return this.filename.substring(0, this.filename.indexOf('.'))
  }

  /**
   * The name of the source file.
   */
  get filename(): string {
    return path.basename(this.filepath)
  }

  /**
   * The name of the directory of the source file.
   */
  get dirname(): string {
    return path.basename(this.dirpath)
  }

  /**
   * The absolute path to the directory of the source file.
   */
  get dirpath(): string {
    return path.dirname(this.filepath)
  }

  /**
   * The absolute path to the source file.
   */
  get filepath(): string {
    return path.join(SourceFile.workdir, this.relative)
  }

  /**
   * The absolute path to the test file that tests this source file.
   */
  get testFilepath(): string {
    return path.join(this.dirpath, this.exportName + '.test.ts')
  }

  /**
   * The absolute path to the type declaration file emitted for this source file.
   */
  get declarationFilepath(): string {
    return path.join(SourceFile.declarationDir, this.relative.replace(/\.ts$/i, '.d.ts'))
  }

  /**
   * The absolute path to the backup file dir for this source file.
   */
  get backupFilepath(): string {
    return path.join(SourceFile.backupDir, this.relative.replace(/\W/g, '_'))
  }

  /**
   * Returns whether the source file exists.
   */
  fileExists(): boolean {
    return fs.existsSync(this.filepath)
  }

  /**
   * Returns whether the test file exists.
   */
  testFileExists(): boolean {
    return fs.existsSync(this.testFilepath)
  }

  /**
   * Returns whether the declaration file emitted for this source file exists.
   */
  declarationFileExists(): boolean {
    return fs.existsSync(this.declarationFilepath)
  }

  /**
   * Returns the source code code of the test file.
   */
  testFileSource(): string {
    return readFileStringSync(this.testFilepath)
  }

  /**
   * Returns the source code of the declaration file emitted for this source file.
   */
  declarationFileSource(stripSourceMapComments = false): string {
    const source = readFileStringSync(this.declarationFilepath)
    return stripSourceMapComments ? tsStripDeclSourceMapComments(source) : source
  }

  /**
   * Returns all the import statements of this source file.
   */
  getImports(): ITsExtractImportsResult[] {
    return tsExtractImports(this.source)
  }

  /**
   * Removes all import statements from the source code.
   */
  stripImports(): this {
    this.source = tsStripImports(this.source)
    return this
  }

  /**
   * Removes lines from the source code that consist of only a double-slash comment.
   */
  stripFullSlashCommentLines(): this {
    this.source = tsStripFullSlashCommentLines(this.source)
    return this
  }

  /**
   * Returns the source code for the first encountered TSDoc block comment of this source file.
   */
  getTsDocComment(): { start: number; end: number; match: string } | undefined {
    const result = tsDocExtractFirstComment(this.source)
    if (result) return result
  }

  /**
   * Returns a TsDoc instance that represents the first encountered TSDoc block comment of this source file.
   */
  getTsDoc(): { start: number; end: number; tsdoc: TsDoc } | undefined {
    const data = this.getTsDocComment()
    if (!data) return
    const { start, end, match } = data
    const params = this.exportType === 'function' ? { paramOrder: this.getParamNames() } : void 0
    const tsdoc = new TsDoc(match, params)
    return { start, end, tsdoc }
  }

  /**
   * @returns The new TSDoc instance.
   */
  setTsDoc(newTsDoc: TsDoc, overwrite?: boolean): TsDoc {
    const code = this.source
    const lines = code.split('\n')
    const oldDoc = this.getTsDocComment()
    const data = this.getTsDoc()
    if (!data) {
      const line = lines.find((line) => line.startsWith('export ')) as string
      this.source = code.replace(line, newTsDoc.render() + '\n' + line)
      return newTsDoc
    }
    let { tsdoc } = data
    if (overwrite) tsdoc.clear()
    tsdoc.assign(newTsDoc)
    // if (!oldDoc) return tsdoc
    // this.source = code.split(oldDoc.match).join(tsdoc.render())
    lines.splice(data.start, data.end - data.start + 1, ...tsdoc.render().split('\n'))
    this.source = lines.join('\n')
    return tsdoc
  }

  /**
   * Returns the names of the parameters of the exported function in order.
   */
  getParamNames(): string[] {
    if (this.exportType !== 'function') {
      throw new Error('Expected this.exportType to be ´function´. Got: ' + this.exportType)
    }
    return funParseFunction(this.evalSourceFileExport()).params
  }

  /**
   * Returns various details about the members of the class exported by this source file.
   * @throws if this source file does not export a class.
   */
  parseClass(): ISourceFileParseClassResult {
    if (this.exportType !== 'class') {
      throw new Error('Expected this.exportType to be ´class´. Got: ' + this.exportType)
    }
    const parsed = funParseClass(this.evalSourceFileExport())
    const members = parsed.properties.concat(parsed.methods.map((m) => m.name))
    const accMod = tsGetClassMemberAccessModifiers(this.source)
    const result: Record<string, string[]> = { public: [], protected: [], private: [] }
    for (const name of members) {
      if (accMod[name] === 'protected') result.protected.push(name)
      else if (accMod[name] === 'private') result.private.push(name)
      else result.public.push(name)
    }
    return { ...parsed, ...result } as ISourceFileParseClassResult
  }

  /**
   * Overwrite the source file with the new source code.
   */
  writeFileSource(): void {
    this.writeBackupFile()
    fs.writeFileSync(this.filepath, this.source, 'utf8')
  }

  /**
   * Writes a timestamped backup file of this source file at the backup directory.
   */
  writeBackupFile(): void {
    const filepath = path.join(createDirectorySync(this.backupFilepath), Date.now() + '.ts')
    fs.writeFileSync(filepath, this.source, 'utf8')
  }

  /**
   * Returns the type of the export of this source file.
   * Eg. ´function´, ´class´, ´interface´, ´type´, ´enum´.
   */
  protected getExportType(): string {
    const exportLine = this.source.split('\n').find((line) => line.startsWith('export '))
    if (!exportLine) throw new Error(`Source file has no exports: ${this.filepath}`)
    const words = exportLine.split(' ')
    const w1 = words[1]
    if (w1 !== 'const' && w1 !== 'let') {
      if (w1 === 'function') return 'function'
      if (w1 === 'async') return 'function'
      if (w1 === 'class') return 'class'
      if (w1 === 'abstract') return 'class'
      if (w1 === 'enum') return 'enum'
      if (w1 === 'type') return 'type'
      if (w1 === 'interface') return 'interface'
    }
    const _export = this.evalSourceFileExport()
    return typeof _export === 'object'
      ? Object.getPrototypeOf(_export).constructor.name
      : typeof _export
  }

  protected evalSourceFileExport<T>(): T {
    let exp
    if (!SourceFile.entryPointImport) {
      Object.defineProperty(SourceFile, 'entryPointImport', {
        enumerable: false,
        value: require(SourceFile.sourceDir),
      })
      if (SourceFile.entryPointImport) {
        exp = SourceFile.entryPointImport[this.exportName]
      }
    }
    if (!exp) {
      exp = SourceFile.moduleImportCache.get(this)
    }
    if (!exp) {
      const module = require(this.filepath)
      exp = module[this.exportName]
      SourceFile.moduleImportCache.set(this, exp)
    }
    return exp
  }

  protected assertTsFile(): void {
    if (path.extname(this.filename) !== '.ts')
      throw new Error(`Expected file to be a TypeScript file: ${this.filepath}`)
  }

  protected assertMatchingFileAndExportName() {
    const exportLine = this.source.split(/\r?\n/).find((line) => line.startsWith('export '))
    if (!exportLine?.includes(this.exportName)) {
      throw new Error(`Export name does not match filename: ${this.filename}`)
    }
  }

  protected assertValidFilename() {
    if (strCountCharOccurances(this.filename, '.') !== 1) {
      throw new Error(`Expected source file to only have one period. Got: ${this.filename}`)
    }
  }

  protected assertExactlyOneNamedExport(): void {
    const code = this.source
    const count = tsCountExports(code)
    if (count !== 1) {
      throw new Error(`Expected file to have exactly one export. Got ${count} in: ${this.filepath}`)
    }
    if (tsHasDefaultExport(code)) {
      throw new Error(`Expected file to have no default export: ${this.filepath}`)
    }
  }
}
