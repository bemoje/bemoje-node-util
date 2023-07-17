import { WalkImportsResult } from './types/WalkImportsResult';
/**
 * Walks through the imports of a TypeScript file and its dependencies up to a specified depth.
 * @remarks This function uses synchronous file operations and may block the event loop if used with large files or deep import trees.
 * @param rootfile The filepath to the TypeScript file to start the walk from.
 * @param maxDepth The maximum depth to walk through the imports. Default is 0, which means no limit.
 * @returns A `WalkImportsResult` object that maps each file path to its import details.
 * @throws Will throw an error if the file does not exist or if it is an external module.
 * @example ```ts
 * tsWalkImports('/src/index.ts', 2)
 * ```
 */
export declare function tsWalkImports(rootfile: string, maxDepth?: number): WalkImportsResult;
//# sourceMappingURL=tsWalkImports.d.ts.map