/**
 * Converts a string to a base64 buffer
 */
export function btoa(buf: Buffer): string {
  return buf.toString('base64')
}
