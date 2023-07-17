/**
 * Merges two objects deeply, returning a new object that has the combined properties of both.
 * If a property exists in both objects, the value from the source object will be used.
 * @template T - The type of the target object.
 * @template U - The type of the source object.
 * @param target The target object to which properties will be added.
 * @param source The source object from which properties will be copied.
 * @returns A new object that has the combined properties of both the target and source objects.
 * @example ```ts
 * objAssignDeep({ a: 1, b: 2 }, { b: 3, c: 4 });;
 * //=> { a: 1, b: 3, c: 4 }
 * ```
 */
export declare function objAssignDeep<T, U>(target: T, source: U): T & U;
//# sourceMappingURL=objAssignDeep.d.ts.map