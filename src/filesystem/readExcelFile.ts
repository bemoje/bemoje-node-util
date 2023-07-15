import excelJs from 'exceljs'
import { getExcelFileWorksheetValues } from './getExcelFileWorksheetValues.p'

/**
 * Reads an Excel file and returns a record where each key is the name of a worksheet and the value is a 2D array of the worksheet's cell values.
 * @remarks This function is asynchronous and returns a Promise.
 * @param filepath The path to the Excel file to read.
 * @returns A Promise that resolves to a Record. Each key in the Record is the name of a worksheet in the Excel file. Each value is a 2D array of strings, where each string is the value of a cell in the worksheet.
 * @throws Will throw an error if the file at the provided filepath cannot be read.
 * @example ```ts
 * readExcelFile('path/to/excel/file.xlsx').then((worksheets) => {
 *   worksheets['Sheet1'];;
 * //=> {result}
 * });
 * ```
 */
export async function readExcelFile(filepath: string): Promise<Record<string, string[][]>> {
  const workbook = new excelJs.Workbook()
  await workbook.xlsx.readFile(filepath)
  const worksheets: Record<string, string[][]> = {}
  workbook.eachSheet((worksheet) => {
    worksheets[worksheet.name] = getExcelFileWorksheetValues(worksheet)
  })
  return worksheets
}
