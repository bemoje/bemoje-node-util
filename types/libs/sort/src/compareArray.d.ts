/**
 * Returns a given comparator as an array compatible comparator. Behaves as if the array to sort was recursively flattened.
 * @param comparator compare function
 * @param descending whether the input comparator sorts in descending order
 */
export declare function compareArray(comparator: (a: any, b: any) => number, descending?: boolean): (a: any, b: any) => number;
//# sourceMappingURL=compareArray.d.ts.map