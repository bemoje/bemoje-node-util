/**
 * number, bigint, boolean comparator function (ascending)
 * @param a first value to compare
 * @param b second value to compare
 * @example
 * ```ts
 * const arr = [3n, true, -2n, false]
 * arr.sort(compareNumeric) // [-2n, false, true, 3n]
 * ```
 */
export function compareNumeric(a: number | bigint | boolean, b: number | bigint | boolean): number {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}