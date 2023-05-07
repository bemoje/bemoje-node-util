/**
 * Similar to Array.prototype.reduce, but for objects.
 * @param object The object to iterate over.
 * @param callback The function to call for each key-value pair.
 * @param accum The initial value of the accumulator.
 * @param getKeys A function that returns the keys of the object.
 */
export declare function objReduce<T, A>(object: Record<string, T>, callback: (accum: A, value: T, key: string) => A, accum: A, getKeys?: (obj: typeof object) => Iterable<string>): A;
//# sourceMappingURL=objReduce.d.ts.map