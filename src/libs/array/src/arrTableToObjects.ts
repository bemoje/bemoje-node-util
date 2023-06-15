import { createPseudoClass } from '../../object/src/createPseudoClass'

/**
 * Converts a data table of a header row and data rows into an array of objects.
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
  const oRow = createPseudoClass<T>(headers)
  return rows.map((row) => oRow(row))
}
