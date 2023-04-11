/**
 * Check if a given month number is valid.
 */
export function isValidDateMonth(month: number): boolean {
  return Number.isInteger(month) && month >= 1 && month <= 12;
}
