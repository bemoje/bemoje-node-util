import ExcelJS from 'exceljs'

/**
 * Writes a 2D array to an Excel file.
 * @remarks This function is asynchronous and returns a Promise that resolves to `void`.
 * @typeparam T - The type of elements in the 2D array.
 * @param filepath The path where the Excel file will be written.
 * @param table The 2D array to be written to the Excel file.
 * @param worksheetName The name of the worksheet where the array will be written. Defaults to 'Sheet1'.
 * @returns A Promise that resolves to `void`.
 * @example ```ts
 * [['Name', 'Age'], ['John Doe', 30], ['Jane Doe', 25]];;
 * //=> data
 * writeExcelFile('path/to/file.xlsx', data, 'People');;
 * //=> Promise<void>
 * ```
 * @throws If the file cannot be written.
 */
export async function writeExcelFile<T>(
  filepath: string,
  table: T[][],
  worksheetName = 'Sheet1',
): Promise<void> {
  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet(worksheetName)
  worksheet.addRows(table)
  await workbook.xlsx.writeFile(filepath)
}
