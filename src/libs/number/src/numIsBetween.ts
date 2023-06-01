/**
 * Returns whether a number is larger than or equal to a given lower bound and less than or equal to a given upper bound.
 */
export function numIsBetween(number: number, lower: number, upper: number): boolean {
  return number >= lower && number <= upper
}
