/**
 * Returns a table element's cell's textContent as a 2-dimensional array.
 * @remarks Requires a DOM to manipulate.
 * @param table The table element
 */
export function htmlTableToArray(table: HTMLElement): string[][] {
  const result = []
  for (const tr of Array.from(table.querySelectorAll('tr'))) {
    const row = []
    for (const td of Array.from(tr.querySelectorAll('th,td'))) {
      row.push(td?.textContent?.trim() || '')
    }
    result.push(row)
  }
  return result
}
