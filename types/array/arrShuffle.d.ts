/**
 * Shuffle items in an array in-place. Guarantees changes.
 * @remarks This function does not guarantee that the order of the elements will be different after shuffling.
 * @typeparam T - The type of the elements in the input array.
 * @returns The same array, but shuffled.
 * @param input The array to shuffle.
 * @example ```ts
 * const input = [1, 2, 3, 4, 5];
 * arrShuffle(input);
 * //=> [3, 1, 5, 2, 4]
 * ```
 */
export declare function arrShuffle<T>(input: Array<T>): Array<T>;
//# sourceMappingURL=arrShuffle.d.ts.map