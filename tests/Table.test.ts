import * as util from '../src/libs/datastructures'

describe('constructor', () => {
  it('instances have non-enumerable private properties', () => {
    const t = new util.Table()
    expect(Object.keys(t).filter((key) => key.charAt(0) === '_').length).toBe(0)
  })
  it('creates a 1x1 table when no options passed', () => {
    const t = new util.Table()
    expect(t.rows).toBe(1)
    expect(t.columns).toBe(1)
  })
  it('creates empty table of given size', () => {
    const t = new util.Table({ rows: 3, columns: 4 })
    expect(t.rows).toBe(3)
    expect(t.columns).toBe(4)
  })
  it('accepts row headers', () => {
    const rowHeaders = ['A', 'B']
    const t = new util.Table({ rowHeaders })
    expect(t.rows).toBe(2)
    expect(t.columns).toBe(1)
    expect(t.rowHeaders).toStrictEqual(rowHeaders)
    expect(t.toArray()).toStrictEqual([
      ['A', undefined],
      ['B', undefined],
    ])
  })
  it('accepts col headers', () => {
    const columnHeaders = ['A', 'B']
    const t = new util.Table({ columnHeaders })
    expect(t.rows).toBe(1)
    expect(t.columns).toBe(2)
    expect(t.columnHeaders).toStrictEqual(columnHeaders)
    expect(t.toArray()).toStrictEqual([
      ['A', 'B'],
      [undefined, undefined],
    ])
  })
  it('accepts row and col headers simultaneously', () => {
    const columnHeaders = ['#', 'A', 'B']
    const rowHeaders = ['1', '2']
    const t = new util.Table({ rowHeaders, columnHeaders })
    expect(t.rows).toBe(2)
    expect(t.columns).toBe(2)
    expect(t.rowHeaders).toStrictEqual(rowHeaders)
    expect(t.columnHeaders).toStrictEqual(columnHeaders)
  })
  it('accepts col headers with rows dimension option', () => {
    const columnHeaders = ['A', 'B']
    const t = new util.Table({ columnHeaders, rows: 8 })
    expect(t.rows).toBe(8)
    expect(t.columns).toBe(2)
    expect(t.columnHeaders).toStrictEqual(columnHeaders)
  })
  it('accepts data', () => {
    const columnHeaders = ['#', 'A', 'B']
    const rowHeaders = ['1', '2']
    const data = [
      ['A1', 'B1'],
      ['A2', 'B2'],
    ]
    const t = new util.Table({ rowHeaders, columnHeaders, data })
    expect(t.rows).toBe(2)
    expect(t.columns).toBe(2)
    expect(t.rowHeaders).toStrictEqual(rowHeaders)
    expect(t.columnHeaders).toStrictEqual(columnHeaders)
  })
  it('can extract col headers from data', () => {
    const t = new util.Table({
      data: [
        ['A', 'B'],
        ['A1', 'B1'],
        ['A2', 'B2'],
      ],
      extractColumnHeaders: true,
    })
    expect(t.rows).toBe(2)
    expect(t.columns).toBe(2)
    expect(t.columnHeaders).toStrictEqual(['A', 'B'])
  })
  it('can extract row headers from data', () => {
    const t = new util.Table({
      data: [
        ['1', 'A1', 'B1'],
        ['2', 'A2', 'B2'],
      ],
      extractRowHeaders: true,
    })
    expect(t.rows).toBe(2)
    expect(t.columns).toBe(2)
    expect(t.rowHeaders).toStrictEqual(['1', '2'])
  })
  it('can extract row and col headers from data simultaneously', () => {
    const t = new util.Table({
      data: [
        ['#', 'A', 'B'],
        ['1', 'A1', 'B1'],
        ['2', 'A2', 'B2'],
      ],
      extractColumnHeaders: true,
      extractRowHeaders: true,
    })
    expect(t.rows).toBe(2)
    expect(t.columns).toBe(2)
    expect(t.columnHeaders).toStrictEqual(['#', 'A', 'B'])
    expect(t.rowHeaders).toStrictEqual(['1', '2'])
  })
})

