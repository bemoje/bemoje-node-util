/**
 * Unwraps a TSDoc block comment, removing the comment markers and leading asterisks.
 * Throws an error if the provided string is not a valid TSDoc block comment.
 * @remarks This function will throw an error if the provided string is not a valid TSDoc block comment.
 * @param code The TSDoc block comment to unwrap.
 * @returns The unwrapped TSDoc comment.
 * @throws Will throw an error if the provided code is not a valid TSDoc comment.
 * @example ```ts
 * const actual = tsDocUnwrapComment([
 *   '/**',
 *   ' * Checks if the provided (...)',
 *   ' * @remarks This function (...)',
 *   ' * @param code The source (...)',
 *   ' * @returns A boolean ind (...)',
 *   ' *\/',
 * ].join('\n'))
 * const expected = [
 *   'Checks if the provided (...)',
 *   '@remarks This function (...)',
 *   '@param code The source (...)',
 *   '@returns A boolean ind (...)',
 * ].join('\n')
 * actual === expected
 * //=> true
 * ```
 */
export declare function tsDocUnwrapComment(code: string): string;
//# sourceMappingURL=tsDocUnwrapComment.d.ts.map