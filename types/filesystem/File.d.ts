/**
 * Represents a file in the filesystem.
 */
export declare class File {
    /**
     * The aboslute path to the source file.
     */
    readonly filepath: string;
    /**
     * Creates a new SourceFile instance.
     * @param filepath The absolute path to the source file.
     */
    constructor(filepath: string);
    /**
     * The file extension of the source file.
     * @returns The file extension, including the leading dot.
     */
    get fileExtension(): string;
    /**
     * The filename including the file extension.
     */
    get filename(): string;
    /**
     * The name of the directory of the source file.
     */
    get dirname(): string;
    /**
     * The absolute path to the directory of the source file.
     */
    get dirpath(): string;
    /**
     * The relative path to the source file from the working directory.
     */
    get relative(): string;
}
//# sourceMappingURL=File.d.ts.map