/**
 * Normalizes known tag names to their TypeScript equivalents.
 * If the tag name is not found in the map, it returns the input tag name.
 * @param lc The tag name to normalize.
 * @remarks This function is case-insensitive.
 * @returns The normalized tag name.
 * @example ```ts
 * tsDocNormalizeTagName("TagName");;
 * //=> "tagname"
 * ```
 */
export declare function tsDocNormalizeTagName(tag: string): string;
//# sourceMappingURL=tsDocNormalizeTagName.d.ts.map