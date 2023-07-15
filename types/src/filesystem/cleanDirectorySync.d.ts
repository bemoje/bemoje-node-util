/**
 * Synchronously cleans a directory by removing files that match a provided filter function.
 * @param dirpath The path to the directory to clean.
 * @param filter A function that takes a filename as a parameter and returns a boolean. Files for which this function returns `true` will be removed.
 * @returns The path to the cleaned directory.
 * @throws Will throw an error if the directory does not exist or if an error occurs while removing a file.
 * @example ```ts
 * cleanDirectorySync('./src', (filename: string) => filename.endsWith('.ts'));
 * ```
 */
export declare function cleanDirectorySync(dirpath: string, filter: (filename: string) => boolean): string;
//# sourceMappingURL=cleanDirectorySync.d.ts.map