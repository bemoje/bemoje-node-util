import { regPowerOfTen } from '../regexlib/regPowerOfTen'

/**
 * Checks if a given integer is a power of ten.
 * @remarks This function uses regular expressions to test if the integer is a power of ten.
 * @param integer The integer to be checked.
 * @returns A boolean indicating whether the integer is a power of ten.
 * @example ```ts
 * isPowerOfTen(1000); ;
 * //=> true
 * isPowerOfTen(500);  ;
 * //=> false
 * ```
 */
export function isPowerOfTen(integer: number): boolean {
  return regPowerOfTen.test(integer.toString())
}
