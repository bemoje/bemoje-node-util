/**
 * Converts a base64 buffer to a string
 */
export function atob(str: string): Buffer {
  return Buffer.from(str, 'base64')
}
