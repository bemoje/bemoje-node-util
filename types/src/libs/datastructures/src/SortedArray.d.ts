export type SortedArrayOptions<T> = {
    data?: Iterable<T>;
    compare?: (a: any, b: any) => number;
    allowDuplicates?: boolean;
};
export declare class SortedArray<T> extends Array {
    private compare;
    private allowDuplicates;
    constructor(options?: SortedArrayOptions<T>);
    /**
     * Add elements to the sorted array.
     * @param elements - The elements to add to the sorted array
     */
    add(...elements: T[]): SortedArray<T>;
    /**
     * Remove all duplicate elements in the sorted array, leaving only unique values. Equality is determined by the compare function.
     */
    unique(): SortedArray<T>;
    /**
     * Returns the index of where to add an element to keep the array sorted.
     * @param element - The element for which to find its insertion index
     */
    insertionIndex(element: T): number;
    /**
     * Returns the index of the first element found that is determined equal by the compare function.
     * @param element - The element to find
     */
    indexOf(element: T): number;
    /**
     * Returns all indices at which element exists. Equality is determined by the compare function.
     * @param element - The element to find
     */
    indicesOf(element: T): Array<number>;
    /**
     * Returns the interestion of this and another sorted array.
     * @param sorted - another sorted array with which to find intersections
     */
    intersection(sorted: Array<T>): Array<T>;
    /**
     * Convert to a normal Array instance
     */
    toArray(): Array<T>;
}
//# sourceMappingURL=SortedArray.d.ts.map