import fs from 'fs'
import path from 'path'
import { absoluteToRelativePath } from './absoluteToRelativePath'

/**
 * Represents a file in the filesystem.
 */
export class File {
  /**
   * The aboslute path to the source file.
   */
  readonly filepath: string

  /**
   * Creates a new SourceFile instance.
   * @param filepath The absolute path to the source file.
   */
  constructor(filepath: string) {
    this.filepath = filepath
  }

  /**
   * The file extension of the source file.
   */
  get fileExtension(): string {
    return path.extname(this.filepath)
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
   * The relative path to the source file from the working directory.
   */
  get relative(): string {
    return absoluteToRelativePath(this.filepath)
  }

  /**
   * Returns whether the source file exists.
   */
  fileExists(): boolean {
    return fs.existsSync(this.filepath)
  }
}
