/**
 * Returns whether the string is lower case.
 * @param input - input string
 * @example
 * ```js
 * strIsLowerCase('abc')
 * //=> true
 *
 * strIsLowerCase('ABC')
 * //=> false
 * ```
 */
export function strIsLowerCase(input: string): boolean {
  return input === input.toLowerCase()
}
