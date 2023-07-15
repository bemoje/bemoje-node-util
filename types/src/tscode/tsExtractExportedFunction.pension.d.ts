/**
 * Extracts the first exported function from the provided TypeScript code.
 * @param code The TypeScript code to extract the function from.
 * @returns The extracted function from the provided TypeScript code.
 * @remarks This function uses regular expressions to parse the source code and find the first exported function.
 * If no exported function is found, it throws an error.
 * @throws Will throw an error if no exported function is found in the provided TypeScript code.
 * @example ```ts
 * tsExtractExportedFunction(`
 * export function helloWorld() {
 *   console.log('Hello, world!');
 * }
 * `);;
 * //=> "export function helloWorld() { console.log('Hello, world!'); }"
 * ```
 */
export declare function tsExtractExportedFunction(code: string): string;
//# sourceMappingURL=tsExtractExportedFunction.pension.d.ts.map