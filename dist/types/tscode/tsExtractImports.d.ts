import { ITsExtractImportsResult } from './types/ITsExtractImportsResult';
/**
 * Extract all import statements from a given TypeScript source code string.
 * @param code The TypeScript code as a string from which to extract import statements.
 * @returns An array of objects, each representing an import statement. Each object includes the start and end line numbers (0-indexed) of the import statement in the original code, and the full text of the import statement.
 */
export declare function tsExtractImports(code: string): ITsExtractImportsResult[];
//# sourceMappingURL=tsExtractImports.d.ts.map