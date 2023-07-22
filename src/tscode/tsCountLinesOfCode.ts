import { strRemoveEmptyLines } from '../string/strRemoveEmptyLines'
import { tsStripBlockComments } from './tsStripBlockComments'
import { tsStripImports } from './tsStripImports'
import { tsStripInlineComments } from './tsStripInlineComments'

/**
 * Returns the number of lines of code in the given source code, not including import satements, comments or empty lines.
 * @param code - The TypeScript code to count the lines of.
 * @returns The number of lines of code in the given TypeScript code string.
 */
export function tsCountLinesOfCode(code: string): number {
  code = tsStripImports(code)
  code = tsStripBlockComments(code)
  code = tsStripInlineComments(code)
  code = strRemoveEmptyLines(code)
  if (!code.trim()) return 0
  return code.split('\n').length
}
