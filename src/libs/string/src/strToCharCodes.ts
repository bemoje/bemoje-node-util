/**
 * Converts a string to an array of char codes
 */
export function strToCharCodes(str: string): Array<number> {
  const len = str.length
  const ret = new Array(len)
  for (let i = 0; i < len; i++) {
    ret[i] = str.charCodeAt(i)
  }
  return ret
}
