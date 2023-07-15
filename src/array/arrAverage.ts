import { arrSum } from './arrSum'

/**
 * Calculates the average of an array of numbers.
 * @returns The average of all numbers in the array. Returns 0 if the array is empty.
 * @throws Will throw an error if the array is not of type number[].
 * @param array The array of numbers.
 * @example ```ts
 * const numbers = [1, 2, 3, 4, 5];
 * arrAverage(numbers);
 * //=> 3
 * ```
 */
export function arrAverage(array: number[]): number {
  if (!array.length) return 0
  return arrSum(array) / array.length
}
