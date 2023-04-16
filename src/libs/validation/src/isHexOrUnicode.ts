/**
 * Determine whether a string is either a hexadecimal or a '\u' or '0x' prepended unicode hex string.
 */
export function isHexOrUnicode(s: string): boolean {
  return /^(\\\\?u|0x)?[\da-f]+$/i.test(s)
}
