import type { Row, Worksheet } from 'exceljs'

/**
 * This function retrieves all the values from a given Excel file worksheet.
 * It iterates over each row and cell in the worksheet, converting the cell values to strings and trimming any excess whitespace.
 * The result is a two-dimensional array of strings, where each inner array represents a row in the worksheet.
 * @param worksheet The Excel file worksheet to retrieve values from.
 * @remarks This function is useful when you need to extract all the data from an Excel worksheet and manipulate it in your TypeScript application.
 * @returns A two-dimensional array of strings representing the values in the worksheet.
 * @example ```ts
 * import { Worksheet } from 'exceljs';
 * // Assuming 'worksheet' is an instance of 'Worksheet'
 * getExcelFileWorksheetValues(worksheet);;
 * //=> {result}
 * ```
 */
export function getExcelFileWorksheetValues(worksheet: Worksheet): string[][] {
  const rows: string[][] = []
  worksheet.eachRow((cells: Row) => {
    const row: string[] = []
    cells.eachCell((cell) => {
      row.push(String(cell.value).trim())
    })
    rows.push(row)
  })
  return rows
}
