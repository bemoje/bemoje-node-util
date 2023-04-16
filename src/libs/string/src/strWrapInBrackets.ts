/**
 * Wraps a string in brackets.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInBrackets('input')).toBe('[input]');
 * ```
 */
export function strWrapInBrackets(input: string): string {
  return '[' + input + ']'
}