describe('constructor options validation', () => {
  it('throws on columns less than 1', () => {
    expect(() => {
      new util.Table({ columns: 0 })
    }).toThrowError('Expected columns to be integer larger than 0 but got: 0')
  })
  it('throws on rows less than 1', () => {
    expect(() => {
      new util.Table({ rows: 0 })
    }).toThrowError('Expected rows to be integer larger than 0 but got: 0')
  })
  it('throws if columns is non-integer number', () => {
    expect(() => {
      new util.Table({ columns: 1.1 })
    }).toThrowError('Expected columns to be integer an integer.')
  })
  it('throws if rows is non-integer number', () => {
    expect(() => {
      new util.Table({ rows: 1.1 })
    }).toThrowError('Expected rows to be integer an integer.')
  })
  it('throws on invalid data dimensions: missing extra col when using row headers', () => {
    expect(() => {
      const columnHeaders = ['A', 'B']
      const rowHeaders = ['1', '2']
      const data = [
        ['A1', 'B1'],
        ['A2', 'B2'],
      ]
      new util.Table({ rowHeaders, columnHeaders, data })
    }).toThrowError('Expected all rows to be of same length.')
  })
  it('throws on invalid data dimensions: number of columns in data do not match col headers', () => {
    expect(() => {
      const columnHeaders = ['#', 'A', 'B']
      const rowHeaders = ['1', '2']
      const data = [['A1'], ['A2']]
      new util.Table({ rowHeaders, columnHeaders, data })
    }).toThrowError('Expected all rows to be of same length.')
  })
  it('throws on invalid data dimensions: number of rows in data do not match row headers', () => {
    expect(() => {
      const columnHeaders = ['#', 'A', 'B']
      const rowHeaders = ['1', '2']
      const data = [['A1', 'B1']]
      new util.Table({ rowHeaders, columnHeaders, data })
    }).toThrowError('Expected a row header for each row.')
  })
  it("Cannot use the 'extractColumnHeaders' option and the 'columnHeaders' option simultanously.", () => {
    expect(() => {
      new util.Table({ extractColumnHeaders: true, columnHeaders: ['a'] })
    }).toThrowError("Cannot use the 'extractColumnHeaders' option and the 'columnHeaders' option simultanously.")
  })
  it("Cannot use the 'extractRowHeaders' option and the 'rowHeaders' option simultanously.", () => {
    expect(() => {
      new util.Table({ extractRowHeaders: true, rowHeaders: ['a'] })
    }).toThrowError("Cannot use the 'extractRowHeaders' option and the 'rowHeaders' option simultanously.")
  })
  it("Cannot use the 'columns' option and the 'data' option simultanously.", () => {
    expect(() => {
      new util.Table({ columns: 1, data: [[0]] })
    }).toThrowError("Cannot use the 'columns' option and the 'data' option simultanously.")
  })
  it("Cannot use the 'rows' option and the 'data' option simultanously.", () => {
    expect(() => {
      new util.Table({ rows: 1, data: [[0]] })
    }).toThrowError("Cannot use the 'rows' option and the 'data' option simultanously.")
  })
  it("Cannot use the 'columns' option and the 'columnHeaders' option simultanously.", () => {
    expect(() => {
      new util.Table({ columns: 1, columnHeaders: ['a'] })
    }).toThrowError("Cannot use the 'columns' option and the 'columnHeaders' option simultanously.")
  })
  it("Cannot use the 'rows' option and the 'rowHeaders' option simultanously.", () => {
    expect(() => {
      new util.Table({ rows: 1, rowHeaders: ['a'] })
    }).toThrowError("Cannot use the 'rows' option and the 'rowHeaders' option simultanously.")
  })
  it("Cannot use the 'extractColumnHeaders' option without the 'data' option.", () => {
    expect(() => {
      new util.Table({ extractColumnHeaders: true })
    }).toThrowError("Cannot use the 'extractColumnHeaders' option without the 'data' option.")
  })
  it("Cannot use the 'extractRowHeaders' option without the 'data' option.", () => {
    expect(() => {
      new util.Table({ extractRowHeaders: true })
    }).toThrowError("Cannot use the 'extractRowHeaders' option without the 'data' option.")
  })
})

