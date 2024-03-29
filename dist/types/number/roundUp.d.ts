/**
 * Round a given number up with a given precision.
 * Shifts with exponential notation to avoid floating-point issues.
 * @param number the number to round.
 * @param precision the number of decimal points.
 * @returns The rounded number.
 * @throws if the given number is not finite or NaN.
 * @example ```ts
 * roundUp(1.2345, 2);;
 * //=> 1.23
 * roundUp(1.2345);;
 * //=> 2
 * ```
 */
export declare function roundUp(number: number, precision?: number): number;
//# sourceMappingURL=roundUp.d.ts.map