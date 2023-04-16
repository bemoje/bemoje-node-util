/**
 * Count occurances of a character within a given string.
 * @param input - The string to search
 * @param char - The character to find
 */
export function strCountCharOccurances(input: string, char: string): number {
  if (char.length !== 1) {
    throw new Error('Expected char to be a single character string of length 1.')
  }
  let result = 0
  for (const c of input) {
    if (c === char) {
      result++
    }
  }
  return result
}
