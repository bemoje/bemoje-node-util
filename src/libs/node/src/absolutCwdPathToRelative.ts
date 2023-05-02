/**
 * If the filepath is somewhere in the current working directory, it can be converted into a relative path.
 * @param filepath - the absolute filepath to convert.
 */
export function absolutCwdPathToRelative(filepath: string): string {
  return filepath.replace(process.cwd(), '').replace(/\\/g, '/').replace(/^\//, '')
}
