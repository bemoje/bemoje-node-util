import { SimpleTable } from './SimpleTable'

describe('SimpleTable', () => {
  it('should create a new SimpleTable', () => {
    const data = [
      [1, 2, 3],
      [4, 5, 6],
    ]
    const headers = ['a', 'b', 'c']
    const table = new SimpleTable(data, headers)
    expect(table).toBeInstanceOf(SimpleTable)
  })

  it('should throw an error if headers length does not match row length', () => {
    const data = [
      [1, 2, 3],
      [4, 5],
    ]
    const headers = ['a', 'b', 'c']
    expect(() => new SimpleTable(data, headers)).toThrowError('Row length does not match headers length.')
  })

  it('should throw an error if no headers are provided', () => {
    const data = [[], []]
    expect(() => new SimpleTable(data)).toThrowError('Table must have at least one column.')
  })

  it('should throw an error if no data is provided', () => {
    const headers = ['a', 'b', 'c']
    expect(() => new SimpleTable([], headers)).toThrowError('Table must have at least one row.')
  })

  it('should return the number of columns', () => {
    const data = [
      [1, 2, 3],
      [4, 5, 6],
    ]
    const headers = ['a', 'b', 'c']
    const table = new SimpleTable(data, headers)
    expect(table.numColumns).toBe(3)
  })

  it('should return the number of rows', () => {
    const data = [
      [1, 2, 3],
      [4, 5, 6],
    ]
    const headers = ['a', 'b', 'c']
    const table = new SimpleTable(data, headers)
    expect(table.numRows).toBe(2)
  })

  it('should return the headers', () => {
    const data = [
      [1, 2, 3],
      [4, 5, 6],
    ]
    const headers = ['a', 'b', 'c']
    const table = new SimpleTable(data, headers)
    expect(table.headers).toEqual(headers)
  })

  it('should derive headers from first row if headers undefined', () => {
    const data = [
      ['a', 'b', 'c'],
      [1, 2, 3],
      [4, 5, 6],
    ]
    const table = new SimpleTable<any>(data)
    expect(table.headers).toEqual(['a', 'b', 'c'])
  })

  it('should return the data', () => {
    const data = [
      [1, 2, 3],
      [4, 5, 6],
    ]
    const headers = ['a', 'b', 'c']
    const table = new SimpleTable(data, headers)
    expect(table.data).toEqual(data)
  })

  it('should return a value at a given position', () => {
    const data = [
      [1, 2, 3],
      [4, 5, 6],
    ]
    const headers = ['a', 'b', 'c']
    const table = new SimpleTable(data, headers)
    expect(table.get(1, 0)).toBe(2)
    expect(table.get('b', 1)).toBe(5)
  })

  it('should set a value at a given position', () => {
    const data = [
      [1, 2, 3],
      [4, 5, 6],
    ]
    const headers = ['a', 'b', 'c']
    const table = new SimpleTable(data, headers)
    table.set(1, 0, 10)
    table.set('b', 1, 50)
    expect(table.get(1, 0)).toBe(10)
    expect(table.get('b', 1)).toBe(50)
  })

  it('should return the table as a two-dimensional array', () => {
    const data = [
      [1, 2, 3],
      [4, 5, 6],
    ]
    const headers = ['a', 'b', 'c']
    const table = new SimpleTable(data, headers)
    expect(table.toArray()).toEqual([headers, ...data])
  })

  it('should return a serialized form of the table', () => {
    const data = [
      [1, 2, 3],
      [4, 5, 6],
    ]
    const headers = ['a', 'b', 'c']
    const table = new SimpleTable(data, headers)
    expect(table.toJSON()).toEqual({ headers, data })
  })

  it('should revive a stringified Table object', () => {
    const data = [
      [1, 2, 3],
      [4, 5, 6],
    ]
    const headers = ['a', 'b', 'c']
    const json = JSON.stringify({ headers, data })
    const table = SimpleTable.fromJSON(json)
    expect(table).toBeInstanceOf(SimpleTable)
    expect(table.headers).toEqual(headers)
    expect(table.data).toEqual(data)
  })
})
