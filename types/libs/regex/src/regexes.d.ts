/**
 * Matches 2 or more consecutive whitespace characters, including line terminators, tabs, etc.
 */
export declare const regRepeatingWhiteSpace: RegExp;
/**
 * Matches words in a string
 */
export declare const regMatchWords: RegExp;
/**
 * Matches Danish social security numbers with or without the dash.
 * Example: 151199-1512
 */
export declare const regMatchSocialSecurityNumberDK: RegExp;
/**
 * Matches positive or negative integers.
 * Example: -20
 */
export declare const regNumberInteger: RegExp;
/**
 * Matches inverted US format positive or negative decimal numbers with no thousand separators.
 * Example: -20412,3461
 */
export declare const regNumberNoThousandSepEU: RegExp;
/**
 * Matches US format positive or negative decimal numbers with no thousand separators.
 * Example: -20412.3461
 */
export declare const regNumberNoThousandSepUS: RegExp;
/**
 * Matches inverted US format positive or negative decimal numbers with thousand separators.
 * Example: -20.412,34
 */
export declare const regNumberEUFormat: RegExp;
/**
 * Matches US format positive or negative decimal numbers with thousand separators.
 * Example: -20,412.34
 */
export declare const regNumberUSFormat: RegExp;
//# sourceMappingURL=regexes.d.ts.map