describe('columnHeaders (getter)', () => {
  it('returns correct column headers.', () => {
    const columnHeaders = ['a', 'b']
    const t = new util.Table({ columnHeaders })
    expect(t.columnHeaders).toStrictEqual(columnHeaders)
  })
  it('throws if no column headers are defined.', () => {
    expect(() => {
      new util.Table().columnHeaders
    }).toThrowError('No column headers are defined for this table.')
  })
})

describe('rowHeaders (getter)', () => {
  it('returns correct row headers.', () => {
    const rowHeaders = ['a', 'b']
    const t = new util.Table({ rowHeaders })
    expect(t.rowHeaders).toStrictEqual(rowHeaders)
  })
  it('throws if no row headers are defined.', () => {
    expect(() => {
      new util.Table().rowHeaders
    }).toThrowError('No row headers are defined for this table.')
  })
})

describe('columns (getter)', () => {
  it('returns correct number of columns.', () => {
    const data = [[1, 2]]
    const t = new util.Table({ data })

    expect(t.columns).toBe(2)
  })
})

describe('rows (getter)', () => {
  it('returns correct number of rows.', () => {
    const data = [[1], [2]]
    const t = new util.Table({ data })
    expect(t.rows).toBe(2)
  })
})

describe('get', () => {
  let t: util.Table<string>
  beforeEach(() => {
    const columnHeaders = ['#', 'A', 'B']
    const rowHeaders = ['1', '2']
    const data = [
      ['A1', 'B1'],
      ['A2', 'B2'],
    ]
    t = new util.Table({ rowHeaders, columnHeaders, data })
  })
  it('works with row and col indices.', () => {
    expect(t.get(0, 0)).toBe('A1')
    expect(t.get(1, 1)).toBe('B2')
  })
  it('works with row and col derived from header names.', () => {
    expect(t.get('A', '1')).toBe('A1')
    expect(t.get('B', '2')).toBe('B2')
  })
  it('works with spreadsheet notation', () => {
    const t2 = new util.Table({
      data: [
        [1, 2],
        [3, 4],
      ],
    })
    expect(t2.get('A', '1', true)).toBe(1)
    expect(t2.get('A', 1, true)).toBe(1)
    expect(t2.get('B', 2, true)).toBe(4)
  })
  it('throws on non-existent header name', () => {
    expect(() => {
      t.get('C', '1')
    }).toThrowError('Col not found in columnHeaders.')
    expect(() => {
      t.get('A', '3')
    }).toThrowError('Row not found in rowHeaders.')
  })
  it('throws when using header lookup when no headers are defined', () => {
    expect(() => {
      t = new util.Table({
        data: [
          ['A1', 'B1'],
          ['A2', 'B2'],
        ],
      })
      t.get('A', 0)
    }).toThrowError('Cannot pass col as string when no columnHeaders are defined.')
    expect(() => {
      t = new util.Table({
        data: [
          ['A1', 'B1'],
          ['A2', 'B2'],
        ],
      })
      t.get(0, '1')
    }).toThrowError('Cannot pass row as string when no rowHeaders are defined.')
  })
})

describe('set', () => {
  let t: util.Table<string>
  beforeEach(() => {
    const columnHeaders = ['#', 'A', 'B']
    const rowHeaders = ['1', '2']
    const data = [
      ['', 'B1'],
      ['A2', ''],
    ]
    t = new util.Table({ rowHeaders, columnHeaders, data })
  })
  it('works with row and col indices.', () => {
    expect(t.set(0, 0, 'A1')).toBe(t)
    expect(t.set(1, 1, 'B2')).toBe(t)
    expect(t.get(0, 0)).toBe('A1')
    expect(t.get(1, 1)).toBe('B2')
  })
  it('works with spreadsheet notation', () => {
    const t2: util.Table<number> = new util.Table<number>({
      data: [
        [1, 2],
        [3, 4],
      ],
    })
    t2.set('A', '1', 0, true)
    expect(t2.get(0, 0)).toBe(0)
  })
})

