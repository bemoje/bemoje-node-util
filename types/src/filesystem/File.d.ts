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
     */
    get fileExtension(): string;
    /**
     * The name of the source file's exported member.
     */
    get exportName(): string;
    /**
     * The name of the source file.
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
    /**
     * Returns whether the source file exists.
     */
    fileExists(): boolean;
}
//# sourceMappingURL=File.d.ts.map