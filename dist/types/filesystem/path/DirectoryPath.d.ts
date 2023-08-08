import { FilePath } from './FilePath';
import { AbstractFsPath } from './core/AbstractFsPath';
/**
 * Extension class of AbstractFsObject, which extends the native String class, representing a path to a directory.
 * @see AbstractFsPath
 */
export declare class DirectoryPath extends AbstractFsPath {
    /**
     * Creates a new DirectoryPath instance.
     * @param dirpath The absolute path to the directory.
     * @param _unsafe Used internally changing it is not recommended. If true, the path is not checked for whether it is actually absolute, it is not normalized and it is assumed to be of type string.
     */
    constructor(dirpath: string, _unsafe?: boolean);
    /**
     * The absolute path to the directory.
     */
    get dirpath(): string;
    /**
     * Returns whether this is an DirectoryPath instance.
     */
    get isDirectoryPath(): boolean;
    /**
     * The absolute path to the directory of the filesystem object.
     */
    get parent(): DirectoryPath;
    /**
     * Returns a new DirectoryPath instance representing a subdirectory of this directory.
     * @param paths The path segments to join to the directory path.
     */
    subdir(...paths: string[]): DirectoryPath;
    /**
     * Returns a new FilePath instance representing a file in this directory.
     * @param filename The name (including extension) of the file.
     */
    file(filename: string): FilePath;
    /**
     * Synchronously reads the directory with fs.readdir and returns its contents as as FsObject instances.
     * @throws If the path does not exist.
     */
    readdirSync(): AbstractFsPath[];
    /**
     * Asynchronously reads the directory with fs.promises.readdir and returns its contents as as FsObject instances.
     * @throws If the path does not exist.
     */
    readdir(): Promise<AbstractFsPath[]>;
}
//# sourceMappingURL=DirectoryPath.d.ts.map