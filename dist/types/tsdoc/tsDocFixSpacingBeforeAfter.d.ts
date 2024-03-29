/**
 * This function fixes the spacing before and after the code in a TypeScript file.
 * It replaces multiple newlines after a block comment end with a single newline.
 * It also ensures that there is a newline before the start of a block comment if there is any non-whitespace character before it.
 * @param code - The TypeScript code to fix the spacing for.
 * @returns The TypeScript code with fixed spacing.
 * @example ```ts
 * const code = `
 * function example() {
 *   // some code
 * }
 * /**
 *  * This is a comment.
 *  *\/
 * function anotherExample() {
 *   // some more code
 * }
 * `;
 * const fixedCode = tsDocFixSpacingBeforeAfter(code);
 * //=> fixedCode
 * ```
 */
export declare function tsDocFixSpacingBeforeAfter(code: string): string;
//# sourceMappingURL=tsDocFixSpacingBeforeAfter.d.ts.map