/**
 * Returns whether a number is larger than a given lower bound and less than a given upper bound, where the boundary values not included.
 */

export function numIsBetweenExclusive(number: number, lower: number, upper: number): boolean {
  return number > lower && number < upper
}
