/**
 * Takes a string of RegExp flags and returns a string guaranteed to be valid.
 * @param flags - string of RegExp flags
 * @example
 * ```ts
 * regexFixFlags('ggim') // 'gim'
 * regexFixFlags('?gim*') // 'gim'
 * ```
 */
export declare function regexFixFlags(flags: string): string;
//# sourceMappingURL=regexFixFlags.d.ts.map