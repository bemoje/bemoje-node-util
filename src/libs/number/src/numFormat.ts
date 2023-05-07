import { round } from './round'

/**
 * Formats a number input to a string representation with a given number of decimal places, thousand seperator and decimal seperator.
 * @param input number to format
 * @param thousandSeperator character to use as thousand seperator
 * @param fractionDigits number of decimal places to return. Will pad string with zeroes to ensure this length.
 * @param decimalSeperator character to use as decimal seperator
 */
export function numFormat(
  input: number,
  thousandSeperator = '.',
  fractionDigits = 2,
  decimalSeperator = ',',
): string {
  const minus = input < 0 ? '-' : ''
  const string = Math.abs(round(input, fractionDigits)).toString()
  const split = string.split('.')
  const integer = split[0]
  const decimals = fractionDigits
    ? decimalSeperator + (split[1] || '').padEnd(fractionDigits, '0')
    : ''
  let result = ''
  for (let i = 0; i < integer.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      result = thousandSeperator + result
    }
    result = integer[integer.length - i - 1] + result
  }
  return minus + result + decimals
}
