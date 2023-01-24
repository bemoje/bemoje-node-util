/**
 * Inserts a provided string before and after a string.
 * @param input - input string
 * @param wrap - string to place before and after
 * @example
 * ```js
 * expect(util.strWrapIn('input', '#')).toBe('#input#');
 * ```
 */
export function strWrapIn(input: string, wrap: string): string {
  return wrap + input + wrap;
}

/**
 * Inserts provided strings before and after a string.
 * @param input - input string
 * @param before - string to place before
 * @param after - string to place after
 * @example
 * ```js
 * expect(util.strWrapBetween('input', '#', '&')).toBe('#input&');
 * ```
 */
export function strWrapBetween(
  input: string,
  before: string,
  after: string,
): string {
  return before + input + after;
}

/**
 * Wraps a string in brackets.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInBrackets('input')).toBe('[input]');
 * ```
 */
export function strWrapInBrackets(input: string): string {
  return '[' + input + ']';
}

/**
 * Wraps a string in braces.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInBraces('input')).toBe('{input}');
 * ```
 */
export function strWrapInBraces(input: string): string {
  return '{' + input + '}';
}

/**
 * Wraps a string in parenthesis.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInParenthesis('input')).toBe('(input)');
 * ```
 */
export function strWrapInParenthesis(input: string): string {
  return '(' + input + ')';
}

/**
 * Wraps a string in parenthesis.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInSingleQuotes('input')).toBe("'input'");
 * ```
 */
export function strWrapInSingleQuotes(input: string): string {
  return "'" + input + "'";
}

/**
 * Wraps a string in parenthesis.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInDoubleQuotes('input')).toBe('"input"');
 * ```
 */
export function strWrapInDoubleQuotes(input: string): string {
  return '"' + input + '"';
}
