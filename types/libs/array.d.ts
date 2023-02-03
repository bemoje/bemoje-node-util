export type Callback = (value: any, index: number, array: Array<any>) => void;
export type Predicate = (value: any, index: number, array: Array<any>) => boolean;
/**
 * Same as Array.prototype.map but performs operations in palce (not immutable).
 * @param input - input array
 * @param f - iterator
 * @example
 * ```js
 * expect(
 *   util.arrMapMutable([1, 2, 3, 4, 5], (value: number) => {
 *     return value + 1;
 *   }),
 * ).toStrictEqual([2, 3, 4, 5, 6]);
 * ```
 */
export declare function arrMapMutable(input: Array<any>, f: Callback): Array<any>;
/**
 * Uses Array.prototype.sort but sorts numbers.
 * @param input - input array
 */
export declare function arrSortNumeric(input: Array<any>): Array<any>;
/**
 * Swap array elements in place. Runtime: O(1)
 * @param input to be modified
 * @param from index of the first element
 * @param to index of the second element
 */
export declare function arrSwap(input: Array<any>, from: number, to: number): Array<any>;
/**
 * Returns whether or not two arrays shallow equal each other.
 * @param input1 first array
 * @param input2 second array
 */
export declare function arrShallowEquals(input1: Array<any>, input2: Array<any>): boolean;
/**
 * Shuffle items in an array in-place. Guarantees that the array has changes.
 * @param input - The array to shuffle.
 */
export declare function arrShuffle(input: Array<any>): Array<any>;
/**
 * Returns all indexes at which an element is found.
 * @param input - The array to search
 * @param element - The element to find
 */
export declare function arrIndexesOf(input: Array<any>, element: any): Array<number>;
/**
 * Returns true if the predicate is satisfied for every element of the passed array; otherwise false.
 * @param input - The array
 * @param  predicate - A predicate callback function
 */
export declare function arrEvery(input: Array<any>, predicate: Predicate): boolean;
/**
 * Check whether a condition is true for any element of an array. The condition check is in the form of a callback.
 * @param input - The array
 * @param  predicate - A predicate callback function
 */
export declare function arrSome(input: Array<any>, predicate: Predicate): boolean;
/**
 * Flattens the passed array recursively.
 * @param input - the array to flatten
 */
export declare function arrFlatten(input: Array<any>): Array<any>;
//# sourceMappingURL=array.d.ts.map