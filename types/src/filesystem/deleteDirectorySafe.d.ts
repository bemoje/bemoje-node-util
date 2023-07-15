/**
 * Deletes a directory safely if it exists.
 * @remarks This function uses Node.js' `fs.promises.rm` method with the `recursive` and `force` options set to `true`.
 * This means it will delete the directory and all its contents, even if the directory is not empty.
 * @param dirpath The path of the directory to delete.
 * @returns A promise that resolves to `void` when the directory has been deleted.
 * @throws Will throw an error if the `fs.promises.rm` operation fails.
 * @example ```ts
 * deleteDirectorySafe('/path/to/directory');;
 * //=> undefined
 * ```
 */
export declare function deleteDirectorySafe(dirpath: string): Promise<void>;
//# sourceMappingURL=deleteDirectorySafe.d.ts.map