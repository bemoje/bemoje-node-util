import fs from 'fs'
import { cleanDirectorySync } from './cleanDirectorySync'

/**
 * Synchronously cleans a directory in a safe manner. If the directory does not exist, it will return the directory path without making any changes.
 * @param dirpath The path of the directory to clean.
 * @param filter A function that takes a filename as a parameter and returns a boolean. If the function returns true, the file will be kept; otherwise, it will be deleted.
 * @returns The path of the directory.
 * @example ```ts
 * cleanDirectorySafeSync('./src', (filename: string) => filename.endsWith('.ts'));
 * ```
 * @throws If the directory path is not a string or the filter is not a function.
 */
export function cleanDirectorySafeSync(
  dirpath: string,
  filter: (filename: string) => boolean,
): string {
  if (!fs.existsSync(dirpath)) return dirpath
  return cleanDirectorySync(dirpath, filter)
}
