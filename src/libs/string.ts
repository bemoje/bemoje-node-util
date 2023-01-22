/**
 * Inserts a provided string before and after a string.
 * @param input - input string
 * @param wrap - string to place before and after
 */
export function strWrapIn(input: string, wrap: string): string {
  return wrap + input + wrap;
}

/**
 * Inserts provided strings before and after a string.
 * @param input - input string
 * @param before - string to place before
 * @param after - string to place after
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
 */
export function strWrapInBrackets(input: string): string {
  return '[' + input + ']';
}

/**
 * Wraps a string in braces.
 * @param input - input string
 */
export function strWrapInBraces(input: string): string {
  return '{' + input + '}';
}

/**
 * Wraps a string in parenthesis.
 * @param input - input string
 * @example
 * ```js
 * strWrapInParenthesis('hello');
 * // => '(hello)'
 * ```
 */
export function strWrapInParenthesis(input: string): string {
  return '(' + input + ')';
}
