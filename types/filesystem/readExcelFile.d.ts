/**
 * Reads an Excel file and returns its content as a record where each key is the name of a worksheet and its value is a 2D array of strings representing the rows and cells of the worksheet.
 * @remarks This function uses the `exceljs` library to read the Excel file. It will throw an error if the file does not exist or is not a valid Excel file.
 * @param filepath - The path to the Excel file to read.
 * @returns A Promise that resolves to a record where each key is the name of a worksheet and its value is a 2D array of strings representing the rows and cells of the worksheet.
 * @throws Will throw an error if the file does not exist or is not a valid Excel file.
 * @example ```ts
 * readExcelFile('path/to/file.xlsx').then((worksheets) => {
 *   console.log(worksheets['Sheet1']); // logs the content of 'Sheet1'
 * });
 * ```
 */
export declare function readExcelFile(filepath: string): Promise<Record<string, string[][]>>;
//# sourceMappingURL=readExcelFile.d.ts.map