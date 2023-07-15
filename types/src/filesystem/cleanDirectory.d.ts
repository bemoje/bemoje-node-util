/**
 * Cleans a directory by removing files that match a filter.
 * @remarks This function is asynchronous and returns a promise that resolves to the path of the cleaned directory.
 * @param dirpath The path of the directory to clean.
 * @param filter A function that takes a filename and returns a boolean. Files for which this function returns `true` will be removed.
 * @returns A promise that resolves to the path of the cleaned directory.
 * @throws If the directory cannot be read or a file cannot be removed.
 * @example ```ts
 * cleanDirectory('./src', (filename: string) => filename.endsWith('.ts'));
 * ```
 */
export declare function cleanDirectory(dirpath: string, filter: (filename: string) => boolean): Promise<string>;
//# sourceMappingURL=cleanDirectory.d.ts.map