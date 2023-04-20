import path from 'path'
import { normalizeFileExtension } from './normalizeFileExtension'

/**
 * Takes a list of file extensions and returns a filter function that returns true if a filepath/filename passed to it contains one of the given file extensions.
 * @param fileExtensions file extensions
 */
export function createFileExtensionFilter(...fileExtensions: Array<string>): (filepath: string) => boolean {
  if (!fileExtensions.length) return () => true
  return (filepath: string) => {
    for (const ext of fileExtensions.map(normalizeFileExtension)) {
      if (path.extname(filepath) === ext) {
        return true
      }
    }
    return false
  }
}
