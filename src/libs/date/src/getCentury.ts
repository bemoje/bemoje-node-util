import { assertValidDateYear } from './assertValidDateYear';

/**
 * Get century from year.
 * @example
 * ```js
 * getCentury(2009);
 * //=> 21
 * ```
 */
export function getCentury(year: number): number {
  assertValidDateYear(year);
  return Math.floor(year / 100) + 1;
}
