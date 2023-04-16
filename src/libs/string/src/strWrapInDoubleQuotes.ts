/**
 * Wraps a string in parenthesis.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInDoubleQuotes('input')).toBe('"input"');
 * ```
 */
export function strWrapInDoubleQuotes(input: string): string {
  return '"' + input + '"'
}
