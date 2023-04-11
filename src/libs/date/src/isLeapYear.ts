import { assertValidDateYear } from './assertValidDateYear';

/**
 * Check whether a given year is a leap year.
 */
export function isLeapYear(year: number): boolean {
  assertValidDateYear(year);
  return (0 == year % 4 && 0 != year % 100) || 0 == year % 400;
}
