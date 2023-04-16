import { isValidDate } from './isValidDate'

/**
 * Throws if the given year is invalid.
 */
export function assertValidDate(
  year?: number | string,
  month?: number | string,
  day?: number | string,
  hour?: number | string,
  minute?: number | string,
  second?: number | string,
  millisecond?: number | string,
): void {
  if (!isValidDate(year, month, day, hour, minute, second, millisecond)) {
    throw new Error(
      `Expected valid date. Got: ${JSON.stringify({
        year,
        month,
        day,
        hour,
        minute,
        second,
        millisecond,
      })}.`,
    )
  }
}
