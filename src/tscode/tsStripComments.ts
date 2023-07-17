import { tsStripFullSlashCommentLines } from './tsStripFullSlashCommentLines'
import { tsStripTsDocBlockComments } from './tsStripTsDocBlockComments'

/**
 * Removes all comments from JavaScript or TypeScript code.
 */
export function tsStripComments(code: string): string {
  return tsStripFullSlashCommentLines(tsStripTsDocBlockComments(code))
}
