import { words } from 'lodash'

/**
 * Just a wrapper for lodash's 'words' function.
 * Returns an array of words in the string.
 * @param input input string
 * @example ```ts
 * strToWords('How are you?')
 * //=> ['How', 'are', 'you']
 * ```
 */
export function strToWords(input: string): string[] {
  return words(input)
}
