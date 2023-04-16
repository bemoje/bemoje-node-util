/**
 * Round value with a given number of decimal points.
 * @param n the number to round.
 * @param decimalPoints the number of decimal points.
 */
export function round(n: number, decimalPoints = 0): number {
  return Math.round(n * Math.pow(10, decimalPoints)) / Math.pow(10, decimalPoints) + 0
}
