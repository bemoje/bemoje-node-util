/**
 * Matches inverted US format positive or negative decimal numbers with thousand separators.
 * Example: -20.412,34
 */
export const regNumberDotSepCommaDecimal = /-?\d{1,3}(\.\d{3})*(,\d+)?/g
