/**
 * Extracts the first TSDoc @example code block from the given code string.
 * @param code The code string to extract the TSDoc @example from.
 * @returns The extracted TSDoc @example code block.
 * @remarks This function uses regular expressions to find the @example tag in a TSDoc comment and extracts the code within it.
 * If no @example tag is found, it throws an error.
 * @throws Throws an error if a TSDoc @example cannot be found in the code.
 * @example ```ts
 * `
 * /**
 *  * @example
 *  * 'Hello, world!';
 * //=> "Hello, world!"
 *  *\/
 * function helloWorld() {
 *   return 'Hello, world!'
 * }
 * `
 * tsDocExtractExample(code);
 * //=> "return 'Hello, world!'"
 * ```
 */
export declare function tsDocExtractExample(code: string): string;
//# sourceMappingURL=tsDocExtractExample.d.ts.map