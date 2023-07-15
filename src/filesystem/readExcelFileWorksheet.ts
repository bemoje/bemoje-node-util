import excelJs from 'exceljs'
import { getExcelFileWorksheetValues } from './getExcelFileWorksheetValues.p'

/**
 * Reads an Excel file and returns the values of a specified worksheet as a 2D string array.
 * @remarks This function uses the `exceljs` library to read the Excel file and extract the worksheet data.
 * @param filepath The path to the Excel file to read.
 * @param worksheetIndexOrName The index or name of the worksheet to read. Defaults to the first worksheet (index 0) if not provided.
 * @returns A Promise that resolves to a 2D string array containing the values of the specified worksheet.
 * @throws Will throw an error if the specified file does not exist or if the specified worksheet does not exist in the file.
 * @example ```ts
 * readExcelFileWorksheet('path/to/file.xlsx', 'Sheet1').then((data) => {
 *   data;;
 * //=> {result}
 * });
 * ```
 * @example ```ts
 * readExcelFileWorksheet('path/to/file.xlsx', 0).then((data) => {
 *   console.log(data); // Logs the values of the first worksheet in 'file.xlsx'
 * });
 * ```
 */
export async function readExcelFileWorksheet(
  filepath: string,
  worksheetIndexOrName: string | number = 0,
): Promise<string[][]> {
  const workbook = new excelJs.Workbook()
  await workbook.xlsx.readFile(filepath)
  const worksheet =
    typeof worksheetIndexOrName === 'number'
      ? workbook.worksheets[worksheetIndexOrName]
      : workbook.getWorksheet(worksheetIndexOrName)
  return getExcelFileWorksheetValues(worksheet)
}
