/**
 * Builds a regex that matches a string between two strings. Supports regex instead of string.
 * @param left string or regex to match before
 * @param flags regex flags - 'g' and 's' are always added to whatever flags are passed.
 * @remarks The function accepts either strings or regular expressions as the left and right patterns.
 * If a string is provided, it will be escaped to form a valid regular expression.
 * The function also accepts an optional flags parameter to specify regular expression flags.
 * @returns A regular expression that matches text between the left and right patterns.
 * @example ```ts
 * const regex = buildRegexBetween(/a/, /b/)
 * 'abc'.match(regex)?.groups?.mid // 'c'
 * ```
 */
export declare function buildRegexBetween(left: string | RegExp, right: string | RegExp, flags?: string): RegExp;
//# sourceMappingURL=buildRegexBetween.d.ts.map