/**
 * Returns the number of days that has passed since a given date.
 */
export function daysSinceDate(date: Date): number {
  return (Date.now() - date.getTime()) / (1000 * 3600 * 24)
}
