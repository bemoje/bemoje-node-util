/**
 * Returns a given number of contatenations of a given input string.
 * @param input - input string
 * @param n - Number of repetitions of the input string
 */
export function strRepeat(input: string, n: number): string {
  return new Array(n).fill(input).join('')
}
