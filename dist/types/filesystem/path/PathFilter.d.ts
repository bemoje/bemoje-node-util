/// <reference types="node" />
import { EventEmitter } from 'events';
import { IIgnoreOptions } from './types/IIgnoreOptions';
/**
 * Builder class to easily and flexibly construct and implement filesystem path filtering.
 */
export declare class PathFilter extends EventEmitter {
    /**
     * Returns a new object with the default ignore options.
     */
    protected static get ignoreOptionDefaults(): IIgnoreOptions;
    protected filepathFilters: Array<(path: string) => boolean>;
    protected dirpathFilters: Array<(path: string) => boolean>;
    protected filenameFilters: Array<(path: string) => boolean>;
    protected filepathRegex: Array<RegExp>;
    protected dirpathRegex: Array<RegExp>;
    protected filenameRegex: Array<RegExp>;
    isCaseInsensitive: boolean;
    constructor(options?: {
        captureRejections?: boolean;
    });
    protected handleOptions(escaped: string, options?: IIgnoreOptions): string;
    /**
     * Add a whole or partial filepath to ignore.
     */
    ignoreFilepath(ignore: string, options?: IIgnoreOptions): PathFilter;
    /**
     * Add a whole or partial dirname to ignore.
     */
    ignoreDirpath(ignore: string, options?: IIgnoreOptions): PathFilter;
    /**
     * Add a whole or partial filename to ignore.
     */
    ignoreFilename(ignore: string, options?: IIgnoreOptions): PathFilter;
    /**
     * Add a file extension type to ignore.
     */
    ignoreExtension(ignore: string): PathFilter;
    /**
     * Add a custom filter function for validating filepaths
     */
    filterFilepath(filter: (path: string) => boolean): PathFilter;
    /**
     * Add a custom filter function for validating dirpaths.
     */
    filterDirpath(filter: (path: string) => boolean): PathFilter;
    /**
     * Add a custom filter function for validating filenames.
     */
    filterFilename(filter: (path: string) => boolean): PathFilter;
    /**
     * Add a custom regex object for matching filepaths to be ignored.
     */
    ignoreFilepathRegex(regex: RegExp): PathFilter;
    /**
     * Add a custom regex object for matching dirpaths to be ignored.
     */
    ignoreDirpathRegex(regex: RegExp): PathFilter;
    /**
     * Add a custom regex object for matching filenames to be ignored.
     */
    ignoreFilenameRegex(regex: RegExp): PathFilter;
    /**
     * Performs the configured filepath filtering.
     */
    validateFilepath(filepath: string): boolean;
    /**
     * Performs the configured dirpath filtering.
     */
    validateDirpath(dirpath: string): boolean;
    /**
     * Performs the configured filename filtering.
     */
    validateFilename(filename: string): boolean;
}
//# sourceMappingURL=PathFilter.d.ts.map