import type { Obj } from '../../interfaces';
/**
 * Abstract class that other classes can inherit from to gain various handy functionality.
 */
export declare class Base {
    constructor();
    get klass(): typeof Base;
    get proto(): Obj;
    protected init(): void;
    private inheritAllStatic;
    private checkInterfaces;
    private hasInterfaceInstanceMembers;
    private assertInterfaceStaticMembers;
    /**
     * Make the properties with property names that start with an underscore non-enumerable.
     */
    protected setNonEnumerablePrivateProperties(): void;
    protected assertNoAmbiguousOptions(options: Obj, optionKeyPairs: Array<[string, string]>): void;
    protected assertNoOptionsRequireMissingOptions(options: Obj, optionKeyPairs: Array<[string, string]>): void;
}
//# sourceMappingURL=Base.d.ts.map