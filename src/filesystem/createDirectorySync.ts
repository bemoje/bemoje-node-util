import { mkdirpSync } from 'mkdirp'

/**
 * Create a directory at a given path if it does not exist.
 * Automatically creates parent directories if they do not exist.
 * @param dirpath The path where the directory should be created.
 * @remarks This function uses the `mkdirpSync` function from the `mkdirp` library to create a directory at the specified path.
 * @returns The path of the directory.
 * @example ```ts
 * createDirectorySync('/path/to/directory')
 * ```
 */
export function createDirectorySync(dirpath: string): string {
  mkdirpSync(dirpath)
  return dirpath
}
