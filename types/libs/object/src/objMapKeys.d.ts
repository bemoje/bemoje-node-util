/**
 * Similar to Array.prototype.map, but for object keys - not values.
 * @param object The object to iterate over.
 * @param callback The function to call for each key-value pair.
 * @param getKeys A function that returns the keys of the object.
 */
export declare function objMapKeys<T>(object: Record<string, T>, callback: (key: string, value: T) => string, getKeys?: (obj: typeof object) => Iterable<string>): Record<string, T>;
//# sourceMappingURL=objMapKeys.d.ts.map