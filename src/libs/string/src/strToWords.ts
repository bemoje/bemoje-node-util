import { regMatchWords } from '../../regex'

/**
 * Returns an array of words in the string
 * @param input - input string
 * @example
 * ```js
 * strToWords('How are you?')
 * //=> ['How', 'are', 'you']
 * ```
 */
export function strToWords(input: string): Array<string> {
  return input.match(regMatchWords) || []
}
