/**
 * Count the number of occurrences of each character in a string.
 * @example
 * ```ts
 * strCountChars('Hello!') // Map(9) { 'H' => 1, 'e' => 1, 'l' => 2, 'o' => 1, '!' => 1 }
 * ```
 */
export function strCountChars(string: string): Map<string, number> {
  const result = new Map()
  for (const char of string) {
    const count = result.get(char)
    result.set(char, count ? count + 1 : 1)
  }
  return result
}
