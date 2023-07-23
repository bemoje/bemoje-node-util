/**
 * Asserts that the provided number is a positive integer.
 * If the number is not a positive integer, a TypeError is thrown.
 * @param int The number to be checked.
 * @returns The same number if it is a positive integer.
 * @throws Throws an error if the provided number is not a positive integer.
 * @example ```ts
 * assertPositiveInteger(5);;
 * //=> 5
 * assertPositiveInteger(-2);;
 * //=> throws TypeError
 * assertPositiveInteger(2.5);;
 * //=> throws TypeError
 * ```
 */
export function assertPositiveInteger(int: number): number {
  if (Number.isInteger(int) && int > 0) return int
  throw new TypeError('Expected an integer. Got: ' + int)
}
