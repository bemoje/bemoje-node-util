import type { Obj } from '../../interfaces';
export declare const interfaceDefinitions: Map<string, [string[], string[]]>;
/**
 * Guarantees that class instances are serializable and have a static revive function.
 */
export interface IRevivable<SerializedForm> {
    toJSON: () => SerializedForm;
}
/**
 * Guarantees that options are handled in a consistent way.
 */
export interface IHandledOptions {
    options: Obj;
    defaultOptions: Obj;
    handleOptions(options?: Obj): void;
}
//# sourceMappingURL=interfaces.d.ts.map