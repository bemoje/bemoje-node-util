/**
 * Builds a regex that matches a string between two strings. Supports regex instead of string.
 * @param left - string or regex to match before
 * @param right - string or regex to match after
 * @param flags - regex flags - 'g' and 's' are always added to whatever flags are passed.
 */
export declare function buildRegexBetween(left: string | RegExp, right: string | RegExp, flags?: string): RegExp;
//# sourceMappingURL=buildRegexBetween.d.ts.map