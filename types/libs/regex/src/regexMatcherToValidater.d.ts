/**
 * Convert a regex for matching to a regex for validation.
 * @param regex - The regex to convert
 * @example ```js
 * const regexMatchDigits = /\d+/gi;
 * const regexIsDigit = regexMatcherToValidater(regexMatchDigits); //=> /^\d+$/i
 * const isDigit = (str) => regexIsDigit.test(str)
 * isDigit('1') //=> true
 * isDigit('a') //=> false
 * ```
 */
export declare function regexMatcherToValidater(regex: RegExp): RegExp;
//# sourceMappingURL=regexMatcherToValidater.d.ts.map