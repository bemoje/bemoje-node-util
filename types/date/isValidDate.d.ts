/**
 * Checks if the provided date and time values form a valid date.
 * @param year The year of the date.
 * @param month The month of the date.
 * @param day The day of the date.
 * @param hour The hour of the time.
 * @param minute The minute of the time.
 * @param second The second of the time.
 * @param millisecond The millisecond of the time.
 * @returns A boolean indicating whether the provided date and time values form a valid date.
 * @example ```ts
 * isValidDate(2021, 12, 31, 23, 59, 59, 999);;
 * //=> true
 * isValidDate('2021', '12', '31', '23', '59', '59', '999');;
 * //=> true
 * isValidDate(2021, 13, 31, 23, 59, 59, 999);;
 * //=> false
 * ```
 */
export declare function isValidDate(year?: number | string, month?: number | string, day?: number | string, hour?: number | string, minute?: number | string, second?: number | string, millisecond?: number | string): boolean;
//# sourceMappingURL=isValidDate.d.ts.map