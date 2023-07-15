/**
 * This function takes a source string, extracts all TSDoc comments from it, and then strips all TSDoc tags from these comments except for the 'throws' and 'param' tags.
 * The function then returns the modified source string.
 * @remarks This function is useful when you want to simplify your TSDoc comments by removing all tags except for the 'throws' and 'param' tags.
 * @param source - The source string from which TSDoc comments are to be extracted and modified.
 * @returns The modified source string with all TSDoc tags stripped except for the 'throws' and 'param' tags.
 * @throws If the source string is not a valid TSDoc comment.
 * @example ```ts
 * const source = `
 * /**
 *  * @param a - The first number.
 *  * @param b - The second number.
 *  * @returns The sum of a and b.
 *  * @throws If a or b is not a number.
 *  *\/
 * function add(a, b) {
 *   if (typeof a !== 'number' || typeof b !== 'number') {
 *     throw new Error('Both a and b must be numbers.');
 *   }
 *   return a + b;
 * }
 * `;
 * tsDocStripAllTagsExcepThrowsParamDescription(source);
 * //=> result
 * ```
 */
export declare function tsDocStripAllTagsExcepThrowsParamDescription(source: string): string;
//# sourceMappingURL=tsDocStripAllTagsExcepThrowsParamDescription.d.ts.map