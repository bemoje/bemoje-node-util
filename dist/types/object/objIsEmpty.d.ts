/**
 * Checks if an object is empty. This function iterates over the keys of the provided object and checks if any key is defined.
 * @remarks This function uses the `Object.keys()` method to check if the object has any keys.
 * If the object has at least one key, the function returns `false`, otherwise it returns `true`.
 * @typeparam T - The type of the values in the object.
 * @returns A boolean indicating whether the object is empty or not.
 * @param obj The object to check.
 * @example ```ts
 * const emptyObject = {};
 * const nonEmptyObject = { key: 'value' };
 * objIsEmpty(emptyObject);
 * //=> true
 * objIsEmpty(nonEmptyObject);
 * //=> false
 * ```
 */
export declare function objIsEmpty<T>(obj: Record<string, T>): boolean;
//# sourceMappingURL=objIsEmpty.d.ts.map