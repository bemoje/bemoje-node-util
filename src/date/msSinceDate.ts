/**
 * Calculates the number of milliseconds that have passed since the provided date.
 * @param date The date from which to calculate the elapsed time.
 * @returns The number of milliseconds that have passed since the provided date.
 * @example ```ts
 * msSinceDate(new Date('2020-01-01'));;
 * //=> {number of milliseconds since 2020-01-01}
 * ```
 */
export function msSinceDate(date: Date): number {
  return Date.now() - date.getTime()
}
