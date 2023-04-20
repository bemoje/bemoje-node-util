/**
 * Converts a string to an array of char codes
 * @example
 * ```ts
 * strToCharCodes('hello') // [104, 101, 108, 108, 111]
 * ```
 */
export function strToCharCodes(str: string): Array<number> {
  const len = str.length
  const ret = new Array(len)
  for (let i = 0; i < len; i++) {
    ret[i] = str.charCodeAt(i)
  }
  return ret
}
