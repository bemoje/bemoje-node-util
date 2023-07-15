/**
 * Asserts that the provided value is an integer. If the value is not an integer, a TypeError is thrown.
 * @param int The value to be checked.
 * @returns Returns the input value if it is an integer.
 * @throws Throws an error if the input value is not an integer.
 * @example ```ts
 * assertInteger(5);;
 * //=> 5
 * assertInteger(5.5);;
 * //=> throws TypeError
 * ```
 */
export function assertInteger(int: number): number {
  if (Number.isInteger(int)) return int
  throw new TypeError('Expected int to be an integer. Got: ' + int)
}
