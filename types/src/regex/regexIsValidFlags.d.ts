/**
 * Checks if the provided string is a valid regular expression flag.
 * @remarks This function checks if the provided string contains only the characters 'g', 'i', 'm', 's', 'u', 'y' and if there are no duplicate characters.
 * @param flags The string to be checked.
 * @returns A boolean indicating whether the string is a valid regular expression flag.
 * Checks if a string is a valid regex flags string.
 * @example ```ts
 * regexIsValidFlags('gim') // true
 * regexIsValidFlags('gmisuy') // false
 * ```
 */
export declare function regexIsValidFlags(flags: string): boolean;
//# sourceMappingURL=regexIsValidFlags.d.ts.map