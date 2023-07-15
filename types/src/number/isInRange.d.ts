/**
 * Checks if a number is within a specified range.
 * @param n The number to check.
 * @param range The range to check within. It is an array of two numbers, where the first number is the start of the range and the second number is the end of the range.
 * @param exclusive An optional parameter that specifies whether the start and end of the range are exclusive. It is an array of two booleans, where the first boolean corresponds to the start of the range and the second boolean corresponds to the end of the range. If a boolean is true, the corresponding end of the range is exclusive. Default is [false, false], which means both ends of the range are inclusive.
 * @returns A boolean indicating whether the number is within the range.
 * @example ```ts
 * isInRange(5, [1, 10]);
 * //=> true
 * isInRange(1, [1, 10]);
 * //=> true
 * isInRange(10, [1, 10]);
 * //=> true
 * isInRange(0, [1, 10]);
 * //=> false
 * isInRange(11, [1, 10]);
 * //=> false
 * isInRange(1, [1, 10], [true, false]);
 * //=> false
 * isInRange(10, [1, 10], [false, true]);
 * //=> false
 * ```
 */
export declare function isInRange(n: number, range: [number, number], exclusive?: [boolean, boolean]): boolean;
//# sourceMappingURL=isInRange.d.ts.map