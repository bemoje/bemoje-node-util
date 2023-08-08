import { IExtractedTsDocComment } from './types/IExtractedTsDocComment';
/**
 * This function takes a source string, and yields each TSDoc block comments in it.
 * @param code The source code string.
 * @returns A generator that yields each TSDoc block comment in the source code.
 * @yields Each TSDoc block comment in the source code.
 */
export declare function tsDocExtractAllComments(code: string): Generator<IExtractedTsDocComment>;
//# sourceMappingURL=tsDocExtractAllComments.d.ts.map