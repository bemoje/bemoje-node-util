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
    this.filepath = path.normalize(filepath)
  }

  /**
   * The file extension of the source file.
   * @returns The file extension, including the leading dot.
   */
  get fileExtension(): string {
    return path.extname(this.filepath)
  }

  /**
   * The filename including the file extension.
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
}
