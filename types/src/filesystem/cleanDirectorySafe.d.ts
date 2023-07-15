/**
 * Cleans a directory in a safe manner by checking if the directory exists before attempting to clean it.
 * The cleaning process is determined by a filter function that is passed as an argument.
 * @param dirpath The path of the directory to be cleaned.
 * @param filter A function that takes a filename as an argument and returns a boolean.
 * Files for which this function returns `true` will be deleted.
 * @returns A promise that resolves to the path of the directory.
 * @example ```ts
 * cleanDirectorySafe('./src', (filename: string) => filename.endsWith('.ts'));
 * ```
 */
export declare function cleanDirectorySafe(dirpath: string, filter: (filename: string) => boolean): Promise<string>;
//# sourceMappingURL=cleanDirectorySafe.d.ts.map