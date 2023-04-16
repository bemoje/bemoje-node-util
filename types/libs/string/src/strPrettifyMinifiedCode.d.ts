/**
 * Very crude, simple, fast code formatting of minified code.
 * Only works when input code:
 * - is minified
 * - is scoped with brackets
 * - expressions end with semicolon
 * - has no string literals containing any of these characters: '{', '}', ';'.
 * @param input The minified source code
 * @param indent The string to use as indentation
 */
export declare function strPrettifyMinifiedCode(input: string, indent?: string): string;
//# sourceMappingURL=strPrettifyMinifiedCode.d.ts.map