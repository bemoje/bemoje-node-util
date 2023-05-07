/**
 * Converts a 2-dimensional array into a CSV string.
 * If input data contains the delimiter, it will be removed.
 * Linebreaks will be removed.
 * @param input a 2-dimensional array
 * @param delimiter csv delimiter.
 * @param replaceLinebreakWith replace linebreaks with this string.
 */
export function arr2dToCSV<T>(
  input: Array<Array<T>>,
  delimiter = ';',
  replaceLinebreakWith = ' ',
): string {
  return input
    .map((row) => {
      return row
        .map((item) =>
          (item + '').replaceAll(delimiter, '').replace(/(\r*\n)+/g, replaceLinebreakWith),
        )
        .join(delimiter)
    })
    .join('\n')
}
