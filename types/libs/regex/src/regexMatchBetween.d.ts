import { RexecYield } from '../';
export type matchBetweenYield = {
    left: RexecYield;
    mid: RexecYield;
    right: RexecYield;
};
export type matchBetweenFunction = (input: string) => Generator<matchBetweenYield>;
/**
 * Returns a function that matches a string between two given strings or regexes.
 * @param left - string or regex to match before
 * @param right - string or regex to match after
 * @param flags - regex flags - 'g' and 's' are always added to whatever flags are passed.
 * @example
 * ```ts
 * const input = 'Hello world! This is a test string.'
 * const matchBetween = regexMatchBetween('Hello', 'test')
 * [...matchBetween(input)]
 * // [
 * //   {
 * //     left: { index: 0, match: 'Hello', groups: {}, lastIndex: 5 },
 * //     mid: { index: 12, match: ' world! This is a ', groups: {}, lastIndex: 31 },
 * //     right: { index: 36, match: 'test', groups: {}, lastIndex: 40 },
 * //   },
 * // ]
 * ```
 */
export declare function regexMatchBetween(left: string | RegExp, right: string | RegExp, flags?: string): matchBetweenFunction;
//# sourceMappingURL=regexMatchBetween.d.ts.map