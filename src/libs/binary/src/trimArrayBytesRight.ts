/**
 * Trims an array of bytes on the right
 */
export function trimArrayBytesRight(a: Array<number>): Array<number> {
  if (a[3] === 0) {
    if (a[2] === 0) {
      if (a[1] === 0) {
        return [a[0]]
      }
      return [a[0], a[1]]
    }
    return [a[0], a[1], a[2]]
  }
  return a
}
