/**
 * Takes a list of file extensions and returns a filter function that returns true if a filepath/filename passed to it contains one of the given file extensions.
 * @remarks If no file extensions are provided, the filter will always return true.
 * @returns A function that takes a filepath and returns true if the filepath has one of the specified file extensions, false otherwise.
 * @param fileExtensions file extensions
 * @example ```ts
 * createFileExtensionFilter('.ts', '.tsx')('index.ts');;
 * //=> true
 * createFileExtensionFilter('.ts', '.tsx')('index.js');;
 * //=> false
 * ```
 */
export declare function createFileExtensionFilter(...fileExtensions: string[]): (filepath: string) => boolean;
//# sourceMappingURL=createFileExtensionFilter.d.ts.map