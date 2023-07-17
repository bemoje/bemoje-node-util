/**
 * Abstract class that other classes can inherit from to gain various handy functionality.
 */
export declare class MixinBase {
    getConstructor(): typeof MixinBase;
    getPrototype(): typeof MixinBase.prototype;
    /**
     * Make the properties with property names that start with an underscore non-enumerable.
     */
    protected setNonEnumerablePrivateProperties(): void;
    /**
     * Make the properties with the given property names non-enumerable.
     */
    protected setNonEnumerableProperties(...propertyNames: string[]): void;
}
//# sourceMappingURL=MixinBase.d.ts.map