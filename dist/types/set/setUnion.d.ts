/**
 * Computes the union of multiple sets.
 * @remarks This function does not mutate the original sets.
 * @typeparam T - The type of elements in the sets.
 * @returns A new set that is the union of all sets in the input array.
 * @param sets An array of sets to compute the union of.
 * @example ```ts
 * const set1 = new Set([1, 2, 3]);
 * const set2 = new Set([2, 3, 4]);
 * const set3 = new Set([3, 4, 5]);
 * setUnion([set1, set2, set3]);
 * //=> Set(5) { 1, 2, 3, 4, 5 }
 * ```
 */
export declare function setUnion<T>(sets: Array<Set<T>>): Set<T>;
//# sourceMappingURL=setUnion.d.ts.map