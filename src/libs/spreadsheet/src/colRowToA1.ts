const colToAlphaMap: Map<number, string> = new Map();

const colToAlpha = (col: number): string => {
  const fromMem = colToAlphaMap.get(col);
  if (fromMem) return fromMem;
  let letter = '';
  let temp;
  while (col > 0) {
    temp = (col - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    col = (col - temp - 1) / 26;
  }
  return letter;
};

/**
 * Convert spreadsheet [column, row] to A1-notation.
 * @param CR - [column, row]
 */

export function colRowToA1(CR: Array<number>): string {
  if (CR.length !== 2)
    throw new Error(`Expected CR to to be length 2. Got: ${CR.length}`);
  if (!Number.isInteger(CR[0]))
    throw new Error(`Extected col to be an integer. Got: ${CR[0]}`);
  if (!Number.isInteger(CR[1]))
    throw new Error(`Extected row to be an integer. Got: ${CR[1]}`);
  if (CR[0] < 1)
    throw new Error(`Extected col to be greater than zero. Got: ${CR[0]}`);
  if (CR[1] < 1)
    throw new Error(`Extected row to be greater than zero. Got: ${CR[1]}`);
  return colToAlpha(CR[0]) + CR[1].toString();
}
