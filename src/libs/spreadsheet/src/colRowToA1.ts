import { colToLetter } from './colToLetter'

/**
 * Convert spreadsheet [column, row] to A1-notation.
 * @param CR - [column, row]
 * @param zeroIndexed - Whether or not column number start at one or zero.
 */
export function colRowToA1(CR: Array<number>, zeroIndexed = false): string {
  if (CR.length !== 2) throw new Error(`Expected CR to to be length 2. Got: ${CR.length}`)
  if (!Number.isInteger(CR[1])) throw new Error(`Expected row to be an integer. Got: ${CR[1]}`)
  if (CR[1] < 1) throw new Error(`Expected row to be greater than zero. Got: ${CR[1]}`)
  return colToLetter(CR[0], zeroIndexed) + CR[1].toString()
}