describe('removeColumn', () => {
  it('can delete col', () => {
    const t = new util.Table({
      data: [
        ['A1', 'B1'],
        ['A2', 'B2'],
      ],
    })
    t.removeColumn(1)
    expect(t.toArray()).toStrictEqual([['A1'], ['A2']])
  })
  it('can delete col from table with col headers', () => {
    const t = new util.Table({
      data: [
        ['A', 'B'],
        ['A1', 'B1'],
        ['A2', 'B2'],
      ],
      extractColumnHeaders: true,
    })
    t.removeColumn(0)
    expect(t.toArray()).toStrictEqual([['B'], ['B1'], ['B2']])
  })
  it('can delete col from table with col and row headers', () => {
    const t = new util.Table({
      data: [
        ['#', 'A', 'B'],
        ['1', 'A1', 'B1'],
        ['2', 'A2', 'B2'],
      ],
      extractColumnHeaders: true,
      extractRowHeaders: true,
    })
    t.removeColumn(0)
    expect(t.toArray()).toStrictEqual([
      ['#', 'B'],
      ['1', 'B1'],
      ['2', 'B2'],
    ])
  })
})

describe('removeRow', () => {
  it('can delete row', () => {
    const t = new util.Table({
      data: [
        ['A1', 'B1'],
        ['A2', 'B2'],
      ],
    })
    t.removeRow(1)
    expect(t.toArray()).toStrictEqual([['A1', 'B1']])
  })
  it('can delete row from table with row headers', () => {
    const t = new util.Table({
      data: [
        ['1', 'A1', 'B1'],
        ['2', 'A2', 'B2'],
      ],
      extractRowHeaders: true,
    })
    t.removeRow(0)
    expect(t.toArray()).toStrictEqual([['2', 'A2', 'B2']])
  })
  it('can delete row from table with row and col headers', () => {
    const t = new util.Table({
      data: [
        ['#', 'A', 'B'],
        ['1', 'A1', 'B1'],
        ['2', 'A2', 'B2'],
      ],
      extractColumnHeaders: true,
      extractRowHeaders: true,
    })
    t.removeRow(0)
    expect(t.toArray()).toStrictEqual([
      ['#', 'A', 'B'],
      ['2', 'A2', 'B2'],
    ])
  })
})

describe('indexOfColHeader', () => {
  it('finds column header index with no row headers defined', () => {
    const t = new util.Table({
      data: [
        ['A', 'B'],
        ['A1', 'B1'],
        ['A2', 'B2'],
      ],
      extractColumnHeaders: true,
    })
    expect(t.indexOfColumnHeader('A')).toBe(0)
    expect(t.indexOfColumnHeader('B')).toBe(1)
    expect(t.indexOfColumnHeader('C')).toBe(-1)
  })
  it('finds column header index with row headers defined', () => {
    const t = new util.Table({
      data: [
        ['#', 'A', 'B'],
        ['1', 'A1', 'B1'],
        ['2', 'A2', 'B2'],
      ],
      extractColumnHeaders: true,
      extractRowHeaders: true,
    })
    expect(t.indexOfColumnHeader('A')).toBe(0)
    expect(t.indexOfColumnHeader('B')).toBe(1)
    expect(t.indexOfColumnHeader('#')).toBe(-1)
  })
  it('throws when no col headers are defined', () => {
    const t = new util.Table({
      data: [
        ['A1', 'B1'],
        ['A2', 'B2'],
      ],
    })
    expect(() => {
      t.indexOfColumnHeader('A1')
    }).toThrowError('No column headers are defined for this table.')
  })
})

describe('indexOfRowHeader', () => {
  it('finds row header index with no column headers defined', () => {
    const t = new util.Table({
      data: [
        ['1', 'A1', 'B1'],
        ['2', 'A2', 'B2'],
      ],
      extractRowHeaders: true,
    })
    expect(t.indexOfRowHeader('1')).toBe(0)
    expect(t.indexOfRowHeader('2')).toBe(1)
    expect(t.indexOfRowHeader('3')).toBe(-1)
  })
  it('finds row header index with column headers defined', () => {
    const t = new util.Table({
      data: [
        ['#', 'A', 'B'],
        ['1', 'A1', 'B1'],
        ['2', 'A2', 'B2'],
      ],
      extractColumnHeaders: true,
      extractRowHeaders: true,
    })
    expect(t.indexOfRowHeader('1')).toBe(0)
    expect(t.indexOfRowHeader('2')).toBe(1)
    expect(t.indexOfRowHeader('#')).toBe(-1)
  })
  it('throws when no col headers are defined', () => {
    const t = new util.Table({
      data: [
        ['A1', 'B1'],
        ['A2', 'B2'],
      ],
    })
    expect(() => {
      t.indexOfRowHeader('A1')
    }).toThrowError('No row headers are defined for this table.')
  })
})

