import { isValidDateDay } from './isValidDateDay'

/**
 * Throws an error if the day of the month is invalid.
 */
export function assertValidDateDay(day: number, month: number, year?: number): void {
  if (!isValidDateDay(day, month, year)) throw new Error(`Invalid day of the month: ${day}.`)
}
