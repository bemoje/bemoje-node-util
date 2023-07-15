import fs from 'fs'

/**
 * Reads a JSON file and returns its content as a Promise.
 * @remarks This function is asynchronous and should be awaited.
 * @param filepath The path to the JSON file to read.
 * @typeparam T - The expected return type of the JSON file content.
 * @returns A Promise that resolves to the content of the JSON file.
 * @throws Will throw an error if the file cannot be read or parsed.
 * Read a JSON file and return the parsed content (async).
 * @example ```ts
 * readJsonFile<MyType>('/path/to/file.json');;
 * //=> {result}
 * ```
 */
export async function readJsonFile<T>(filepath: string): Promise<T> {
  return JSON.parse((await fs.promises.readFile(filepath)).toString())
}
