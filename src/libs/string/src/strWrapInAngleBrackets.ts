/**
 * Wraps a string in angle brackets.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInAngleBrackets('input')).toBe('<input>');
 * ```
 */
export function strWrapInAngleBrackets(input: string): string {
  return '<' + input + '>'
}
