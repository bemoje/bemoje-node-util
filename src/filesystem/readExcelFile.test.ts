import { readExcelFile } from './readExcelFile'

describe('readExcelFile', () => {
  const excelFilePath = process.cwd() + '\\tests\\test-files\\excel-file.xlsx'
  const expectedWorksheet0 = [
    ['A', 'B', 'C'],
    ['1', '2', '3'],
    ['4', '5', '6'],
  ]
  const expectedWorksheet1 = [['value']]

  it('reads contents of excel file all worksheets', async () => {
    expect(await readExcelFile(excelFilePath)).toEqual({
      Sheet1: expectedWorksheet0,
      Sheet2: expectedWorksheet1,
    })
  })
})
