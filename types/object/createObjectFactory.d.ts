/**
 * Creates a factory function for creating objects with specified keys and default values.
 * @template T The type of the values.
 * @param keys An array of strings representing the keys of the objects to be created.
 * @param defaultValues An optional array of default values for the keys. If provided, its length should not be larger than the length of the keys array.
 * @returns An `ObjectFactory` function. When called, this function takes an optional array of values and returns an object with the specified keys and values. If the values array is not provided or if a value is `undefined`, the corresponding default value is used.
 * @throws If the length of the `defaultValues` array is larger than the length of the `keys` array, or if the length of the `values` array passed to the factory function is larger than the length of the `keys` array.
 * @example ```ts
 * createObjectFactory(['key1', 'key2'], ['default1', 'default2'])(['value1']);
 * //=> { key1: 'value1', key2: 'default2' }
 * ```
 */
export declare function createObjectFactory<T>(keys: string[], defaultValues?: T[]): (values?: T[]) => Record<string, T>;
//# sourceMappingURL=createObjectFactory.d.ts.map