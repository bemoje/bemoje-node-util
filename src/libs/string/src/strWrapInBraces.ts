/**
 * Wraps a string in braces.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInBraces('input')).toBe('{input}');
 * ```
 */
export function strWrapInBraces(input: string): string {
  return '{' + input + '}'
}
