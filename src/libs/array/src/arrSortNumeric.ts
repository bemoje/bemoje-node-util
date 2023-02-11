/**
 * Uses Array.prototype.sort but sorts numbers.
 * @param input - input array
 */

export function arrSortNumeric(input: Array<any>): Array<any> {
  return input.sort((a, b) => {
    return a - b;
  });
}
