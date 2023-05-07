/**
 * Parses a formatted number string to a number
 * @param input string to parse
 * @param thousandSeperator character to use as thousand seperator
 * @param decimalSeperator character to use as decimal seperator
 */
export function numParseFormatted(
  input: string,
  thousandSeperator = ',',
  decimalSeperator = '.',
): number {
  thousandSeperator
  return Number(
    input
      .replaceAll(thousandSeperator, '')
      .replace(decimalSeperator, '.')
      .replace(/[^\d.-]/g, ''),
  )
}
