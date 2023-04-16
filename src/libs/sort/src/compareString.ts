/**
 * Alpha numeric comparator function (ascending)
 * @param a first value to compare
 * @param b second value to compare
 */
export function compareString(a: string, b: string): number {
  return a.localeCompare(b)
}
