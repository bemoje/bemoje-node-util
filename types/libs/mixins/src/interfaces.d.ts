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
    options: Record<string, any>;
    defaultOptions: Record<string, any>;
    handleOptions(options?: Record<string, any>): void;
}
//# sourceMappingURL=interfaces.d.ts.map