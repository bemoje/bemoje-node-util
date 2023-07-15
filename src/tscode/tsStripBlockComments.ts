import { numRange } from '../number/numRange'
import { strNoConsecutiveEmptyLines } from '../string/strNoConsecutiveEmptyLines'
import { tsDocExtractAllComments } from '../tsdoc/tsDocExtractAllComments'

/**
 * Strips block comments from the provided TypeScript code.
 */
export function tsStripBlockComments(code: string): string {
  const lines = code.split('\n')
  const remove = new Set<number>()
  for (const { start, end } of tsDocExtractAllComments(code)) {
    for (const int of numRange(start, end)) remove.add(int)
  }
  return lines.filter((_, i) => !remove.has(i)).join('\n')
}
