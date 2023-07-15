/**
 * Checks if the given value is a prototype.
 * @template T - The type of the value to check.
 * @param value The value to check.
 * @returns A boolean indicating whether the value is a prototype.
 * @example ```ts
 * isPrototype({});;
 * //=> false
 * isPrototype(Object.getPrototypeOf({}));;
 * //=> true
 * ```
 */
export declare function isPrototype<T>(value: T): boolean;
//# sourceMappingURL=isPrototype.d.ts.map