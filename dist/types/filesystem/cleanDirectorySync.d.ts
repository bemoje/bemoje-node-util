/// <reference types="node" />
import type { Stats } from 'fs';
/**
 * Synchronously cleans a directory by removing files that satisfy a given predicate.
 * @remarks This function is a part of the File System module.
 * @param dirpath - The path to the directory that needs to be cleaned.
 * @param predicate - A function that takes a filepath and its stats as arguments and returns a boolean. If the function returns true for a file, that file is removed from the directory.
 * @throws If the directory at the provided path does not exist or cannot be read.
 * @example ```ts
 * import { Stats } from 'fs';
 * const dirpath = './my-directory';
 * const predicate = (filepath: string, stat: Stats) => stat.size > 1024;
 * cleanDirectorySync(dirpath, predicate);
 * ```
 */
export declare function cleanDirectorySync(dirpath: string, predicate: (filepath: string, stat: Stats) => boolean): void;
//# sourceMappingURL=cleanDirectorySync.d.ts.map