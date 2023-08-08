/**
 * Convert a regex for matching to a regex for validation.
 * @returns A new regular expression that matches the entire string.
 * @param regex The regex to convert
 * @example ```ts
 * const regexMatchDigits = /\d+/gi;
 * const regexIsDigit = regexMatcherToValidater(regexMatchDigits); //=> /^\d+$/i
 * const isDigit = (str) => regexIsDigit.test(str)
 * isDigit('1') //=> true
 * isDigit('a') //=> false
 * ```
 */
export declare function regexMatcherToValidater(regex: RegExp): RegExp;
//# sourceMappingURL=regexMatcherToValidater.d.ts.map