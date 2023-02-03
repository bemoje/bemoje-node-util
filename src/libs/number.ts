import numberFormat from 'format-number';

const eu = new Map();
const us = new Map();

/**
 * Formats a number input to a string representation in the style of 5.000.000,00
 * @param input number to format
 * @param decimalPlaces number of decimal places to return. Will pad string with zeroes to ensure this length.
 */
export function numFormatEU(input: number, decimalPlaces = 0): string {
  let formatter = eu.get(decimalPlaces);
  if (!formatter) {
    formatter = numberFormat({
      truncate: decimalPlaces,
      padRight: decimalPlaces,
      integerSeparator: '.',
      decimal: ',',
    });
    eu.set(decimalPlaces, formatter);
  }
  return formatter(input);
}

/**
 * Formats a number input to a string representation in the style of 5,000,000.00
 * @param input number to format
 * @param decimalPlaces number of decimal places to return. Will pad string with zeroes to ensure this length.
 */
export function numFormatUS(input: number, decimalPlaces = 0): string {
  let formatter = us.get(decimalPlaces);
  if (!formatter) {
    formatter = numberFormat({
      truncate: decimalPlaces,
      padRight: decimalPlaces,
      integerSeparator: ',',
      decimal: '.',
    });
    us.set(decimalPlaces, formatter);
  }
  return formatter(input);
}

const POW10 = [1, 1e1, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9];

/**
 * Approximate the logarithm base 10 of a small integer.
 * @param x - The integer to approximate the logarithm of.
 */
export function numApproximateLog10(x: number): number {
  if (x < POW10[5]) {
    if (x < POW10[2]) {
      return x < POW10[1] ? 0 : 1;
    }
    if (x < POW10[4]) {
      return x < POW10[3] ? 2 : 3;
    }
    return 4;
  }
  if (x < POW10[7]) {
    return x < POW10[6] ? 5 : 6;
  }
  if (x < POW10[9]) {
    return x < POW10[8] ? 7 : 8;
  }
  return 9;
}
