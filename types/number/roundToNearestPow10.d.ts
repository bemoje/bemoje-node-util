/**
 * Round a given number to a given nearest whole number.
 * @param integer the number to round.
 * @param nearest the nearest power of ten to round to.
 * @throws if any of the arguments are either not finite, NaN or not an integer.
 * @returns The rounded integer.
 * @throws if 'nearest' is not a power of ten.
 * @example ```ts
 * roundToNearestPow10(111, 1) //=> 111
 * roundToNearestPow10(111, 10) //=> 110
 * roundToNearestPow10(111, 100) //=> 100
 * roundToNearestPow10(111, 1000) //=> 0
 * roundToNearestPow10(111, 50) //=> throws TypeError
 * ```
 */
export declare function roundToNearestPow10(integer: number, nearest?: number): number;
//# sourceMappingURL=roundToNearestPow10.d.ts.map