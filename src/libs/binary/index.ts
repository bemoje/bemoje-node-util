export * from './src/intToBytes'
export * from './src/bytesToInt'

/**
 * Trims an array of bytes on the right
 */
export function trimArrayBytesRight(a: Array<number>): Array<number> {
  if (a[3] === 0) {
    if (a[2] === 0) {
      if (a[1] === 0) {
        return [a[0]]
      }
      return [a[0], a[1]]
    }
    return [a[0], a[1], a[2]]
  }
  return a
}

/**
 * Trims an array of bytes on the left
 */
export function trimArrayBytesLeft(a: Array<number>): Array<number> {
  if (a[0] === 0) {
    if (a[1] === 0) {
      if (a[2] === 0) {
        return [a[3]]
      }
      return [a[2], a[3]]
    }
    return [a[1], a[2], a[3]]
  }
  return a
}

/**
 * Pads an array of bytes on the right
 */
export function padArrayBytesRight(a: Array<number>): Array<number> {
  const l = a.length
  return l === 4 ? a : l === 1 ? [a[0], 0, 0, 0] : l === 2 ? [a[0], a[1], 0, 0] : [a[0], a[1], a[2], 0]
}

/**
 * Pads an array of bytes on the left
 */
export function padArrayBytesLeft(a: Array<number>): Array<number> {
  const l = a.length
  return l === 4 ? a : l === 1 ? [0, 0, 0, a[0]] : l === 2 ? [0, 0, a[0], a[1]] : [0, a[0], a[1], a[2]]
}

/**
 * Converts an array of bytes to an integer
 */
export function arrayBytesToInt(bytes: Array<number>): number {
  return new Uint32Array(new Uint8Array(padArrayBytesRight(bytes)).buffer)[0]
}

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

/**
 * Converts an integer to a buffer
 */
export function intToBuffer(int: number): Buffer {
  return Buffer.from(intToArrayBytes(int))
}

/**
 * Converts a buffer to an integer
 */
export function bufferToInt(buf: Buffer): number {
  return arrayBytesToInt(Array.from(buf.values()))
}

/**
 * Converts a string to a base64 buffer
 */
export function btoa(buf: Buffer): string {
  return buf.toString('base64')
}

/**
 * Converts a base64 buffer to a string
 */
export function atob(str: string): Buffer {
  return Buffer.from(str, 'base64')
}
