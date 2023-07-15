import { readExcelFileWorksheet } from './readExcelFileWorksheet'

describe('readExcelFileWorksheet', () => {
  const excelFilePath = process.cwd() + '\\tests\\test-files\\excel-file.xlsx'
  const expectedWorksheet0 = [
    ['A', 'B', 'C'],
    ['1', '2', '3'],
    ['4', '5', '6'],
  ]
  const expectedWorksheet1 = [['value']]

  it('reads contents of excel file worksheet index 0', async () => {
    expect(await readExcelFileWorksheet(excelFilePath, 0)).toEqual(expectedWorksheet0)
  })

  it('reads contents of excel file worksheet index 0 by name', async () => {
    expect(await readExcelFileWorksheet(excelFilePath, 'Sheet1')).toEqual(expectedWorksheet0)
  })

  it('reads contents of excel file worksheet index 1', async () => {
    expect(await readExcelFileWorksheet(excelFilePath, 1)).toEqual(expectedWorksheet1)
  })

  it('reads contents of excel file worksheet index 1 by name', async () => {
    expect(await readExcelFileWorksheet(excelFilePath, 'Sheet2')).toEqual(expectedWorksheet1)
  })
})
