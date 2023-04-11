import { isValidDateYear } from './isValidDateYear';

/**
 * Throws if the given year is invalid.
 */
export function assertValidDateYear(year: number): void {
  if (!isValidDateYear(year)) throw new Error(`Invalid year: ${year}.`);
}
