/**
 * number, bigint, boolean comparator function (descending)
 * @param a first value to compare
 * @param b second value to compare
 * @example
 * ```ts
 * const arr = [true, 3n, -2n, false]
 * arr.sort(compareNumericDescending) // [3n, true, false, -2n]
 * ```
 */
export function compareNumericDescending(
  a: number | bigint | boolean,
  b: number | bigint | boolean,
): number {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}
