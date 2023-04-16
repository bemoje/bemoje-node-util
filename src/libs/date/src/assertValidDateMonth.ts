import { isValidDateMonth } from './isValidDateMonth'

/**
 * Throws error if the given month is invalid.
 */
export function assertValidDateMonth(month: number): void {
  if (!isValidDateMonth(month)) throw new Error(`Invalid month: ${month}.`)
}
