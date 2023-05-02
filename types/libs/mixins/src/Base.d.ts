/**
 * Abstract class that other classes can inherit from to gain various handy functionality.
 */
export declare class Base {
    constructor(options?: Record<string, any>);
    get klass(): typeof Base;
    get proto(): Record<string, any>;
    protected init(): void;
    private inheritAllStatic;
    private checkInterfaces;
    private hasInterfaceInstanceMembers;
    private assertInterfaceStaticMembers;
    /**
     * Make the properties with property names that start with an underscore non-enumerable.
     */
    protected setNonEnumerablePrivateProperties(): void;
    protected assertNoAmbiguousOptions(options: Record<string, any>, optionKeyPairs: Array<[string, string]>): void;
    protected assertNoOptionsRequireMissingOptions(options: Record<string, any>, optionKeyPairs: Array<[string, string]>): void;
}
//# sourceMappingURL=Base.d.ts.map