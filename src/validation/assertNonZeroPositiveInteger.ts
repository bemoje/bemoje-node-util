export function assertNonZeroPositiveInteger(int: number): number {
  if (Number.isInteger(int) && int > 0) return int
  throw new TypeError('Expected a non-zero positive integer. Got: ' + int)
}
