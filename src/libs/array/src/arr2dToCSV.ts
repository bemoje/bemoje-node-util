/**
 * Converts a 2-dimensional array into a CSV string.
 * @param input a 2-dimensional array
 * @param delimiter csv delimiter
 */
export function arr2dToCSV<T>(input: Array<Array<T>>, delimiter = ';'): string {
  return input.map((row) => row.join(delimiter)).join('\n');
}
