/**
 * Asserts whether the provided array is a valid time array.
 * A valid time array is an array of four numbers, where the first two numbers represent hours and minutes, and the last two numbers represent seconds and milliseconds.
 * Throws an error if the array is not valid.
 * @param array - The array to be validated.
 * @throws Will throw an error if the array length is not 4.
 * @example ```ts
 * assertValidTimeArray([12, 30, 45, 500]); // No error
 * assertValidTimeArray([12, 30, 45]); // Throws Error: 'Expected array of length 4.'
 * ```
 */
export declare function assertValidTimeArray(array: number[]): void;
//# sourceMappingURL=assertValidTimeArray.d.ts.map