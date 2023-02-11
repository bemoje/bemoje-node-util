import { rexec } from '../../regex';

const REGEX_VALID_A1 = /^(?<a>[A-Z]+)(?<n>[1-9]+)$/g;

const alphaToColMap: Map<string, number> = new Map();

const alphaToCol = (A: string): number => {
  const fromMem = alphaToColMap.get(A);
  if (fromMem) return fromMem;
  let col = 0;
  const length = A.length;
  for (let i = 0; i < length; i++) {
    col += (A.charCodeAt(i) - 64) * Math.pow(26, length - i - 1);
  }
  return col;
};

/**
 * Convert spreadsheet A1-notation to [column, row].
 * @param A1 - A1-notation string.
 */

export function A1ToColRow(A1: string): Array<number> {
  A1 = A1.toUpperCase();
  const matches = [...rexec(REGEX_VALID_A1, A1)];
  if (!matches.length) throw new Error(`Invalid A1 string: ${A1}`);
  return [alphaToCol(matches[0].groups.a), parseInt(matches[0].groups.n)];
}
