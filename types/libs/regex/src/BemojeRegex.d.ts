import { regexIsValidFlags } from './regexIsValidFlags';
import { regexFixFlags } from './regexFixFlags';
import { regexValidFlags } from './regexValidFlags';
import type { RexecYield } from '../';
export type BemojeRegexOptions = {
    /**
     * Whether to insert escape characters into the source string.
     */
    escapeSourceString?: boolean;
    /**
     * Whether to repair the flags string if it is not valid.
     */
    fixFlags?: boolean;
};
/**
 * A RegExp class extension with extra features.
 */
export declare class BemojeRegex extends RegExp {
    protected static defaultOptions: BemojeRegexOptions;
    options: BemojeRegexOptions;
    constructor(source: string | RegExp, flags?: string, options?: BemojeRegexOptions);
    /**
     * Checks if a string is a valid regex flags string.
     */
    static isValidFlags: typeof regexIsValidFlags;
    /**
     * Takes a string of RegExp flags and returns a string guaranteed to be valid.
     * @param flags - string of RegExp flags
     */
    static fixFlags: typeof regexFixFlags;
    /**
     * Returns an array of all valid flags for a regular expression.
     */
    static getValidFlags: typeof regexValidFlags;
    /**
     * Returns true if the RegExp instance has same source and flags.
     * @param regex - RegExp instance to compare to.
     */
    compareTo(regex: RegExp): boolean;
    /**
     * Returns true if the RegExp instance is a also BemojeRegex instance and both have the same source and flags.
     * @param regex - RegExp instance to compare to.
     */
    compareToStrict(regex: RegExp): boolean;
    /**
     * Returns an array of named groups defined inside the RegExp instance.
     */
    getGroupNames(): Array<string>;
    /**
     * Easily perform regex 'exec' on a string. An iterable is returned which steps through the exec process and yields all the details you might need.
     */
    rexec(string: string): Generator<RexecYield>;
    /**
     * Convert a regex for matching to a regex for validation.
     */
    toValidator(): BemojeRegex;
    /**
     * Convert the BemojeRegex instance to a RegExp instance.
     */
    toRegExp(): RegExp;
}
//# sourceMappingURL=BemojeRegex.d.ts.map