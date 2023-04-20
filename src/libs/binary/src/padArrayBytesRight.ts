/**
 * Pads an array of bytes on the right
 */
export function padArrayBytesRight(a: Array<number>): Array<number> {
  const l = a.length
  return l === 4 ? a : l === 1 ? [a[0], 0, 0, 0] : l === 2 ? [a[0], a[1], 0, 0] : [a[0], a[1], a[2], 0]
}
