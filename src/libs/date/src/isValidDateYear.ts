/**
 * Checks if the given year is a valid year > 0.
 */
export function isValidDateYear(year: number): boolean {
  return Number.isInteger(year) && year >= 0
}
