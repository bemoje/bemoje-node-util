import type { ArrayPredicate } from '../types/ArrayPredicate';
/**
 * This function filters an array based on a predicate function, modifying the original array.
 * @template T The type of elements in the input array.
 * @param input The array to be filtered.
 * @param f The predicate function to determine which elements to keep. This function takes three arguments: the current element, its index, and the original array.
 * @returns The original array, now filtered based on the predicate function.
 * @example ```ts
 * arrFilterMutable([1, 2, 3, 4, 5], (num: number) => num % 2 === 0);;
 * //=> [2, 4]
 * ```
 */
export declare function arrFilterMutable<T>(input: Array<T>, f: ArrayPredicate<T>): Array<T>;
//# sourceMappingURL=arrFilterMutable.d.ts.map