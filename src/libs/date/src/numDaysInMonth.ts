import { assertValidDateMonth } from './assertValidDateMonth'
import { isLeapYear } from '../../date/src/isLeapYear'

const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

/**
 * Get number of days that there are in a given month of a given year.
 * Note: The number of days in february depends on whether it is leap year. If no year is given, it is assumed that it is not leap year.
 */
export function numDaysInMonth(month: number, year?: number): number {
  assertValidDateMonth(month)
  return month === 2 && year !== undefined && isLeapYear(year) ? 29 : DAYS_IN_MONTH[month]
}
