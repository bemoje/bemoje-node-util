/**
 * Converts a data table of a header row and data rows into an array of objects.
 */
export function arrTableToObjects<T>(headers: string[], rows: T[][]): Record<string, T>[] {
  return rows.map((row) => {
    if (row.length !== headers.length) throw new Error('Row length does not match headers length.')
    return row.reduce((accum: Record<string, T>, value, i) => {
      accum[headers[i]] = value
      return accum
    }, {})
  })
}
