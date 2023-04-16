/**
 * Iterate the prototype chain of a given object.
 * @example
 * ```js
 * class A {}
 * class B extends A {}
 * class C extends B {}
 * const instance = new C()
 *
 * iteratePrototypeChain(C)
 * //=> [ C, B, A, Function.prototype, Object.prototype]
 *
 * iteratePrototypeChain(C.prototype)
 * //=> [C.prototype, B.prototype, A.prototype, Object.prototype]
 *
 * iteratePrototypeChain(instance)
 * //=> [instance, C.prototype, B.prototype, A.prototype, Object.prototype]
 * ```
 */
export declare function iteratePrototypeChain(object: Record<string, any>): Generator<Record<string, any>>;
//# sourceMappingURL=iteratePrototypeChain.d.ts.map