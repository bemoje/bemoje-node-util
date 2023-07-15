import { mkdirp } from 'mkdirp'

/**
 * Create a directory at a given path if it does not exist.
 * Automatically creates parent directories if they do not exist.
 * @param dirpath The path where the directory should be created.
 * @remarks This function uses the `mkdirp` package to create directories.
 * @returns The path of the directory.
 * @example ```ts
 * createDirectory('/path/to/directory')
 * ```
 */
export async function createDirectory(dirpath: string): Promise<string> {
  await mkdirp(dirpath)
  return dirpath
}
