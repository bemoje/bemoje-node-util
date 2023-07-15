/**
 * Asserts that the provided number is a negative integer.
 * If the number is not a negative integer, it throws a TypeError.
 * @param int The number to be checked.
 * @returns Returns the number if it is a negative integer.
 * @throws Throws an error if the provided number is not a negative integer.
 * @example ```ts
 * assertNegativeInteger(-5);;
 * //=> -5
 * assertNegativeInteger(5);;
 * //=> throws TypeError
 * ```
 */
export function assertNegativeInteger(int: number): number {
  if (Number.isInteger(int) && int < 0) return int
  throw new TypeError('Expected int to be an integer. Got: ' + int)
}
