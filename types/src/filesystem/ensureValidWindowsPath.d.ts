import { IEnsureValidWindowsPathOptions } from './types/IEnsureValidWindowsPathOptions';
/**
 * Check whether a provided windows filesystem path string is valid according to:
 * https://msdn.microsoft.com/en-us/library/windows/desktop/aa365247(v=vs.85).aspx
 * @param path The path to validate.
 * @returns A boolean indicating whether the path is valid. If the `assert` option is true, the function will throw an error instead of returning false.
 * @throws Will throw an error if the `assert` option is true and the path is invalid.
 * @param options An optional object that may contain the following properties:
 *   - `assert`: If true, the function will throw an error if the path is invalid. Default is false.
 *   - `extendedMaxLength`: If true, the function will allow paths up to 32767 characters long. Default is false.
 * @example ```ts
 * ensureValidWindowsPath('C:\\Users\\User\\Documents\\file.txt');;
 * //=> true
 * ensureValidWindowsPath('C:/Users/User/Documents/file.txt');;
 * //=> false
 * ensureValidWindowsPath('C:\\Users\\User\\Documents\\file.txt', { assert: true });;
 * //=> throws an error
 * ensureValidWindowsPath('C:\\Users\\User\\Documents\\file.txt', { extendedMaxLength: true });;
 * //=> true
 * ```
 */
export declare function ensureValidWindowsPath(path: string, options?: IEnsureValidWindowsPathOptions): boolean;
//# sourceMappingURL=ensureValidWindowsPath.d.ts.map