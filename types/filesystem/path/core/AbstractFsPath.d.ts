/// <reference types="node" />
import fs from 'fs';
/**
 * Abstract extension of the native String class, representing a path to a filesystem object, such as directory or file.
 * Some of the classes extending this one are @see DirectoryPath or @see FilePath
 */
export declare abstract class AbstractFsPath extends String {
    /**
     * @param absolute The absolute path to the filesystem object either as a string or an array of path segments.
     * @param _unsafe Used internally changing it is not recommended. If true, the path is not checked for whether it is actually absolute, it is not normalized and it is assumed to be of type string.
     * @throws If the path is not absolute.
     */
    protected constructor(absolute: string | string[], _unsafe?: boolean);
    get absolute(): string;
    /**
     * The relative path to the filesystem object from the working directory.
     */
    get relative(): string;
    /**
     * The root directory of the disk containing the filesystem object.
     */
    get root(): string;
    /**
     * The file/directory name (for files, including the file extension).
     */
    get base(): string;
    /**
     * The file/directory name (for files, not including the file extension).
     */
    get name(): string;
    /**
     * The absolute path to the directory of the filesystem object.
     */
    get parentPath(): string;
    /**
     * Returns whether the file exists.
     */
    get exists(): boolean;
    /**
     * Get fs.Stats synchronously
     */
    statSync(): fs.Stats;
    /**
     * Get fs.Stats asynchronously
     */
    stat(): Promise<fs.Stats>;
    /**
     * Returns whether the path is valid on Windows.
     * @param extendedMaxLength If true, we are assuming the OS configuration allows paths to be up to 32767 characters long.
     */
    isValidWindowsPath(extendedMaxLength?: boolean): boolean;
    /**
     * Split the absolute path into an array of path segments.
     */
    toArray(): string[];
    /**
     * Split the relative path into an array of path segments.
     * @see relative
     */
    relativeToArray(): string[];
    /**
     * Returns whether this is an DirectoryPath instance.
     */
    get isDirectoryPath(): boolean;
    /**
     * Returns whether this is an FilePath instance.
     */
    get isFilePath(): boolean;
    /**
     * Returns whether this is an BlockDevicePath instance.
     */
    get isBlockDevicePath(): boolean;
    /**
     * Returns whether this is an FsSymbolcLink instance.
     */
    get isSymbolicLinkPath(): boolean;
    /**
     * Returns whether this is an CharacterDevicePath instance.
     */
    get isCharacterDevicePath(): boolean;
    /**
     * Returns whether this is an FIFOPath instance.
     */
    get isFIFOPath(): boolean;
    /**
     * Returns whether this is an SocketPath instance.
     */
    get isSocketPath(): boolean;
    /**
     * Returns whether this actually is a path to a directory.
     * @param stat The fs.Stats object to check. If not provided, it is retrieved synchronously.
     * @throws If the path does not exist.
     */
    isDirectory(stat?: fs.Stats): boolean;
    /**
     * Returns whether this actually is a path to a file.
     * @param stat The fs.Stats object to check. If not provided, it is retrieved synchronously.
     * @throws If the path does not exist.
     */
    isFile(stat?: fs.Stats): boolean;
    /**
     * Returns whether this actually is a path to a block device.
     * @param stat The fs.Stats object to check. If not provided, it is retrieved synchronously.
     * @throws If the path does not exist.
     */
    isBlockDevice(stat?: fs.Stats): boolean;
    /**
     * Returns whether this actually is a path to a symbolic link.
     * @param stat The fs.Stats object to check. If not provided, it is retrieved synchronously.
     * @throws If the path does not exist.
     */
    isSymbolicLink(stat?: fs.Stats): boolean;
    /**
     * Returns whether this actually is a path to a character device.
     * @param stat The fs.Stats object to check. If not provided, it is retrieved synchronously.
     * @throws If the path does not exist.
     */
    isCharacterDevice(stat?: fs.Stats): boolean;
    /**
     * Returns whether this actually is a path to a FIFO device.
     * @param stat The fs.Stats object to check. If not provided, it is retrieved synchronously.
     * @throws If the path does not exist.
     */
    isFIFO(stat?: fs.Stats): boolean;
    /**
     * Returns whether this actually is a path to a socket.
     * @param stat The fs.Stats object to check. If not provided, it is retrieved synchronously.
     * @throws If the path does not exist.
     */
    isSocket(stat?: fs.Stats): boolean;
}
//# sourceMappingURL=AbstractFsPath.d.ts.map