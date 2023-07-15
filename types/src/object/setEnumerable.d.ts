/**
 * Sets the enumerable property of the specified properties of an object to true.
 * @template T - The type of the object.
 * @param object The object whose properties' enumerable property will be set to true.
 * @param propertyNames The names of the properties to be set enumerable.
 * @returns void
 * @example ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * setEnumerable(obj, 'a', 'b');
 * Object.keys(obj);;
 * //=> ['a', 'b']
 * ```
 * @remarks This function uses `Object.defineProperty` to set the enumerable property.
 * @throws This function will throw an error if the property does not exist on the object.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty | Object.defineProperty}
 */
export declare function setEnumerable<T>(object: T, ...propertyNames: string[]): void;
//# sourceMappingURL=setEnumerable.d.ts.map