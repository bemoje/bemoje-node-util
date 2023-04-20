/**
 * Remove duplicate characters from a string.
 * ```ts
 * strRemoveDuplicateChars('Hello world!') // 'Helo wrd!'
 * ```
 */
export function strRemoveDuplicateChars(string: string): string {
  return Array.from(new Set(string)).join('')
}
