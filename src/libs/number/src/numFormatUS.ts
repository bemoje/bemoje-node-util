import { numFormat } from './numFormat'

/**
 * Formats a number input to a string representation in the style of 5,000,000.00
 * @param input number to format
 * @param decimalPlaces number of decimal places to return. Will pad string with zeroes to ensure this length.
 */
export function numFormatUS(input: number, decimalPlaces = 0): string {
  return numFormat(input, ',', decimalPlaces, '.')
}
