/**
 * Deletes a directory synchronously in a safe manner. If the directory does not exist, it will simply return the directory path without throwing an error.
 * @param dirpath The path of the directory to be deleted.
 * @returns The path of the directory that was intended to be deleted.
 * @throws Will throw an error if the operation fails for reasons other than the directory not existing.
 * @example ```ts
 * deleteDirectorySafeSync('/path/to/directory');;
 * //=> undefined
 * ```
 */
export declare function deleteDirectorySafeSync(dirpath: string): string;
//# sourceMappingURL=deleteDirectorySafeSync.d.ts.map