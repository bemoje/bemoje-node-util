import fs from 'fs'
import { toJson } from '../object/toJson'

/**
 * Writes JSON data to a file synchronously.
 * @remarks This method will throw an error if the file cannot be written.
 * @param filepath The path of the file where the data will be written.
 * @param data The data to be written to the file.
 * @param pretty Optional parameter. If true, the JSON data will be formatted in a pretty, human-readable format. Default is false.
 * @typeparam T - The type of the data to be written to the file.
 * @throws Will throw an error if the file cannot be written.
 * Write a JSON file (sync).
 * @example ```ts
 * writeJsonFileSync("./path/to/file.json", { key: "value" }, true);
 * //=> undefined
 * ```
 */
export function writeJsonFileSync<T>(filepath: string, data: T, pretty = false): void {
  fs.writeFileSync(filepath, toJson(data, pretty))
}
