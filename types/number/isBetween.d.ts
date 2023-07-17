/**
 * Checks if a number is between two other numbers.
 * @param n The number to check.
 * @param min The minimum boundary.
 * @param max The maximum boundary.
 * @param minExcl If true, the minimum boundary is exclusive. Default is false.
 * @param maxExcl If true, the maximum boundary is exclusive. Default is false.
 * @returns A boolean indicating whether the number is between the two boundaries.
 * @example ```ts
 * isBetween(5, 1, 10);
 * //=> true
 * isBetween(1, 1, 10);
 * //=> true
 * isBetween(1, 1, 10, true);
 * //=> false
 * ```
 */
export declare function isBetween(n: number, min: number, max: number, minExcl?: boolean, maxExcl?: boolean): boolean;
//# sourceMappingURL=isBetween.d.ts.map