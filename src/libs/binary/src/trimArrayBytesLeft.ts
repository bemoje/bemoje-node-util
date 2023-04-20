/**
 * Trims an array of bytes on the left
 */
export function trimArrayBytesLeft(a: Array<number>): Array<number> {
  if (a[0] === 0) {
    if (a[1] === 0) {
      if (a[2] === 0) {
        return [a[3]]
      }
      return [a[2], a[3]]
    }
    return [a[1], a[2], a[3]]
  }
  return a
}
