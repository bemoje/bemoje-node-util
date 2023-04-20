/**
 * A String class extension with extra features.
 */
export declare class BemojeString extends String {
    static get [Symbol.species](): typeof String;
    constructor(thing?: any);
    get string(): string;
    get _(): string;
    countCharOccurances(char: string): number;
    countChars(): Map<string, number>;
    isLowerCase(): boolean;
    isUpperCase(): boolean;
    linesRemoveEmpty(): BemojeString;
    linesTrimLeft(): BemojeString;
    linesTrimRight(): BemojeString;
    prettifyMinifiedCode(indent?: string): BemojeString;
    removeDuplicateChars(): BemojeString;
    sortChars(): BemojeString;
    splitCamelCase(): Array<string>;
    toCharCodes(): Array<number>;
    toCharSet(): BemojeString;
    toSentences(): Array<string>;
    toWords(): Array<string>;
    unwrap(left: string, right: string, flags?: string): BemojeString;
    wrapBetween(left: string, right: string): BemojeString;
    wrapIn(wrap: string): BemojeString;
    wrapInAngleBrackets(): BemojeString;
    wrapInBraces(): BemojeString;
    wrapInBrackets(): BemojeString;
    wrapInDoubleQuotes(): BemojeString;
    wrapInParenthesis(): BemojeString;
    wrapInSingleQuotes(): BemojeString;
}
//# sourceMappingURL=BemojeString.d.ts.map