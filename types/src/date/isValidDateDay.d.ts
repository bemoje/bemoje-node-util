/**
 * Checks if the given day is a valid day of the month.
 * @param day The day of the month. Must be an integer.
 * @param month The month of the year. Must be an integer.
 * @param year The year. Optional parameter. If not provided, the function will not check for leap years.
 * @returns A boolean indicating whether the day is valid for the given month and year.
 * @example ```ts
 * isValidDateDay(31, 1, 2000);
 * //=> true
 * isValidDateDay(31, 2, 2000);
 * //=> false
 * isValidDateDay(29, 2);
 * //=> true
 * ```
 */
export declare function isValidDateDay(day: number, month: number, year?: number): boolean;
//# sourceMappingURL=isValidDateDay.d.ts.map