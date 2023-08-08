/**
 * Reads a JSON file synchronously and returns a Promise that resolves with the parsed JSON data.
 * @template T The expected return type of the JSON data.
 * @param filepath The path to the JSON file to read.
 * @returns A Promise that resolves with the parsed JSON data.
 * @throws If the file cannot be read or the content cannot be parsed as JSON.
 * @example ```ts
 * const data = await readJsonFileSync<MyType>('/path/to/file.json');
 * console.log(data);
 * ```
 */
export declare function readJsonFileSync<T>(filepath: string): T;
//# sourceMappingURL=readJsonFileSync.d.ts.map