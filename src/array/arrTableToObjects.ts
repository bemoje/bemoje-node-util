import { createObjectFactory } from '../object/createObjectFactory'

/**
 * Converts a 2D array representing a table into an array of objects.
 * @param rows The 2D array representing the table.
 * @template T - The type of the elements in the rows.
 * @param headers The headers to use as keys for the objects. If not provided, the first row of the table is used as headers.
 * @returns An array of objects, where each object represents a row in the table.
 * @throws Throws an error if the headers are not provided and the table is empty or only contains one row.
 * @param headers Optional array of headers for the table.
 * @example ```ts
 * const table = [
 *   ['Name', 'Age', 'Country'],
 *   ['John', 25, 'USA'],
 *   ['Jane', 30, 'Canada'],
 * ];
 * const headers = ['Name', 'Age', 'Country'];
 * arrTableToObjects(table, headers) //=> [
 * //   { Name: 'John', Age: 25, Country: 'USA' },
 * //   { Name: 'Jane', Age: 30, Country: 'Canada' },
 * // ]
 * ```
 */
export function arrTableToObjects<T>(rows: T[][], headers?: string[]): Record<string, T>[] {
  if (headers) {
    if (!rows.length) return []
  } else {
    if (rows.length <= 1) return []
    headers = rows[0].map((header) => {
      return header === null || header === undefined ? '' : String(header)
    })
    rows = rows.slice(1)
  }
  const oRow = createObjectFactory<T>(headers)
  return rows.map((row) => oRow(row))
}
