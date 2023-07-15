import { isValidNumber } from './isValidNumber'

/**
 * Asserts that the provided value is a valid number. If the value is not a valid number, it throws a TypeError.
 * A valid number is a finite number and not NaN.
 * @param number The number to be validated.
 * @returns Returns the validated number if it is valid.
 * @throws Throws an error if the provided number is not valid.
 * @example ```ts
 * assertValidNumber(5);;
 * //=> 5
 * assertValidNumber(NaN);;
 * //=> throws TypeError
 * ```
 */
export function assertValidNumber(number: number): number {
  if (isValidNumber(number)) return number
  throw new TypeError('Expected number to be finite and not NaN. Got: ' + number)
}
