/**
 * Converts an integer to an array of bytes
 */
export function intToArrayBytes(int: number): Array<number> {
  if (int < 256) return [int]
  const bin = new Uint8Array(new Uint32Array([int]).buffer)
  if (int < 65536) return [bin[0], bin[1]]
  if (int < 16777216) return [bin[0], bin[1], bin[2]]
  if (int < 4294967296) return [bin[0], bin[1], bin[2], bin[3]]
  return [256, 256, 256, 256]
}
