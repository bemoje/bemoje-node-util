import path from 'path'

/**
 * Takes a directory path as a list of directory/folder names from the current working directory and returns it as an absolute path.
 * @param names directory/file names from the current working directory.
 */
export function pathFromCwd(...names: Array<string>): string {
  return path.join(process.cwd(), ...names)
}
