/**
 * Wraps a string in parenthesis.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInParenthesis('input')).toBe('(input)');
 * ```
 */
export function strWrapInParenthesis(input: string): string {
  return '(' + input + ')'
}
