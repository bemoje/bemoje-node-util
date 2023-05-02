/**
 * Calculates the sum of an array of numbers.
 * @param array - The array of numbers to sum.
 */
export function arrSum(array: number[]): number {
  return array.reduce((acc, cur) => acc + cur, 0)
}
