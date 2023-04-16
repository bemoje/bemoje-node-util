const colToAlphaMap: Map<number, string> = new Map()

/**
 * Convert a spreadsheet column number to a column letter.
 * @param col - Column number
 * @param zeroIndexed - Whether or not column number start at one or zero.
 */
export function colToLetter(col: number, zeroIndexed = false): string {
  if (zeroIndexed) col++
  const fromMem = colToAlphaMap.get(col)
  if (fromMem) return fromMem
  if (!Number.isInteger(col)) throw new Error(`Expected col to be an integer. Got: ${col}`)
  if (col < 1) throw new Error(`Expected col to be greater than zero. Got: ${col}`)
  let letter = ''
  let temp
  while (col > 0) {
    temp = (col - 1) % 26
    letter = String.fromCharCode(temp + 65) + letter
    col = (col - temp - 1) / 26
  }
  return letter
}
