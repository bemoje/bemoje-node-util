import { MixinBase } from '../mixins/MixinBase'
import { ISimpleTableSerializedForm } from './types/ISimpleTableSerializedForm'

/**
 * Two-dimensional table class supporting column and row headers.
 * @template T The type of the data in the table.
 */
export class SimpleTable<T> extends MixinBase {
  /**
   * Map from column names to column indices.
   */
  #colIndexMap: Record<string, number> = {}

  /**
   * The headers of the table.
   */
  #headers: string[]

  /**
   * The data of the table.
   */
  #data: T[][] = []

  /**
   * Revive a stringified Table object.
   * @param json a stringified Table object.
   */
  public static fromJSON<T>(json: string): SimpleTable<T> {
    const { headers, data } = JSON.parse(json)
    return new SimpleTable(data, headers)
  }

  /**
   * Creates a new SimpleTable.
   * @param data The data of the table.
   * @param headers The headers of the table.
   */
  constructor(data: T[][], headers?: string[]) {
    super()
    if (headers) {
      this.#headers = headers.slice()
      this.#data = data.map((row) => {
        this.assertRowValidLength(row)
        return row.slice()
      })
    } else {
      this.#headers = data[0].map((header) => '' + header)
      this.#data = data.slice(1).map((row) => {
        this.assertRowValidLength(row)
        return row.slice()
      })
    }
    if (!this.#headers.length) throw new Error('Table must have at least one column.')
    if (!this.#data.length) throw new Error('Table must have at least one row.')
    this.#headers.forEach((header, i) => {
      this.#colIndexMap[header] = i
    })
  }

  /**
   * Checks if a row has the correct length.
   * @param row The row to check.
   */
  protected assertRowValidLength(row: T[]): void {
    if (row.length !== this.#headers.length) throw new Error('Row length does not match headers length.')
  }

  /**
   * Gets the number of cols in the table, not including headers.
   */
  public get numColumns(): number {
    return this.#data[0].length
  }

  /**
   * Gets the number of rows in the table, not including headers.
   */
  public get numRows(): number {
    return this.#data.length
  }

  /**
   * Gets the column headers.
   */
  public get headers(): string[] {
    return this.#headers.slice()
  }

  /**
   * Returns the table as a two-dimensional array, without column headers.
   */
  public get data(): T[][] {
    return this.#data.slice().map((row) => row.slice())
  }

  /**
   * Returns a value at a given (row, col) position.
   * @param column Column index or name
   * @param row Row index
   */
  public get(column: number | string, row: number): T {
    if (typeof column === 'string') {
      column = this.#colIndexMap[column]
    }
    return this.#data[row][column]
  }

  /**
   * Inserts a given value at a given (row, col) position.
   * @param column Column index
   * @param row Row index
   * @param value The value to insert
   */
  public set(column: number | string, row: number, value: T): SimpleTable<T> {
    if (typeof column === 'string') {
      column = this.#colIndexMap[column]
    }
    this.#data[row][column] = value
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
  public toJSON(): ISimpleTableSerializedForm<T> {
    return {
      headers: this.#headers,
      data: this.#data,
    }
  }
}
