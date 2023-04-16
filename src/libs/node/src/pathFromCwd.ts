import Path from 'path'

/**
 * Takes a directory path as a list of directory/folder names from the current working directory and returns it as a full path string.
 * @param dirs directory names from the current working directory.
 */
export function pathFromCwd(...dirs: Array<string>): string {
  return Path.join(process.cwd(), ...dirs)
}
