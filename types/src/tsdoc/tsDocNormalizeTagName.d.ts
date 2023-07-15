/**
 * Normalizes a tag name by converting it to lowercase.
 * If the tag name is not found in the map, it returns the original tag name.
 * @param code The tag name to normalize.
 * @remarks This function is case-insensitive and will return the input string if no equivalent TypeScript keyword is found.
 * @returns The normalized tag name.
 * @example ```ts
 * tsDocNormalizeTagName("TagName");;
 * //=> "tagname"
 * ```
 */
export declare function tsDocNormalizeTagName(code: string): string;
//# sourceMappingURL=tsDocNormalizeTagName.d.ts.map