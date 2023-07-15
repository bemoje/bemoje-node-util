import { tsStripBlockComments } from './tsStripBlockComments'
import { tsStripFullSlashCommentLines } from './tsStripFullSlashCommentLines'

/**
 * Removes all comments from JavaScript or TypeScript code.
 */
export function tsStripComments(code: string): string {
  return tsStripFullSlashCommentLines(tsStripBlockComments(code))
}
