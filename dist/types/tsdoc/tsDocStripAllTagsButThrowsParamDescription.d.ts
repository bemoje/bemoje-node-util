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
 *  * Adds two numbers.
 *  * @param a - The first number.
 *  * @param b - The second number.
 *  * @returns The sum of a and b.
 *  * @throws If a or b is not a number.
 *  *\/
 * `;
 * tsDocStripAllTagsExcepThrowsParamDescription(source);
 * //=> removes the returns-tag.
 * ```
 */
export declare function tsDocStripAllTagsButThrowsParamDescription(source: string): string;
//# sourceMappingURL=tsDocStripAllTagsButThrowsParamDescription.d.ts.map