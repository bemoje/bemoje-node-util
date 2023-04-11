import { numDaysInMonth } from './numDaysInMonth';

/**
 * Returns whether a day of month is a valid date for the given month and year.
 */
export function isValidDateDay(day: number, month: number, year?: number): boolean {
  if (!Number.isInteger(day)) return false;
  if (day < 1) return false;
  if (day > numDaysInMonth(month, year)) return false;
  return true;
}
