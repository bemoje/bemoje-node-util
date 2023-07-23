/**
 * Render an HTML comment.
 */
export const comment = <T>(comment: T): string => {
  return '<!-- ' + comment + ' -->'
}
