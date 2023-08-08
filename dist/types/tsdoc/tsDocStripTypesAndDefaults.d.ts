/**
 * Strips JSDoc style types and default values from the provided code.
 * @remarks This function is useful when you want to remove TypeScript types from a code string.
 * @param code The TypeScript code string from which types should be stripped.
 * @returns The provided code string with all TypeScript types removed.
 * @example ```ts
 * const code = [
 *   '/**',
 *   ' * @returns {string} a string',
 *   ' *\/',
 *   //
 * ].join('\n')
 * const actual = tsDocStripTypesAndDefaults(code)
 * const expected = [
 *   '/**',
 *   ' * @returns a string',
 *   ' *\/',
 *   //
 * ].join('\n')
 * ```
 */
export declare function tsDocStripTypesAndDefaults(code: string): string;
//# sourceMappingURL=tsDocStripTypesAndDefaults.d.ts.map