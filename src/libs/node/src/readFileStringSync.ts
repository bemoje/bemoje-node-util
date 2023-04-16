import fs from 'fs'

/**
 * Takes a filepath and returns its utf8 contents as a single string.
 * @param path path to the file
 */
export function readFileStringSync(path: string): string {
  return fs.readFileSync(path, 'utf8').toString()
}
