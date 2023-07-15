import { tsDocExtractAllComments } from './tsDocExtractAllComments'
import type { IExtractedTsDocComment } from './types/IExtractedTsDocComment'

/**
 * Extracts the first TSDoc block comment from the provided TypeScript code.
 * @param code The TypeScript code to extract the TSDoc block comment from.
 */
export function tsDocExtractFirstComment(code: string): IExtractedTsDocComment | undefined {
  for (const res of tsDocExtractAllComments(code)) {
    return res
  }
}
