export type Comparator = (a: any, b: any) => number;
/**
 * Returns a given comparator as an array compatible comparator. Behaves as if the array to sort was recursively flattened.
 * @param comparator compare function
 * @param descending whether the input comparator sorts in descending order
 */
export declare function compareArrays(comparator: Comparator, descending?: boolean): Comparator;
/**
 * Numeric comparator function (ascending)
 * @param a first value to compare
 * @param b second value to compare
 */
export declare function compareNumeric(a: number, b: number): number;
/**
 * Numeric comparator function (descending)
 * @param a first value to compare
 * @param b second value to compare
 */
export declare function compareNumericDescending(a: number, b: number): number;
/**
 * Alpha numeric comparator function (ascending)
 * @param a first value to compare
 * @param b second value to compare
 */
export declare function compareAlphaNumeric(a: string, b: string): number;
/**
 * Alpha numeric comparator function (descending)
 * @param a first value to compare
 * @param b second value to compare
 */
export declare function compareAlphaNumericDescending(a: string, b: string): number;
//# sourceMappingURL=sort.d.ts.map