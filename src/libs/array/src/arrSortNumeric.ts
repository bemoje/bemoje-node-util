import { compareNumeric } from '../../sort';

/**
 * Uses Array.prototype.sort but sorts numbers.
 * @param input - input array
 */
export function arrSortNumeric(
  input: Array<number | bigint | boolean>,
): Array<number | bigint | boolean> {
  return input.sort(compareNumeric);
}
