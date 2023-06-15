/**
 * Remove line breaks from string.
 */
export function strRemoveNewLines(string: string, replaceWith = ''): string {
  return string.replace(/\r*\n/g, replaceWith)
}
