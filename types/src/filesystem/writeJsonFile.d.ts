/**
 * Writes a JSON file to the specified filepath with the provided data.
 * @remarks This function is asynchronous and returns a Promise that resolves to `void`.
 * @param filepath The path where the JSON file will be written.
 * @param data The data to be written to the JSON file.
 * @param pretty Optional parameter. If true, the JSON file will be formatted in a pretty, human-readable format. Default is `false`.
 * @typeparam T - The type of the data to be written to the JSON file.
 * @returns A Promise that resolves to `void`.
 * @throws If there's an error writing the file.
 * Write a JSON file (async).
 * @example ```ts
 * writeJsonFile('./data.json', { name: 'John', age: 30 }, true);;
 * //=> undefined
 * ```
 */
export declare function writeJsonFile<T>(filepath: string, data: T, pretty?: boolean): Promise<void>;
//# sourceMappingURL=writeJsonFile.d.ts.map