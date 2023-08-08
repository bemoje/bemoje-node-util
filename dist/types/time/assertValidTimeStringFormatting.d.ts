/**
 * Asserts that the provided string is a valid time string format.
 * Throws an error if the string is not in the format hh:mm:ss[,|.]mmm.
 * @param string - The string to be validated.
 * @throws Will throw an error if the string is not in the correct format.
 * @example ```ts
 * assertValidTimeStringFormatting('12:34:56.789'); // No error thrown
 * assertValidTimeStringFormatting('12:34:56,789'); // No error thrown
 * assertValidTimeStringFormatting('12:34:56'); // Throws Error
 * ```
 */
export declare function assertValidTimeStringFormatting(string: string): void;
//# sourceMappingURL=assertValidTimeStringFormatting.d.ts.map