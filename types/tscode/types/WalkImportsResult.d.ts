/**
 * Type representing the result of the WalkImports function.
 * It is a Map where each key is a string and the value is an object.
 * The object contains properties for depth, match, source, and error.
 */
export type WalkImportsResult = Map<string, {
    depth: number;
    match: string;
    source?: string;
    error?: unknown;
}>;
//# sourceMappingURL=WalkImportsResult.d.ts.map