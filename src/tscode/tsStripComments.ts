import { tsStripBlockComments } from './tsStripBlockComments'
import { tsStripInlineComments } from './tsStripInlineComments'

/**
 * Removes all comments from JavaScript or TypeScript code.
 * @remarks
 * This function uses `tsStripBlockComments` and `tsStripInlineComments` to remove both block and inline comments.
 * @param code - The TypeScript code from which to remove comments.
 * @returns The TypeScript code without any comments.
 */
export function tsStripComments(code: string): string {
  return tsStripBlockComments(tsStripInlineComments(code))
}
