/**
 * Checks if a number is less than an upper bound.
 * @remarks This function is part of the `NumberUtils` library.
 * @param number The number to check.
 * @param upperBound The upper bound to compare against.
 * @returns A boolean indicating whether the number is less than the upper bound.
 * @example ```ts
 * import { isLT } from './NumberUtils';
 * isLT(5, 10); ;
 * //=> true
 * isLT(10, 5); ;
 * //=> false
 * ```
 */
export function isLT(number: number, upperBound: number): boolean {
  return number < upperBound
}
