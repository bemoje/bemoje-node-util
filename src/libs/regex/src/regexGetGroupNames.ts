import { rexec } from './rexec'

/**
 * Returns an array of named groups defined inside a RegExp instance.
 * @param re RegExp instance to extract named groups from.
 */
export function regexGetGroupNames(re: RegExp): Array<string> {
  const names = []
  for (const res of rexec(/\(\?<(?<name>\w+)>/g, re.toString())) {
    names.push(res.groups.name)
  }
  return names
}
