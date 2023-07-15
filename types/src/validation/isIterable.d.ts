/**
 * Checks if the given object is iterable.
 * @remarks This function checks if the given object is iterable by checking if the object is not null, is an object, and has a function for the Symbol.iterator property.
 * @typeparam T - The type of the object to check.
 * @param o The object to check.
 * @returns A boolean indicating whether the object is iterable.
 * @example ```ts
 * isIterable([1, 2, 3]);;
 * //=> true
 * isIterable(5);;
 * //=> false
 * ```
 */
export declare function isIterable<T>(o: T): boolean;
//# sourceMappingURL=isIterable.d.ts.map