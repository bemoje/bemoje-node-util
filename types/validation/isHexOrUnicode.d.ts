/**
 * Checks if a given string is a hexadecimal or unicode.
 * @remarks This function uses a regular expression to test if the input string is a hexadecimal or unicode.
 * @param s The string to be tested.
 * @returns A boolean value indicating whether the string is a hexadecimal or unicode.
 * @example ```ts
 * isHexOrUnicode('0x123');
 * //=> true
 * isHexOrUnicode('u123');
 * //=> true
 * isHexOrUnicode('123');
 * //=> false
 * ```
 */
export declare function isHexOrUnicode(s: string): boolean;
//# sourceMappingURL=isHexOrUnicode.d.ts.map