describe('toArray', () => {
  it('works on empty 1x1 table', () => {
    const t = new util.Table()
    expect(t.toArray()).toStrictEqual([[undefined]])
  })
  it('works on empty 2x2 table', () => {
    const t = new util.Table({ rows: 2, columns: 2 })
    expect(t.toArray()).toStrictEqual([
      [undefined, undefined],
      [undefined, undefined],
    ])
  })
  it('works with headers and data', () => {
    const columnHeaders = ['#', 'A', 'B']
    const rowHeaders = ['1', '2']
    const data = [
      ['A1', 'B1'],
      ['A2', 'B2'],
    ]
    const t = new util.Table({ rowHeaders, columnHeaders, data })
    expect(t.toArray()).toStrictEqual([
      ['#', 'A', 'B'],
      ['1', 'A1', 'B1'],
      ['2', 'A2', 'B2'],
    ])
  })
})

describe('toArrayDataOnly', () => {
  it('works on empty 1x1 table', () => {
    const t = new util.Table()
    expect(t.toArrayDataOnly()).toStrictEqual([[undefined]])
  })
  it('works on empty 2x2 table', () => {
    const t = new util.Table({ rows: 2, columns: 2 })
    expect(t.toArrayDataOnly()).toStrictEqual([
      [undefined, undefined],
      [undefined, undefined],
    ])
  })
  it('works with headers and data', () => {
    const columnHeaders = ['#', 'A', 'B']
    const rowHeaders = ['1', '2']
    const data = [
      ['A1', 'B1'],
      ['A2', 'B2'],
    ]
    const t = new util.Table({ rowHeaders, columnHeaders, data })
    expect(t.toArrayDataOnly()).toStrictEqual([
      ['A1', 'B1'],
      ['A2', 'B2'],
    ])
  })
})

describe('toCSV', () => {
  it('works', () => {
    const columnHeaders = ['#', 'A', 'B']
    const rowHeaders = ['1', '2']
    const data = [
      ['A1', 'B1'],
      ['A2', 'B2'],
    ]
    const t = new util.Table({ rowHeaders, columnHeaders, data })
    expect(t.toCSV(',')).toBe(['#,A,B', '1,A1,B1', '2,A2,B2'].join('\n'))
  })
})
describe('fromCSV', () => {
  it('works', () => {
    const csv = ['#,A,B', '1,A1,B1', '2,A2,B2'].join('\n')
    expect(util.Table.fromCSV(csv, ',').toArray()).toStrictEqual([
      ['#', 'A', 'B'],
      ['1', 'A1', 'B1'],
      ['2', 'A2', 'B2'],
    ])
  })
})

describe('toJSON', () => {
  it('gives identical output to JSON.stringify', () => {
    const columnHeaders = ['#', 'A']
    const rowHeaders = ['1']
    const data = [['A1']]
    const t = new util.Table({ rowHeaders, columnHeaders, data })
    expect(JSON.stringify(t)).toBe('{"columnHeaders":["#","A"],"rowHeaders":["1"],"data":[["A1"]]}')
  })
})

describe('fromJSON', () => {
  it('correctly revives instance', () => {
    const columnHeaders = ['#', 'A']
    const rowHeaders = ['1']
    const data = [['A1']]
    const t1 = new util.Table({ rowHeaders, columnHeaders, data })
    const t2 = util.Table.fromJSON('{"columnHeaders":["#","A"],"rowHeaders":["1"],"data":[["A1"]]}')
    expect(t1).toStrictEqual(t2)
    expect(t1.toArray()).toStrictEqual(t2.toArray())
  })
})
