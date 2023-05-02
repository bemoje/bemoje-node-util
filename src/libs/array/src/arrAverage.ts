import { arrSum } from './arrSum'

/**
 * Calculates the average of an array of numbers.
 * @param array - The array of numbers to average.
 */
export function arrAverage(array: number[]): number {
  return arrSum(array) / array.length
}
