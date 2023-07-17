/**
 * Sets the specified properties of an object to be non-writable.
 * @template T - The type of the object.
 * @param object The object whose properties are to be made non-writable.
 * @param propertyNames The names of the properties to be made non-writable.
 * @returns void
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * setNonWritable(obj, 'a', 'b');
 * obj;;
 * //=> { a: 1, b: 2, c: 3 }
 * obj.a = 10;;
 * //=> Throws an error
 * obj.b = 20;;
 * //=> Throws an error
 * obj.c = 30;;
 * //=> Works fine
 * ```
 */
export declare function setNonWritable<T>(object: T, ...propertyNames: string[]): void;
//# sourceMappingURL=setNonWritable.d.ts.map