/// <reference types="node" />
/// <reference types="node" />
import { DirectoryPath } from './DirectoryPath';
import { AbstractFsPath } from './core/AbstractFsPath';
import { NodeJsBufferEncoding } from './types/NodeJsBufferEncoding';
/**
 * Extension class of AbstractFsObject, which extends the native String class, representing a path to a file.
 * @see AbstractFsPath
 */
export declare class FilePath extends AbstractFsPath {
    /**
     * Creates a new FilePath instance.
     * @param filepath The absolute path
     * @param _unsafe Used internally changing it is not recommended. If true, the path is not checked for whether it is actually absolute, it is not normalized and it is assumed to be of type string.
     */
    constructor(filepath: string, _unsafe?: boolean);
    /**
     * Returns whether this is an FilePath instance.
     */
    get isFilePath(): boolean;
    /**
     * The absolute path to the directory of the filesystem object.
     */
    get parent(): DirectoryPath;
    /**
     * The absolute path to the file.
     */
    get filepath(): string;
    /**
     * The filename (including the file extension).
     */
    get filename(): string;
    /**
     * The file extension of the source file.
     * @returns The file extension, including the leading dot.
     */
    get extension(): string;
    /**
     * Read the file synchronously with fs.readFileSync.
     * @param encoding The encoding to use. If none is specified, a Buffer is returned.
     */
    readFileSync(encoding?: NodeJsBufferEncoding): string | Buffer;
    /**
     * Read the file asynchronously with fs.promises.readFile.
     * @param encoding The encoding to use. If none is specified, a Buffer is returned.
     */
    readFile(encoding?: NodeJsBufferEncoding): Promise<string | Buffer>;
    /**
     * Read the file synchronously as a string with fs.readFileSync.
     * @param encoding The encoding to use. Defaults to 'utf8'.
     */
    readFileStringSync(encoding?: NodeJsBufferEncoding): string;
    /**
     * Read the file asynchronously as a string with fs.promises.readFile.
     * @param encoding The encoding to use. Defaults to 'utf8'.
     */
    readFileString(encoding?: NodeJsBufferEncoding): Promise<string>;
    /**
     * Write or overwrite the file synchronously with fs.writeFileSync.
     * If the directory path does not exist, it is created and no error is thrown.
     * @param data A string or Buffer to write to the file.
     * @param encoding The encoding to use. Defaults to 'utf8'.
     */
    writeFileSync(data: string | NodeJS.ArrayBufferView, encoding?: NodeJsBufferEncoding): void;
    /**
     * Write or overwrite the file asynchronously with fs.promises.writeFile.
     * If the directory path does not exist, it is created and no error is thrown.
     * @param data A string or Buffer to write to the file.
     * @param encoding The encoding to use. Defaults to 'utf8'.
     */
    writeFile(data: string | NodeJS.ArrayBufferView, encoding?: NodeJsBufferEncoding): Promise<void>;
}
//# sourceMappingURL=FilePath.d.ts.map