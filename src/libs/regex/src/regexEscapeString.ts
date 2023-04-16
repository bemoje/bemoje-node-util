/**
 * Escapes a string so it can be used in a regular expression.
 */
export function regexEscapeString(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}
