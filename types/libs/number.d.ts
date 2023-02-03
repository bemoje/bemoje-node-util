/**
 * Formats a number input to a string representation in the style of 5.000.000,00
 * @param input number to format
 * @param decimalPlaces number of decimal places to return. Will pad string with zeroes to ensure this length.
 */
export declare function numFormatEU(input: number, decimalPlaces?: number): string;
/**
 * Formats a number input to a string representation in the style of 5,000,000.00
 * @param input number to format
 * @param decimalPlaces number of decimal places to return. Will pad string with zeroes to ensure this length.
 */
export declare function numFormatUS(input: number, decimalPlaces?: number): string;
/**
 * Approximate the logarithm base 10 of a small integer.
 * @param x - The integer to approximate the logarithm of.
 */
export declare function numApproximateLog10(x: number): number;
//# sourceMappingURL=number.d.ts.map