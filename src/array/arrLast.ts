/**
 * Returns the last element of an array.
 * @param array The array from which to retrieve the last element.
 * @template T - The type of elements in the array.
 * @returns The last element of the array.
 * @throws If the array is empty.
 * @example ```ts
 * const numbers = [1, 2, 3, 4, 5];
 * arrLast(numbers);
 * //=> 5
 * const emptyArray = [];
 * arrLast(emptyArray); // Throws an error
 * ```
 */
export function arrLast<T>(array: T[]): T {
  if (!array.length) throw new Error('Cannot get last element of empty array.')
  return array[array.length - 1]
}
