/**
 * Tries to parse strings such as "false" and "true" into corresponding booleans.
 * @param string The string to parse.
 */
export function strParseBoolean(string: string): boolean {
  return string.toLowerCase() === 'true'
}
