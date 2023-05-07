import { numParseFormatted } from './numParseFormatted'

/**
 * Parses a danish-formatted number string to a number
 */
export function numParseFormattedDK(input: string): number {
  return numParseFormatted(input, '.', ',')
}
