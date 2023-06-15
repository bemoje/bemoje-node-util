/**
 * Asserts that all rows in the table have the same length.
 */
export function arrTableAssertRowsSameLength<T>(rows: T[][], headers?: string[]): void {
  const numHeaders = (headers || rows[0]).length
  for (const row of rows) {
    if (row.length !== numHeaders) {
      throw new Error(`Expected ${numHeaders} columns, got ${row.length}`)
    }
  }
}
