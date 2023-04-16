/**
 * Returns true if a given interger is even.
 */
export function isEven(n: number): boolean {
  if (!Number.isInteger(n)) throw new Error(`Expected integer. Got ${n}`)
  return n % 2 === 0
}
