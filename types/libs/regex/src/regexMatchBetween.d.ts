import { matchBetweenFunction } from '../';
/**
 * Returns a function that matches a string between two given strings or regexes.
 * @param left - string or regex to match before
 * @param right - string or regex to match after
 * @param flags - regex flags - 'g' and 's' are always added to whatever flags are passed.
 */
export declare function regexMatchBetween(left: string | RegExp, right: string | RegExp, flags?: string): matchBetweenFunction;
//# sourceMappingURL=regexMatchBetween.d.ts.map