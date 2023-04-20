import { intToArrayBytes } from './intToArrayBytes'

/**
 * Converts an integer to a buffer
 */
export function intToBuffer(int: number): Buffer {
  return Buffer.from(intToArrayBytes(int))
}
