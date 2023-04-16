/**
 * Wraps a string in parenthesis.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInSingleQuotes('input')).toBe("'input'");
 * ```
 */
export function strWrapInSingleQuotes(input: string): string {
  return "'" + input + "'"
}
