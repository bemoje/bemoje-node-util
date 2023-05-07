import type { Comparator } from '../../interfaces';
export interface ISortedArrayOptions<T> {
    compare?: Comparator;
    data?: Iterable<T>;
    allowDuplicates?: boolean;
}
export declare class SortedArray<T> extends Array {
    private compare;
    private allowDuplicates;
    constructor(options?: ISortedArrayOptions<T>);
    /**
     * Convert to a normal Array instance
     */
    toArray(): Array<T>;
    add(element: T): SortedArray<T>;
    /**
     * Add elements to the sorted array.
     * @param elements - The elements to add to the sorted array
     */
    addMany(...elements: T[]): SortedArray<T>;
    /**
     * Remove all duplicate elements in the sorted array, leaving only unique values. Equality is determined by the compare function.
     */
    unique(): SortedArray<T>;
    /**
     * Returns a tuple containing the index of where to add an element to keep the array sorted and also whether an identical element was found.
     * @param element - The element for which to find its insertion index
     */
    insertionIndex(element: T): [number, boolean];
    /**
     * Returns a tuple containing the first index of where to add an element to keep the array sorted and also whether an identical element was found.
     * @param element - The element for which to find its insertion index
     */
    firstInsertionIndex(element: T): [number, boolean];
    /**
     * Returns a tuple containing the last index of where to add an element to keep the array sorted and also whether an identical element was found.
     * @param element - The element for which to find its insertion index
     */
    lastInsertionIndex(element: T): [number, boolean];
    /**
     * Returns the index of the first element found that is determined equal by the compare function.
     * @param element - The element to find
     */
    indexOfCompare(element: T): number;
    /**
     * Returns the index of the first element that is determined equal by the compare function.
     * @param element - The element to find
     */
    firstIndexOfCompare(element: T): number;
    /**
     * Returns the index of the last element that is determined equal by the compare function.
     * @param element - The element to find
     */
    lastIndexOfCompare(element: T): number;
    /**
     * Returns all indices at which element exists. Equality is determined by the compare function.
     * @param element - The element to find
     */
    indicesOfCompare(element: T): Array<number>;
    /**
     * Returns the interestion of this and another sorted array.
     * @param sorted - another sorted array with which to find intersections
     */
    intersection(sorted: Array<T>): Array<T>;
    /**
     * Pushes and sorts an element into the array.
     */
    push(...elements: T[]): number;
    /**
     * Throws an error since it would break the sorted state.
     */
    reverse(): never;
    /**
     * Same as Array.prototype.splice, but cannot insert elements
     */
    splice(start: number, deleteCount?: number): SortedArray<T>;
}
//# sourceMappingURL=SortedArray.d.ts.map