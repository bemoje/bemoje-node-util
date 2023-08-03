export function assertNonZeroNegativeInteger(int: number): number {
  if (Number.isInteger(int) && int < 0) return int
  throw new TypeError('Expected int to be a non-zero negative integer. Got: ' + int)
}
