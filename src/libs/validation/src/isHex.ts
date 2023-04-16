/**
 * Determine whether a string is a hexadecimal string.
 */
export function isHex(s: string): boolean {
  return /[\da-f]+$/i.test(s)
}
