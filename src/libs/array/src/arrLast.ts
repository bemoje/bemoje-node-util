/**
 * Returns the last element of a given array.
 */
export function arrLast<T>(array: T[]): T {
  if (!array.length) throw new Error('Cannot get last element of empty array.')
  return array[array.length - 1]
}
