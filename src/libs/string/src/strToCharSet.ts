/**
 * Returns a string containing the set of all unique characters in a string.
 * @example
 * ```ts
 * strToCharSet('hello') // 'ehlo'
 * ```
 */
export function strToCharSet(string: string): string {
  return Array.from(new Set(string)).sort().join('')
}
