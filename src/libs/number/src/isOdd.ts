/**
 * Returns true if a given interger is odd.
 */
export function isOdd(n: number): boolean {
  if (!Number.isInteger(n)) throw new Error(`Expected integer. Got ${n}`)
  return n % 2 !== 0
}
