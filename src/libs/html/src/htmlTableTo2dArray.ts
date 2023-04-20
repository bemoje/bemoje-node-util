/**
 * Converts the table element's data content to a 2-dimensional array.
 * @param {HTMLElement} element - The table element
 * @param {boolean} headers - Whether to extract table column header data from <th> elements.
 * @returns {Array<Array<string>>} Data table which is an arrays of row-arrays of cell content (string).
 */
export function htmlTableTo2dArray(element: HTMLElement, headers = true): Array<Array<string>> {
  const result = []
  const htmlRows = element.querySelectorAll('tr')
  for (let i = 0; i < htmlRows.length; i++) {
    const htmlRow = htmlRows[i]
    const row = []
    const htmlCells = htmlRow.querySelectorAll(headers ? 'th,td' : 'td')
    for (let j = 0; j < htmlCells.length; j++) {
      const htmlCell = htmlCells[j]
      if (htmlCell) {
        row.push(htmlCell?.textContent?.trim() || '')
      }
    }
    if (!headers) {
      if (htmlRow.querySelectorAll('th').length) {
        continue
      }
    }
    if (row.length) {
      result.push(row)
    }
  }
  return result
}
