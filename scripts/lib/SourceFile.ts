import TrieMap from '@bemoje/trie-map'
import getAppDataPath from 'appdata-path'
import ExpiryMap from 'expiry-map'
import fs from 'fs'
import path from 'path'
import { createDirectorySync } from '../../src/filesystem/createDirectorySync'
import { FilePath } from '../../src/filesystem/path/FilePath'
import { readJsonFileSync } from '../../src/filesystem/readJsonFileSync'
import { funParseClass } from '../../src/function/funParseClass'
import { funParseFunction } from '../../src/function/funParseFunction'
import { strCountCharOccurances } from '../../src/string/strCountCharOccurances'
import { tsCountExports } from '../../src/tscode/tsCountExports'
import { tsCountLinesOfCode } from '../../src/tscode/tsCountLinesOfCode'
import { tsExtractImports } from '../../src/tscode/tsExtractImports'
import { tsGetClassMemberAccessModifiers } from '../../src/tscode/tsGetClassMemberAccessModifiers'
import { tsHasDefaultExport } from '../../src/tscode/tsHasDefaultExport'
import { tsStripDeclSourceMapComments } from '../../src/tscode/tsStripDeclSourceMapComments'
import { ITsExtractImportsResult } from '../../src/tscode/types/ITsExtractImportsResult'
import { TsDoc } from '../../src/tsdoc/TsDoc'
import { tsDocExtractFirstComment } from '../../src/tsdoc/tsDocExtractFirstComment'
import { ISourceFileParseClassResult } from '../types/ISourceFileParseClassResult'

export function readPackageJson(projectRoot = process.cwd()): Record<string, any> | undefined {
  const filepath = path.join(projectRoot, 'package.json')
  if (!fs.existsSync(filepath)) return
  return readJsonFileSync(filepath)
}

export function getDeclarationsDirpath(projectRoot = process.cwd()): string | undefined {
  const pkg = readPackageJson(projectRoot)
  if (!pkg) return
  return path.dirname(Reflect.get(pkg, 'types'))
}

/**
 * Represents a TypeScript source file.
 */
export class SourceFile extends FilePath {
  /**
   * A map of all source file paths to SourceFile instance.
   */
  protected static instances = new TrieMap<SourceFile>()

  /**
   * An in-memory cache of source file source code.
   */
  protected static sourceCache = new ExpiryMap<SourceFile, string>(1000)

  /**
   * An in-memory cache for source file requires/evals.
   * This is used when the desired module is not found in ´allExports´.
   */
  protected static moduleCache: WeakMap<SourceFile, any> = new WeakMap()

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
  static declaratiosnDirpath = getDeclarationsDirpath()

  /**
   * The directory where source files are backed up to.
   */
  static backupDir = path.join(getAppDataPath(), 'SourceFileBackups', path.basename(this.workdir))

  /**
   * Creates a new SourceFile instance.
   * @param filepath The absolute path to the source file.
   */
  constructor(filepath: string) {
    const instance = SourceFile.instances.get(filepath.split(path.sep))
    if (instance) return instance
    super(filepath)
    SourceFile.instances.set(filepath.split(path.sep), this)
  }

  /**
   * Whether or not the source file is protected.
   * Private source files are not exported from the entry point.
   */
  get isPrivate(): boolean {
    return this.base.startsWith('_')
  }

  /**
   * The name of the source file's exported member.
   */
  get exportName(): string {
    return this.base.substring(0, this.base.indexOf('.'))
  }

  /**
   * The absolute path to the test file that tests this source file.
   */
  get testFilepath(): string {
    return path.join(this.parent.toString(), this.exportName + '.test.ts')
  }

  /**
   * The absolute path to the type declaration file emitted for this source file.
   */
  get declarationFilepath(): string | undefined {
    if (!SourceFile.declaratiosnDirpath) return
    return path.join(SourceFile.declaratiosnDirpath, this.relative.replace(/\.ts$/i, '.d.ts'))
  }

  /**
   * The absolute path to the backup file dir for this source file.
   */
  get backupFilepath(): string {
    return path.join(SourceFile.backupDir, this.relative.replace(/\W/g, '_'))
  }

  /**
   * Each source file has only one named exported.
   * This is type that export. Can be ´class´, ´function´, ´interface´, etc.
   */
  get exportType(): string {
    const exportLine = this.readFileSync()
      .split('\n')
      .find((line) => line.startsWith('export '))
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
    const _export = this.evaluateSourceFileExport()
    return typeof _export === 'object' ? Object.getPrototypeOf(_export).constructor.name : typeof _export
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
    if (!SourceFile.declaratiosnDirpath) return false
    return fs.existsSync(this.declarationFilepath as string)
  }

  /**
   * Returns whether the source file exists.
   */
  fileExists(): boolean {
    return fs.existsSync(this.filepath)
  }

  /**
   * Returns the source code of the source file.
   */
  override readFileSync(): string {
    let source = SourceFile.sourceCache.get(this)
    if (!source) {
      source = fs.readFileSync(this.filepath).toString()
      SourceFile.sourceCache.set(this, source)
    }
    return source
  }

  /**
   * Overwrite the source file with the new source code.
   */
  override writeFileSync(string: string): this {
    if (this.readFileSync() === string) return this
    this.writeBackupFile()
    fs.writeFileSync(this.filepath, string, 'utf8')
    SourceFile.sourceCache.set(this, string)
    SourceFile.moduleCache.delete(this)
    return this
  }

