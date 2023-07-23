/**
 * Converts a given time in milliseconds to an array of hours, minutes, seconds, and remaining milliseconds.
 * This function does not perform any safety checks and assumes the input is a valid number.
 * @remarks
 * This function is unsafe because it does not perform any checks to ensure the input is a valid number. If the input is not a valid number, the function will return incorrect results or throw an error.
 * @param ms - The time in milliseconds to convert.
 * @returns An array where the first element is hours, the second is minutes, the third is seconds, and the fourth is remaining milliseconds.
 * @example ```ts
 * const timeArray = timeIntToArrayUnsafe(3601000);
 * console.log(timeArray); // [1, 0, 1, 0]
 * ```
 */
export declare function timeIntToArrayUnsafe(ms: number): number[];
//# sourceMappingURL=timeIntToArrayUnsafe.d.ts.map