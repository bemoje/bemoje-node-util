/**
 * Writes a JSON object to a file synchronously.
 * @typeParam T - The type of the JSON object.
 * @param filepath - The path of the file where the JSON object will be written.
 * @param data - The JSON object that will be written to the file.
 * @param pretty - If true, the JSON object will be formatted with indentation and line breaks. Default is false.
 * @throws If the file cannot be written.
 * @example ```ts
 * const data = { name: 'John', age: 30 };
 * writeJsonFileSync('./data.json', data, true);
 * ```
 */
export declare function writeJsonFileSync<T>(filepath: string, data: T, pretty?: boolean): void;
//# sourceMappingURL=writeJsonFileSync.d.ts.map