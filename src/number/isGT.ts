/**
 * Checks if a number is greater than a given lower bound.
 * @param number The number to check.
 * @param lowerBound The lower bound to compare against.
 * @returns A boolean indicating whether the number is greater than the lower bound.
 * @example ```ts
 * isGT(5, 3);;
 * //=> true
 * isGT(2, 3);;
 * //=> false
 * ```
 */
export function isGT(number: number, lowerBound: number): boolean {
  return number > lowerBound
}
