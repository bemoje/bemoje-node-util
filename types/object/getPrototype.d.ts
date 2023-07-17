/**
 * Returns the prototype (i.e. the internal [[Prototype]] property) of the specified object.
 * @remarks This function is a wrapper around the built-in `Object.getPrototypeOf` function.
 * @param o The object whose prototype is to be returned.
 * @returns The prototype of the specified object.
 * @example ```ts
 * getPrototype({ a: 1 });;
 * //=> "{}"
 * ```
 */
export declare function getPrototype(o: typeof Object.prototype): typeof Object.prototype;
//# sourceMappingURL=getPrototype.d.ts.map