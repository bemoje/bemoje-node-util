import numberFormat from 'format-number'

const eu = new Map()

/**
 * Formats a number input to a string representation in the style of 5.000.000,00
 * @param input number to format
 * @param decimalPlaces number of decimal places to return. Will pad string with zeroes to ensure this length.
 */
export function numFormatEU(input: number, decimalPlaces = 0): string {
  let formatter = eu.get(decimalPlaces)
  if (!formatter) {
    formatter = numberFormat({
      truncate: decimalPlaces,
      padRight: decimalPlaces,
      integerSeparator: '.',
      decimal: ',',
    })
    eu.set(decimalPlaces, formatter)
  }
  return formatter(input)
}
