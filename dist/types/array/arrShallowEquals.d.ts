/**
 * This function compares the length of the two arrays and then checks if each element at the corresponding index is equal.
 * @param input1 The first array to compare.
 * @template T - The type of the elements in the arrays.
 * @returns A boolean indicating whether the two arrays are shallowly equal.
 * @param input2 The second array to compare.
 * Checks if two arrays are shallowly equal.
 * @example ```ts
 * arrShallowEquals([1, 2, 3], [1, 2, 3]);
 * //=> true
 * arrShallowEquals([1, 2, 3], [1, 2, 4]);
 * //=> false
 * ```
 */
export declare function arrShallowEquals<T>(input1: T[], input2: T[]): boolean;
//# sourceMappingURL=arrShallowEquals.d.ts.map