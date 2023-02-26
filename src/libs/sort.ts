export type Comparator = (a: any, b: any) => number;

/**
 * Returns a given comparator as an array compatible comparator. Behaves as if the array to sort was recursively flattened.
 * @param comparator compare function
 * @param descending whether the input comparator sorts in descending order
 */
export function compareArray(
  comparator: Comparator,
  descending = false,
): Comparator {
  const orderMultiplier = descending ? -1 : 1;
  function recursiveCompare(
    a: any,
    b: any,
    _lenCompareParent?: number,
  ): number {
    const aIsArr = Array.isArray(a);
    const bIsArr = Array.isArray(b);
    if (aIsArr) {
      if (bIsArr) {
        const aLen = a.length;
        const bLen = b.length;
        let lenShortest, lenCompare;
        if (aLen > bLen) {
          lenShortest = aLen;
          lenCompare = 1 * orderMultiplier;
        } else if (aLen < bLen) {
          lenShortest = bLen;
          lenCompare = -1 * orderMultiplier;
        } else {
          lenShortest = aLen;
          lenCompare = 0;
        }
        for (let i = 0, len = lenShortest; i < len; i++) {
          const res = recursiveCompare(a[i], b[i], lenCompare);
          if (res !== 0) {
            return res;
          }
        }
      } else {
        return 1 * orderMultiplier;
      }
    } else {
      if (bIsArr) {
        return -1 * orderMultiplier;
      } else {
        const res = comparator(a, b);
        if (res === 0) {
          return _lenCompareParent || res;
        } else {
          return res;
        }
      }
    }
    return 0;
  }
  return (a: any, b: any): number => {
    return recursiveCompare(a, b);
  };
}

/**
 * Number comparator function (ascending)
 * @param a first value to compare
 * @param b second value to compare
 */
export function compareNumber(a: number, b: number): number {
  return a - b;
}

/**
 * Number comparator function (descending)
 * @param a first value to compare
 * @param b second value to compare
 */
export function compareNumberDescending(a: number, b: number): number {
  return b - a;
}

/**
 * number, bigint, boolean comparator function (ascending)
 * @param a first value to compare
 * @param b second value to compare
 */
export function compareNumeric(
  a: number | bigint | boolean,
  b: number | bigint | boolean,
): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

/**
 * number, bigint, boolean comparator function (descending)
 * @param a first value to compare
 * @param b second value to compare
 */
export function compareNumericDescending(
  a: number | bigint | boolean,
  b: number | bigint | boolean,
): number {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

/**
 * Alpha numeric comparator function (ascending)
 * @param a first value to compare
 * @param b second value to compare
 */
export function compareString(a: string, b: string): number {
  return a.localeCompare(b);
}

/**
 * Alpha numeric comparator function (descending)
 * @param a first value to compare
 * @param b second value to compare
 */
export function compareStringDescending(a: string, b: string): number {
  return b.localeCompare(a);
}
