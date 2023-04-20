/**
 * Sorts the characters in a string.
 * @example
 * ```ts
 * strSortChars('hello') // 'ehllo'
 * ```
 */
export function strSortChars(string: string): string {
  return Array.from(string).sort().join('')
}
