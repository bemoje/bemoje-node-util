import { rexec } from '../../regex'
import { letterToCol } from './letterToCol'

const REGEX_VALID_A1 = /^(?<a>[A-Z]+)(?<n>[1-9]+)$/g

/**
 * Convert spreadsheet A1-notation to [column, row].
 * @param A1 - A1-notation string.
 * @param zeroIndexed - Whether or not column and row numbers start at one or zero.
 */
export function A1ToColRow(A1: string, zeroIndexed = false): Array<number> {
  A1 = A1.toUpperCase()
  const matches = [...rexec(REGEX_VALID_A1, A1)]
  if (!matches.length) throw new Error(`Invalid A1 string: ${A1}`)
  const adjust = zeroIndexed ? 1 : 0
  return [letterToCol(matches[0].groups.a) - adjust, parseInt(matches[0].groups.n) - adjust]
}
