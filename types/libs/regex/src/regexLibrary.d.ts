/**
 * Matches 2 or more consecutive whitespace characters, including line terminators, tabs, etc.
 */
export declare const repeatingWhiteSpace: RegExp;
/**
 * Matches words in a string
 */
export declare const words: RegExp;
/**
 * Matches Danish social security numbers with or without the dash.
 * Example: 151199-1512
 */
export declare const socialSecurityNumbersDK: RegExp;
/**
 * Matches positive or negative integers.
 * Example: -20
 */
export declare const integers: RegExp;
/**
 * Matches inverted US format positive or negative decimal numbers with no thousand separators.
 * Example: -20412,3461
 */
export declare const numberNoThousandSepCommaDecimal: RegExp;
/**
 * Matches US format positive or negative decimal numbers with no thousand separators.
 * Example: -20412.3461
 */
export declare const numberNoThousandSepDotDecimal: RegExp;
/**
 * Matches inverted US format positive or negative decimal numbers with thousand separators.
 * Example: -20.412,34
 */
export declare const numberDotSepCommaDecimal: RegExp;
/**
 * Matches US format positive or negative decimal numbers with thousand separators.
 * Example: -20,412.34
 */
export declare const numberCommaSepDotDecimal: RegExp;
/**
 * Prefixes for hex colors, hex decimal and regexp unicode hex
 */
export declare const isHexPrefix: RegExp;
/**
 * Understands prefixes for hex colors, hex decimal and regexp unicode hex
 */
export declare const isHex: RegExp;
/**
 * For checking if a string is of only alpha characters for a specific locale.
 */
export declare const isLocaleAlpha: Map<string, RegExp>;
/**
 * For checking if a string is of only alpha-numeric characters for a specific locale.
 */
export declare const isLocaleAlphaNumeric: Map<string, RegExp>;
//# sourceMappingURL=regexLibrary.d.ts.map