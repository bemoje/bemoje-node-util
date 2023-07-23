/**
 * Converts a time string into an array of numbers.
 * This function is unsafe because it does not handle invalid input.
 * @param string - The time string to convert. This should be in the format "HH:MM:SS".
 * @returns An array of numbers representing the time. The first element is the hour, the second is the minute, and the third is the second.
 * @throws This function may throw an error if the input string is not in the expected format.
 * @example ```ts
 * const timeArray = timeStringToArrayUnsafe("12:34:56");
 * console.log(timeArray); // [12, 34, 56]
 * ```
 */
export declare function timeStringToArrayUnsafe(string: string): number[];
//# sourceMappingURL=timeStringToArrayUnsafe.d.ts.map