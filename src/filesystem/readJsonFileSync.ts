import fs from 'fs'

/**
 * Reads a JSON file synchronously and returns a Promise that resolves with the parsed JSON data.
 * @template T The expected return type of the JSON data.
 * @param filepath The path to the JSON file to read.
 * @returns A Promise that resolves with the parsed JSON data.
 * @throws Will throw an error if the file cannot be read or the JSON cannot be parsed.
 * Read a JSON file and return the parsed content (sync).
 * @example ```ts
 * readJsonFileSync<MyType>('/path/to/file.json');
 * //=> {result}
 * ```
 */
export function readJsonFileSync<T>(filepath: string): Promise<T> {
  return JSON.parse(fs.readFileSync(filepath).toString())
}
