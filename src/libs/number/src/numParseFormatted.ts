import { strReplaceAll } from '../../string/src/strReplaceAll'

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
  if (!input) return NaN
  const n = Number(
    strReplaceAll(input, thousandSeperator, '')
      .replace(decimalSeperator, '.')
      .replace(/[^\d.-]/g, ''),
  )
  if (!Number.isNaN(n) && Number.isFinite(n)) return n
  return Number(input)
}
