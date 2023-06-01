import { IRevivable } from '../../mixins/src/interfaces'
import { Base } from '../../mixins/src/Base'

export type SimpleTableSerializedForm<T> = {
  headers: Array<string>
  data: Array<Array<T>>
}

/**
 * Two-dimensional table class supporting column and row headers.
 */
export class SimpleTable<T> extends Base implements IRevivable<SimpleTableSerializedForm<T>> {
  protected _colIndexMap: Record<string, number> = {}
  protected _headers: Array<string>
  protected _data: Array<Array<T>> = []

  /**
   * Revive a stringified Table object.
   * @param json a stringified Table object.
   */
  public static fromJSON<T>(json: string): SimpleTable<T> {
    const { headers, data } = JSON.parse(json)
    return new SimpleTable(data, headers)
  }

  constructor(data: T[][], headers?: string[]) {
    super()
    if (headers) {
      this._headers = headers.slice()
      this._data = data.map((row) => {
        this.assertRowValidLength(row)
        return row.slice()
      })
    } else {
      this._headers = data[0].map((header) => '' + header)
      this._data = data.slice(1).map((row) => {
        this.assertRowValidLength(row)
        return row.slice()
      })
    }
    if (!this._headers.length) throw new Error('Table must have at least one column.')
    if (!this._data.length) throw new Error('Table must have at least one row.')
    this._headers.forEach((header, i) => {
      this._colIndexMap[header] = i
    })
    this.setNonEnumerablePrivateProperties()
  }

  protected assertRowValidLength(row: T[]): void {
    if (row.length !== this._headers.length)
      throw new Error('Row length does not match headers length.')
  }

  /**
   * Gets the number of cols in the table, not including headers.
   */
  public get numColumns(): number {
    return this._data[0].length
  }

  /**
   * Gets the number of rows in the table, not including headers.
   */
  public get numRows(): number {
    return this._data.length
  }

  /**
   * Gets the column headers.
   */
  public get headers(): Array<string> {
    return this._headers.slice()
  }

  /**
   * Returns the table as a two-dimensional array, without column headers.
   */
  public get data(): T[][] {
    return this._data.slice().map((row) => row.slice())
  }

  /**
   * Returns a value at a given (row, col) position.
   * @param column Column index or name
   * @param row Row index
   */
  public get(column: number | string, row: number): T {
    if (typeof column === 'string') {
      column = this._colIndexMap[column]
    }
    return this._data[row][column]
  }

  /**
   * Inserts a given value at a given (row, col) position.
   * @param column Column index
   * @param row Row index
   * @param value The value to insert
   */
  public set(column: number | string, row: number, value: T): SimpleTable<T> {
    if (typeof column === 'string') {
      column = this._colIndexMap[column]
    }
    this._data[row][column] = value
    return this
  }

  /**
   * Returns the table as a two-dimensional array, including row and column headers..
   */
  public toArray(): (T | string)[][] {
    const result: (T | string)[][] = [this.headers]
    return result.concat(this.data)
  }

  /**
   * Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.
   */
  public toJSON(): SimpleTableSerializedForm<T> {
    return {
      headers: this._headers,
      data: this._data,
    }
  }
}
