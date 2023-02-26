/**
 * Inserts a provided string before and after a string.
 * @param input - input string
 * @param wrap - string to place before and after
 * @example
 * ```js
 * expect(util.strWrapIn('input', '#')).toBe('#input#');
 * ```
 */
export declare function strWrapIn(input: string, wrap: string): string;
/**
 * Inserts provided strings before and after a string.
 * @param input - input string
 * @param before - string to place before
 * @param after - string to place after
 * @example
 * ```js
 * expect(util.strWrapBetween('input', '#', '&')).toBe('#input&');
 * ```
 */
export declare function strWrapBetween(input: string, before: string, after: string): string;
/**
 * Wraps a string in brackets.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInBrackets('input')).toBe('[input]');
 * ```
 */
export declare function strWrapInBrackets(input: string): string;
/**
 * Wraps a string in angle brackets.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInAngleBrackets('input')).toBe('<input>');
 * ```
 */
export declare function strWrapInAngleBrackets(input: string): string;
/**
 * Wraps a string in braces.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInBraces('input')).toBe('{input}');
 * ```
 */
export declare function strWrapInBraces(input: string): string;
/**
 * Wraps a string in parenthesis.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInParenthesis('input')).toBe('(input)');
 * ```
 */
export declare function strWrapInParenthesis(input: string): string;
/**
 * Wraps a string in parenthesis.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInSingleQuotes('input')).toBe("'input'");
 * ```
 */
export declare function strWrapInSingleQuotes(input: string): string;
/**
 * Wraps a string in parenthesis.
 * @param input - input string
 * @example
 * ```js
 * expect(util.strWrapInDoubleQuotes('input')).toBe('"input"');
 * ```
 */
export declare function strWrapInDoubleQuotes(input: string): string;
/**
 * Returns whether the string is lower case.
 * @param input - input string
 * @example
 * ```js
 * strIsLowerCase('abc')
 * //=> true
 *
 * strIsLowerCase('ABC')
 * //=> false
 * ```
 */
export declare function strIsLowerCase(input: string): boolean;
/**
 * Returns whether the string is upper case.
 * @param input - input string
 * @example
 * ```js
 * strIsUpperCase('abc')
 * //=> false
 *
 * strIsUpperCase('ABC')
 * //=> true
 * ```
 */
export declare function strIsUpperCase(input: string): boolean;
/**
 * Returns an array of words in the string
 * @param input - input string
 * @example
 * ```js
 * strToWords('How are you?')
 * //=> ['How', 'are', 'you']
 * ```
 */
export declare function strToWords(input: string): Array<string>;
/**
 * Returns an array of words in the string
 * @param input - input string
 * @example
 * ```js
 * strSplitWordByCamelCase('someCamelCase')
 * //=> ['some', 'Camel', 'Case']
 * ```
 */
export declare function strSplitWordByCamelCase(word: string): Array<string>;
/**
 * Count occurances of a character within a given string.
 * @param input - The string to search
 * @param char - The character to find
 */
export declare function strCountCharOccurances(input: string, char: string): number;
/**
 * Returns a given number of contatenations of a given input string.
 * @param input - input string
 * @param n - Number of repetitions of the input string
 */
export declare function strRepeat(input: string, n: number): string;
/**
 * Takes a multiline string and performs a left side trim of whitespace on each line.
 * @param input - input string
 */
export declare function strLinesTrimLeft(input: string): string;
/**
 * Takes a multiline string and performs a right side trim of whitespace on each line.
 * @param input - input string
 */
export declare function strLinesTrimRight(input: string): string;
/**
 * Takes a multiline string and removes lines that are empty or only contain whitespace.
 * @param input - input string
 */
export declare function strLinesRemoveEmpty(input: string): string;
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
/**
 * In a given string, replace all occurances of a given search string with a given replacement string.
 * @param input input string
 * @param replace string to find a replace
 * @param replaceWith string to replace matches with
 * @param flags RegExp flags as single string.
 */
export declare function strReplaceAll(input: string, replace: string, replaceWith: string, flags?: string): string;
//# sourceMappingURL=string.d.ts.map