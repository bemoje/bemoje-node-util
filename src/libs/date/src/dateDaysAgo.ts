/**
 * Subtracts a given number of days from the current time and returns the resulting Date.
 */
export function dateDaysAgo(days: number): Date {
  const date = new Date()
  date.setDate(date.getDate() - days)
  return date
}
