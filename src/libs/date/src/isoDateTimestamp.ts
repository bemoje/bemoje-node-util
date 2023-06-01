/**
 * Returns an ISO date string but only digits remaining.
 * This will correctly sort in chronological order.
 * @param date - The date to convert to an ISO date string if not current time.
 */
export function isoDateTimestamp(date = new Date()): string {
  return date.toISOString().replace(/\D/g, '')
}
