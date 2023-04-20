/**
 * Checks if a string is a number.
 * @param string - input string
 */
export function isNumericString(string: string): boolean {
  const n = Number(string.trim())
  return !isNaN(n) && isFinite(n)
}
