/// <reference types="node" />
export type MemoryUsageValues = {
    processAllocationMB: number;
    heapAllocationMB: number;
    heapUsedMB: number;
    extenalV8: number;
};
export type MemoryUsageValuesFormatted = {
    processAllocationMB: string;
    heapAllocationMB: string;
    heapUsedMB: string;
    extenalV8: string;
};
/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 */
export declare function getMemoryUsage(): MemoryUsageValues;
/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 * The values are formatted strings in the style of 5.000,00
 */
export declare function getMemoryUsageFormattedEU(): MemoryUsageValuesFormatted;
/**
 * Returns an object about the process memory usage for: process allocation, heap allocation, heap, v8.
 * The values are formatted strings in the style of 5,000.00
 */
export declare function getMemoryUsageFormattedUS(): MemoryUsageValuesFormatted;
/**
 * Takes a directory path as a list of directory/folder names from the current working directory and returns it as a full path string.
 * @param dirs directory names from the current working directory.
 */
export declare function getWorkingDirPath(...dirs: Array<string>): string;
/**
 * Takes a filepath and returns its utf8 contents as a single string.
 * @param path path to the file
 */
export declare function readFileStringSync(path: string): string;
/**
 * Normalize a file extension to the form: .[ext]
 * Anything before the last "." is not returned.
 * @param ext file extension
 */
export declare function normalizeFileExtension(ext: string): string;
/**
 * Takes a list of file extensions and returns a filter function that returns true if a filepath/filename passed to it contains one of the given file extensions.
 * @param fileExtensions file extensions
 */
export declare function createFileExtensionFilter(...fileExtensions: Array<string>): (filepath: string) => boolean;
export type ensureValidWindowsPathOptions = {
    extendedMaxLength?: boolean;
    assert?: boolean;
};
/**
 * Check whether a provided windows filesystem path string is valid according to:
 * https://msdn.microsoft.com/en-us/library/windows/desktop/aa365247(v=vs.85).aspx
 * @param path The path to validate
 * @param extendedMaxLength On most versions of windows, the max allowed length of paths has been
 * raised.
 */
export declare function ensureValidWindowsPath(path: string, options?: ensureValidWindowsPathOptions): boolean;
import { Readable } from 'stream';
/**
 * Extension of Node's native Readable class for converting a string into a Readable stream.
 */
export declare class StringStream extends Readable {
    private str;
    private ended;
    constructor(str: string);
    _read(): void;
}
/**
 * Drain a Readable into a string.
 * @param stream - a Readable of string chunks
 */
export declare function streamToString(stream: Readable): Promise<string>;
//# sourceMappingURL=node.d.ts.map