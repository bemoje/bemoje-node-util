export type Comparator = (a: any, b: any) => number;
/**
 * Returns a given comparator as an array compatible comparator. Behaves as if the array to sort was recursively flattened.
 * @param comparator compare function
 * @param descending whether the input comparator sorts in descending order
 */
export declare function compareArray(comparator: Comparator, descending?: boolean): Comparator;
/**
 * Number comparator function (ascending)
 * @param a first value to compare
 * @param b second value to compare
 */
export declare function compareNumber(a: number, b: number): number;
/**
 * Number comparator function (descending)
 * @param a first value to compare
 * @param b second value to compare
 */
export declare function compareNumberDescending(a: number, b: number): number;
/**
 * number, bigint, boolean comparator function (ascending)
 * @param a first value to compare
 * @param b second value to compare
 */
export declare function compareNumeric(a: number | bigint | boolean, b: number | bigint | boolean): number;
/**
 * number, bigint, boolean comparator function (descending)
 * @param a first value to compare
 * @param b second value to compare
 */
export declare function compareNumericDescending(a: number | bigint | boolean, b: number | bigint | boolean): number;
/**
 * Alpha numeric comparator function (ascending)
 * @param a first value to compare
 * @param b second value to compare
 */
export declare function compareString(a: string, b: string): number;
/**
 * Alpha numeric comparator function (descending)
 * @param a first value to compare
 * @param b second value to compare
 */
export declare function compareStringDescending(a: string, b: string): number;
//# sourceMappingURL=sort.d.ts.map