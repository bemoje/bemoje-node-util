import { Comparator } from '../../interfaces'

/**
 * Returns a given comparator as an array compatible comparator. Behaves as if the array to sort was recursively flattened.
 * @param compareAt shallow compare function that compares two elements of an array
 * @param descending whether the input comparator sorts in descending order
 */
export function compareArray(compareAt: Comparator, descending = false): Comparator {
  const orderMultiplier = descending ? -1 : 1
  function recursiveCompare(a: any, b: any, _lenCompareParent?: number): number {
    const aIsArr = Array.isArray(a)
    const bIsArr = Array.isArray(b)
    if (aIsArr) {
      if (bIsArr) {
        const aLen = a.length
        const bLen = b.length
        let lenShortest, lenCompare
        if (aLen > bLen) {
          lenShortest = aLen
          lenCompare = 1 * orderMultiplier
        } else if (aLen < bLen) {
          lenShortest = bLen
          lenCompare = -1 * orderMultiplier
        } else {
          lenShortest = aLen
          lenCompare = 0
        }
        for (let i = 0, len = lenShortest; i < len; i++) {
          const res = recursiveCompare(a[i], b[i], lenCompare)
          if (res !== 0) {
            return res
          }
        }
      } else {
        return 1 * orderMultiplier
      }
    } else {
      if (bIsArr) {
        return -1 * orderMultiplier
      } else {
        const res = compareAt(a, b)
        if (res === 0) {
          return _lenCompareParent || res
        } else {
          return res
        }
      }
    }
    return 0
  }
  return (a, b): number => {
    return recursiveCompare(a, b)
  }
}
