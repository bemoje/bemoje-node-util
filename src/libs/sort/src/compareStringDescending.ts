/**
 * Alpha numeric comparator function (descending)
 * @param a first value to compare
 * @param b second value to compare
 */
export function compareStringDescending(a: string, b: string): number {
  return b.localeCompare(a)
}
