export declare class Base {
    constructor();
    private onFirstInstance;
    private verifyStatic_IRevivableJSON;
    /**
     * Sets the 'enumerable' property descriptor attributes on the instance to false for all property names that start with '_' (underscore).
     */
    protected setNonEnumerablePrivateProperties(): void;
    protected validateAmbiguousOptions(options: Record<string, any>, optionKeyPairs: Array<[string, string]>): void;
    protected validateOptionsRequireOtherOptions(options: Record<string, any>, optionKeyPairs: Array<[string, string]>): void;
}
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
export declare function iteratePrototypeChain(object: Object): Generator<Record<string, any>>;
/**
 * Determine wheter a given object is a prototype-object (obj.constructor.prototype === obj).
 */
export declare function isPrototype(value: any): boolean;
/**
 * Determine wheter the argument is a Object (is typeof object but not null).
 */
export declare function isObject(value: any): boolean;
/**
 * Determine if value is a constructor function
 */
export declare function isConstructor(value: any): boolean;
//# sourceMappingURL=Base.d.ts.map