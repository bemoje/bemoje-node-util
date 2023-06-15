import excelJs from 'exceljs'
import type { Row, Worksheet } from 'exceljs'

export async function readExcelFile(filepath: string): Promise<Record<string, string[][]>> {
  const workbook = new excelJs.Workbook()
  await workbook.xlsx.readFile(filepath)
  const worksheets: Record<string, string[][]> = {}
  workbook.eachSheet((worksheet) => {
    worksheets[worksheet.name] = worksheetValues(worksheet)
  })
  return worksheets
}

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
  return worksheetValues(worksheet)
}

function worksheetValues(worksheet: Worksheet): string[][] {
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
