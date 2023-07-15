import fs from 'fs'

/**
 * Takes a filepath and returns its utf8 contents as a single string.
 * @remarks This function is part of the `fs` module.
 * @returns The content of the file as a string.
 * @throws Will throw an error if the file cannot be read.
 * @param path path to the file
 * @example ```ts
 * readFileStringSync('/path/to/file.txt');;
 * //=> "{file content}"
 * ```
 */
export function readFileStringSync(path: string): string {
  return fs.readFileSync(path, 'utf8').toString()
}
