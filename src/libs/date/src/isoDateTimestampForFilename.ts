/**
 * Returns a modified ISO date string: YYYY-MM-DD-HH-mm-SS-sss
 * This will correctly sort in chronological order.
 * @param date - The date to convert if not current time
 */
export function isoDateTimestampForFilename(date = new Date()): string {
  return date
    .toISOString()
    .replace(/[-:T.]/g, '-')
    .replace('Z', '')
}
