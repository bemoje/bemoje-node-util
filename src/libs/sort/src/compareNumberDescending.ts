/**
 * Number comparator function (descending)
 * @param a first value to compare
 * @param b second value to compare
 * @example
 * ```ts
 * const arr = [3, 1, 4, 1, 5]
 * arr.sort(compareNumberDescending) // [5, 4, 3, 1, 1]
 * ```
 */
export function compareNumberDescending(a: number, b: number): number {
  return b - a
}
