/**
 * Converts an array of time values into a string representation.
 * The array should contain four numbers representing hours, minutes, seconds, and milliseconds respectively.
 * The function does not perform any safety checks on the input array.
 * @param array - An array of four numbers representing hours, minutes, seconds, and milliseconds.
 * @param msDelimiter - A string to be used as the delimiter between seconds and milliseconds. Defaults to '.'.
 * @returns A string representation of the time.
 * @example ```ts
 * const timeArray = [13, 15, 45, 123];
 * const result = timeArrayToStringUnsafe(timeArray, ':');
 * console.log(result); // Outputs: "13:15:45:123"
 * ```
 */
export declare function timeArrayToStringUnsafe(array: number[], msDelimiter?: string): string;
//# sourceMappingURL=timeArrayToStringUnsafe.d.ts.map