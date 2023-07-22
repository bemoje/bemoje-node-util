import { mkdirp } from 'mkdirp'

/**
 * Create a directory at a given path if it does not exist.
 * Automatically creates parent directories if they do not exist.
 * @remarks This function uses the `mkdirp` package to create directories.
 * @param dirpath The path where the directory should be created.
 * @returns The path of the directory.
 * @throws Will throw an error if the directory cannot be created.
 * @example ```ts
 * createDirectory('/path/to/directory').then((dirpath) => {
 *   //=> `Directory created at ${dirpath}`
 * });
 * ```
 */
export async function createDirectory(dirpath: string): Promise<string> {
  await mkdirp(dirpath)
  return dirpath
}
