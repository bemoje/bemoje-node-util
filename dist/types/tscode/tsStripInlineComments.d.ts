/**
 * Removes lines that consist of only a double-slash comment, from the given code.
 * @remarks This function uses a regular expression to remove all lines that start with a single-line comment.
 * @returns The TypeScript code without single-line comments.
 * @param code The code from which to remove the comments.
 * @example ```ts
 * const code = `const x = 5;
 * // This is a comment
 * const y = 10;`;
 * stripSlashComments(code);
 * //=> "const x = 5;\nconst y = 10;"
 * ```
 */
export declare function tsStripInlineComments(code: string): string;
//# sourceMappingURL=tsStripInlineComments.d.ts.map