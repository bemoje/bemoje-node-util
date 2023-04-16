/**
 * Convert a regex for matching to a regex for validation.
 * @example ```js
 * const regexMatchDigits = /\d/g;
 * const regexIsDigit = regexMatcherToValidater(regexMatchDigits); //=> /^\d$/
 * const isDigit = (str) => regexIsDigit.test(str)
 * isDigit('1') //=> true
 * isDigit('a') //=> false
 * ```
 */
export declare function regexMatcherToValidater(regex: RegExp): RegExp;
//# sourceMappingURL=regexMatcherToValidater.d.ts.map