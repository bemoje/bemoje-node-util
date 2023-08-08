/**
 * Searches for an element in an array in reverse order and returns the index of the last occurrence of the element for which the provided testing function returns true.
 * If no such element is found, it returns -1.
 * @param input - The array to search in.
 * @param predicate - The testing function. Takes a value and returns a boolean.
 * @returns The index of the last occurrence of the element in the array that passes the test. If no such element is found, it returns -1.
 * @example ```ts
 * const arr = [1, 2, 3, 4, 5, 4, 3];
 * arrFindLastIndexOf(arr, (value) => value === 4);
 * //=> 5
 * ```
 */
export declare function arrFindLastIndexOf<T>(input: Array<T>, predicate: (value: T) => boolean): number;
//# sourceMappingURL=arrFindLastIndexOf.d.ts.map