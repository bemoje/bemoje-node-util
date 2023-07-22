import strip from 'strip-comments'
import { numRange } from '../number/numRange'
import { tsDocExtractAllComments } from '../tsdoc/tsDocExtractAllComments'

/**
 * Strip block comments from the provided TypeScript code.
 * @param code - The TypeScript code string from which to remove block comments.
 * @returns The TypeScript code string with all block comments removed.
 */
export function tsStripBlockComments(code: string): string {
  const lines = code.split('\n')
  const remove = new Set<number>()
  for (const { start, end } of tsDocExtractAllComments(code)) {
    for (const int of numRange(start, end)) remove.add(int)
  }
  return strip.block(lines.filter((_, i) => !remove.has(i)).join('\n'))
}
