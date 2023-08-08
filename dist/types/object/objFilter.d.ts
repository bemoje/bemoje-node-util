/**
 * Filters the properties of an object based on a callback function.
 * @param object The object to filter.
 * @param callback The callback function used to filter the object properties.
 * @template T - The type of the values in the object.
 * @param - The function to get the keys of the object. Defaults to `Object.keys`.
 * @returns A new object with the properties that passed the test. If no properties passed the test, an empty object will be returned.
 * @param getKeys The function used to get the keys of the object.
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * objFilter(obj, (value, key) => value > 1);
 * //=> { b: 2, c: 3 }
 * ```
 */
export declare function objFilter<T>(object: Record<string, T>, callback: (value: T, key: string) => boolean, getKeys?: (obj: typeof object) => Iterable<string>): Record<string, T>;
//# sourceMappingURL=objFilter.d.ts.map