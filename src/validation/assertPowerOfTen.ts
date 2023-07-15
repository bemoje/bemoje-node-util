import { isPowerOfTen } from './isPowerOfTen'

/**
 * Asserts if the given number is a power of ten.
 * If the number is a power of ten, it returns the number.
 * If the number is not a power of ten, it throws a TypeError.
 * @param number The number to be checked.
 * @returns Returns the number if it is a power of ten.
 * @throws Throws an error if the number is not a power of ten.
 * @example ```ts
 * assertPowerOfTen(10);;
 * //=> true
 * assertPowerOfTen(15);;
 * //=> throws TypeError: Expected number to be a power of ten. Got: 15
 * ```
 */
export function assertPowerOfTen(number: number): number {
  if (isPowerOfTen(number)) return number
  throw new TypeError(`Expected number to be a power of ten. Got: ${number}`)
}
