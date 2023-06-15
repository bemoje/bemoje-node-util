import * as util from '../src/libs/parse'

describe('parseSocialSecurityNumberDK', () => {
  it('correctly parses Danish SSN 20th century', () => {
    const { year, month, day, id, sex } = util.parseSocialSecurityNumberDK('201187-1234')
    expect(year).toBe(1987)
    expect(month).toBe(11)
    expect(day).toBe(20)
    expect(id).toBe(1234)
    expect(sex).toBe('F')
  })
  it('correctly parses Danish SSN 21st century', () => {
    const { year, month, day, id, sex } = util.parseSocialSecurityNumberDK('011209-1235')
    expect(year).toBe(2009)
    expect(month).toBe(12)
    expect(day).toBe(1)
    expect(id).toBe(1235)
    expect(sex).toBe('M')
  })
  it('throws on invalid format', () => {
    expect(() => util.parseSocialSecurityNumberDK('011209--1235')).toThrowError(
      'Invalid Danish social security number format. Expected ddmmyy[-]xxxx. Got: 011209--1235',
    )
    expect(() => util.parseSocialSecurityNumberDK('011209-12350')).toThrowError(
      'Invalid Danish social security number format. Expected ddmmyy[-]xxxx. Got: 011209-12350',
    )
  })
  it('throws on invalid birthdate - day', () => {
    expect(() => util.parseSocialSecurityNumberDK('001209-1235')).toThrowError(
      `Expected valid birth date.`,
    )
    expect(() => util.parseSocialSecurityNumberDK('321209-1235')).toThrowError(
      `Expected valid birth date.`,
    )
  })
  it('throws on invalid birthdate - month', () => {
    expect(() => util.parseSocialSecurityNumberDK('010009-1235')).toThrowError(
      `Expected valid birth date.`,
    )
    expect(() => util.parseSocialSecurityNumberDK('011332-1235')).toThrowError(
      `Expected valid birth date.`,
    )
  })
})

describe('isSocialSecurityNumberDK', () => {
  it('Correct validates Danish SSN', () => {
    expect(util.isSocialSecurityNumberDK('201187-1234')).toBe(true)
    expect(util.isSocialSecurityNumberDK('201187-1234')).toBe(true)
    expect(util.isSocialSecurityNumberDK('011209-1235')).toBe(true)
    expect(util.isSocialSecurityNumberDK('011209--1235')).toBe(false)
    expect(util.isSocialSecurityNumberDK('011209-12350')).toBe(false)
    expect(util.isSocialSecurityNumberDK('001209-1235')).toBe(false)
    expect(util.isSocialSecurityNumberDK('321209-1235')).toBe(false)
    expect(util.isSocialSecurityNumberDK('010009-1235')).toBe(false)
    expect(util.isSocialSecurityNumberDK('011332-1235')).toBe(false)
  })
})

describe('parseMarkdownTable', () => {
  it('should parse a simple table', () => {
    const table = `| A | B |
                   |---|---|
                   | 1 | 2 |
                   | 3 | 4 |`
    const expected = [
      ['A', 'B'],
      ['1', '2'],
      ['3', '4'],
    ]
    expect(util.parseMarkdownTable(table)).toEqual(expected)
  })

  it('should parse a table with empty cells and spaces', () => {
    const table = `| A | B |
                   |---|---|
                   |   | 2 |
                   | 3 |   |`
    const expected = [
      ['A', 'B'],
      ['', '2'],
      ['3', ''],
    ]
    expect(util.parseMarkdownTable(table)).toEqual(expected)
  })

  it('should ignore leading/trailing spaces and empty lines', () => {
    const table = `  \n | A | B |  \n
                    |---|---|\n

                    | 1 | 2 |  \n
                   `
    const expected = [
      ['A', 'B'],
      ['1', '2'],
    ]
    expect(util.parseMarkdownTable(table)).toEqual(expected)
  })

  it('should ignore missing beginning or trailing pipes', () => {
    const table = `| A | B
                   |---|---|
                    1 | 2 |`
    const expected = [
      ['A', 'B'],
      ['1', '2'],
    ]
    expect(util.parseMarkdownTable(table)).toEqual(expected)
  })

  it('should ignore if table rows dont have same length', () => {
    const table = `| A | B |
                   |---|---|
                   | 1 | 2 |
                   | 3 | 4 | 5 |`
    expect(() => util.parseMarkdownTable(table)).not.toThrow()
  })
})

describe('readExcelFile', () => {
  const excelFilePath = process.cwd() + '\\tests\\test-files\\excel-file.xlsx'
  const expectedWorksheet0 = [
    ['A', 'B', 'C'],
    ['1', '2', '3'],
    ['4', '5', '6'],
  ]
  const expectedWorksheet1 = [['value']]
  describe('readExcelFileWorksheet', () => {
    it('reads contents of excel file worksheet index 0', async () => {
      expect(await util.readExcelFileWorksheet(excelFilePath, 0)).toEqual(expectedWorksheet0)
    })

    it('reads contents of excel file worksheet index 0 by name', async () => {
      expect(await util.readExcelFileWorksheet(excelFilePath, 'Sheet1')).toEqual(expectedWorksheet0)
    })

    it('reads contents of excel file worksheet index 1', async () => {
      expect(await util.readExcelFileWorksheet(excelFilePath, 1)).toEqual(expectedWorksheet1)
    })

    it('reads contents of excel file worksheet index 1 by name', async () => {
      expect(await util.readExcelFileWorksheet(excelFilePath, 'Sheet2')).toEqual(expectedWorksheet1)
    })
  })

  it('reads contents of excel file all worksheets', async () => {
    expect(await util.readExcelFile(excelFilePath)).toEqual({
      Sheet1: expectedWorksheet0,
      Sheet2: expectedWorksheet1,
    })
  })
})
