/**
 * Round a given number with a given precision and rounding function.
 * Shifts with exponential notation to avoid floating-point issues.
 * @param number the number to round.
 * @param precision the number of decimal points.
 * @param func the rounding function to use.
 * @returns The rounded number.
 * @throws if the given number is not finite or NaN.
 * @example ```ts
 * roundWith(1.2345, 2);;
 * //=> 1.23
 * roundWith(1.2345, 2, Math.ceil);;
 * //=> 1.24
 * ```
 */
export declare function roundWith(number: number, precision: number, func?: (n: number) => number): number;
//# sourceMappingURL=roundWith.d.ts.map