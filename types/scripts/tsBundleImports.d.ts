import { ITsBundleImportsOptions } from './ITsBundleImportsOptions';
/**
 * Bundles TypeScript imports from a root file and returns them as a 2D array of strings.
 * Each sub-array represents a depth level of imports.
 * The function also provides several options for manipulating the imported source code.
 * @param rootfile The root file from which to start bundling imports.
 * @param options An optional object of options to customize the bundling process.
 * @returns A 2D array of strings, where each sub-array represents a depth level of imports.
 * @example ```ts
 * //
 * ```
 * @throws If there is an error reading a file or parsing TypeScript.
 */
export declare function tsBundleImports(rootfile: string, options?: ITsBundleImportsOptions): string[][];
//# sourceMappingURL=tsBundleImports.d.ts.map