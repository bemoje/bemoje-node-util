/**
 * Pads an array of bytes on the left
 */
export function padArrayBytesLeft(a: Array<number>): Array<number> {
  const l = a.length
  return l === 4 ? a : l === 1 ? [0, 0, 0, a[0]] : l === 2 ? [0, 0, a[0], a[1]] : [0, a[0], a[1], a[2]]
}
