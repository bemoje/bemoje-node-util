/**
 * Checks if a number is less than or equal to an upper bound.
 * @param number The number to check.
 * @param upperBound The upper bound to compare against.
 * @returns A boolean indicating whether the number is less than or equal to the upper bound.
 * @example ```ts
 * isLTE(5, 10); ;
 * //=> true
 * isLTE(15, 10);;
 * //=> false
 * ```
 */
export function isLTE(number: number, upperBound: number): boolean {
  return number <= upperBound
}
