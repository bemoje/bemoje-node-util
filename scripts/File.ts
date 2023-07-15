import fs from 'fs'
import path from 'path'
import { absoluteToRelativePath } from '../src/filesystem/absoluteToRelativePath'

export class SourceFile {
  /**
   * The working directory of the process.
   */
  static workdir = process.cwd()

  /**
   * The relative path from the working directory to the source file.
   */
  readonly relative: string

  /**
   * Creates a new SourceFile instance.
   * @param filepath The absolute path to the source file.
   */
  constructor(filepath: string) {
    this.relative = absoluteToRelativePath(filepath)
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
   * Returns whether the source file exists.
   */
  fileExists(): boolean {
    return fs.existsSync(this.filepath)
  }

  /**
   * Reads the source file as a utf8 string and returns the source code.
   */
  readFileSync(): string {
    return fs.readFileSync(this.filepath, 'utf8')
  }

  async readFile(): Promise<string> {
    return await fs.promises.readFile(this.filepath, 'utf8')
  }

  /**
   * Overwrite the source file with the new source code.
   */
  writeFileSync(data: string): void {
    fs.writeFileSync(this.filepath, data, 'utf8')
  }

  async writeFile(data: string): Promise<void> {
    await fs.promises.writeFile(this.filepath, data, 'utf8')
  }
}
