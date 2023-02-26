// const REGEX_VALID_A = /^[A-Z]+$/g;
const alphaToColMap: Map<string, number> = new Map();

/**
 * Convert spreadsheet column letter(s) to column-number
 * @param A - Column letter
 * @param zeroIndexed - Whether or not column number start at one or zero.
 */
export function letterToCol(A: string, zeroIndexed = false): number {
  A = A.toUpperCase();
  const fromMem = alphaToColMap.get(A);
  if (fromMem) return fromMem;
  // if (REGEX_VALID_A.test(A)) throw new Error(`Invalid column letter: ${A}`);
  let col = 0;
  const length = A.length;
  for (let i = 0; i < length; i++) {
    col += (A.charCodeAt(i) - 64) * Math.pow(26, length - i - 1);
  }
  return col - (zeroIndexed ? 1 : 0);
}
