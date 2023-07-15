import { strToWords } from './strToWords'

/**
 * Counts the number of words in a given string.
 * @param string The input string to count the words from.
 * @example ```ts
 * const inputString = "Hello world! This is a sample string.";
 * strCountWords(inputString);
 * //=> 7
 * ```
 */
export function strCountWords(string: string): number {
  return strToWords(string).length
}