  /**
   * Writes a timestamped backup file of this source file at the backup directory.
   */
  protected writeBackupFile(): void {
    const filepath = path.join(createDirectorySync(this.backupFilepath), Date.now() + '.ts')
    fs.writeFileSync(filepath, this.readFileSync(), 'utf8')
  }

  /**
   * Returns the source code code of the test file.
   */
  testFileSource(): string {
    return fs.readFileSync(this.testFilepath).toString()
  }

  /**
   * Returns the source code of the declaration file emitted for this source file.
   * @param stripSourceMapComments Whether or not to strip source map comments from the declaration file.
   * Example of such a line: "//# sourceMappingURL=filename.d.ts.map"
   */
  declarationFileSource(stripSourceMapComments = false): string | undefined {
    if (!SourceFile.declaratiosnDirpath) return
    const source = fs.readFileSync(this.declarationFilepath as string).toString()
    return stripSourceMapComments ? tsStripDeclSourceMapComments(source) : source
  }

  /**
   * Returns the number of lines of code in this source file, not including import satements, comments and empty lines.
   */
  countLinesOfCode(): number {
    return tsCountLinesOfCode(this.readFileSync())
  }

  /**
   * Returns the number of tests in the test file.
   */
  countTests(): number {
    if (!this.testFileExists()) return 0
    return this.testFileSource().split(/\n\s+(it|test)\(/).length - 1
  }

  /**
   * Returns all the import statements of this source file.
   */
  getImports(): ITsExtractImportsResult[] {
    return tsExtractImports(this.readFileSync())
  }

  /**
   * Returns the source code for the first encountered TSDoc block comment of this source file.
   */
  getTsDocComment(): { start: number; end: number; match: string } | undefined {
    const result = tsDocExtractFirstComment(this.readFileSync())
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
   * Sets the TSDoc block comment of this source file and returns the updated source code.
   * @param newTsDoc The new TSDoc instance.
   * @param overwrite Whether to overwrite instead of merge the new TSDoc instance with the existing one.
   * @returns The new TSDoc instance.
   */
  setTsDoc(newTsDoc: TsDoc, overwrite?: boolean): string {
    const code = this.readFileSync()
    const lines = code.split('\n')
    const data = this.getTsDoc()
    if (!data) {
      const line = lines.find((line) => line.startsWith('export ')) as string
      return code.replace(line, newTsDoc.render() + '\n' + line)
    }
    const { tsdoc } = data
    if (overwrite) tsdoc.clear()
    tsdoc.assign(newTsDoc)
    lines.splice(data.start, data.end - data.start + 1, ...tsdoc.render().split('\n'))
    return lines.join('\n')
  }

  /**
   * Returns the names of the parameters of the exported function in order.
   */
  getParamNames(): string[] {
    if (this.exportType !== 'function') {
      throw new Error('Expected this.exportType to be ´function´. Got: ' + this.exportType)
    }
    return funParseFunction(this.evaluateSourceFileExport()).params
  }

  /**
   * Returns various details about the members of the class exported by this source file.
   * @throws if this source file does not export a class.
   */
  parseClass(): ISourceFileParseClassResult {
    if (this.exportType !== 'class') {
      throw new Error('Expected this.exportType to be ´class´. Got: ' + this.exportType)
    }
    const parsed = funParseClass(this.evaluateSourceFileExport())
    const members = parsed.methods.map((m) => m.name)
    const accMod = tsGetClassMemberAccessModifiers(this.readFileSync())
    const result: Record<string, string[]> = { public: [], protected: [], private: [] }
    for (const name of members) {
      if (accMod[name] === 'protected') result.protected.push(name)
      else result.public.push(name)
    }
    return { ...parsed, ...result } as ISourceFileParseClassResult
  }

  /**
   * Evaluates the source file and returns the export.
   */
  evaluateSourceFileExport<T>(): T {
    let exp = SourceFile.moduleCache.get(this)
    if (!exp) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const module = require(this.filepath)
      exp = module[this.exportName]
      SourceFile.moduleCache.set(this, exp)
    }
    return exp
  }

  /**
   * Asserts that the source file is a TypeScript file.
   */
  assertTsFile(): this {
    if (path.extname(this.base) !== '.ts') {
      throw new Error(`Expected file to be a TypeScript file: ${this.filepath}`)
    }
    return this
  }

  /**
   * Asserts that the export name matches the filename.
   */
  assertMatchingFileAndExportName(): this {
    const exportLine = this.readFileSync()
      .split(/\r?\n/)
      .find((line) => line.startsWith('export '))
    if (this.exportType !== 'undefined' && !exportLine?.includes(this.exportName)) {
      const filename = this.base
      throw new Error(`Export name does not match filename: ` + filename)
    }
    return this
  }

  /**
   * Asserts that the source file has a valid filename. A valid filename is one that has only one period.
   */
  assertValidFilename(): this {
    if (strCountCharOccurances(this.base, '.') !== 1) {
      throw new Error(`Expected source file to only have one period. Got: ${this.base}`)
    }
    return this
  }

  /**
   * Asserts that the source file has exactly one export.
   */
  assertExactlyOneNamedExport(): this {
    const code = this.readFileSync()
    const count = tsCountExports(code)
    if (count !== 1) {
      throw new Error(`Expected file to have exactly one export. Got ${count} in: ${this.filepath}`)
    }
    if (tsHasDefaultExport(code)) {
      throw new Error(`Expected file to have no default export: ${this.filepath}`)
    }
    return this
  }
}
