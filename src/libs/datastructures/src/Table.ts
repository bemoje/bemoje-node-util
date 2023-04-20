/* eslint-disable @typescript-eslint/no-extra-semi */
import { IRevivable } from '../../../'
import { arr2dToCSV, arrEvery, arrMapMutable } from '../../array'
import { Base } from './Base'
import { A1ToColRow } from '../../spreadsheet'
import { letterToCol } from '../../spreadsheet/src/letterToCol'

/**
 * Constructor options for the Table class.
 */
export interface ITableOptions<T> {
  /**
   * 2D array to build table from.
   * All rows must be the same length.
   * When using this option, the 'columns' and 'rows' options are not allowed.
   */
  data?: Array<Array<T>>
  /**
   * Intepret the first row of passed data as column headers/names (see TableOptions.data property).
   * When performing lookups in the table from indices or coordinates, headers are ignored, ie. not counted.
   * If the 'data' option is not used, this option is not allowed.
   * If the 'columnHeaders' option is used, this option is not allowed.
   */
  extractColumnHeaders?: boolean
  /**
   * Intepret the first element of every row of passed data as row headers/names (see TableOptions.data property).
   * When performing lookups in the table from indices or coordinates, headers are ignored, ie. not counted.
   * If the 'data' option is not used, this option is not allowed.
   * If the 'rowHeaders' option is used, this option is not allowed.
   */
  extractRowHeaders?: boolean
  /**
   * Define column headers/names.
   * Must be of same length as entered in the 'columns' option.
   * When performing lookups in the table from indices or coordinates, headers are ignored, ie. not counted.
   * When using row headers simultaneously, this array will need to be of length one higher as the first element is intepreted as the column header for the row headers column.
   */
  columnHeaders?: Array<string>
  /**
   * Define column headers/names.
   * Must be of same length as entered in the 'columns' option.
   * When performing lookups in the table from indices or coordinates, headers are ignored, ie. not counted.
   */
  rowHeaders?: Array<string>
  /**
   * Number of columns in the table.
   * This option is not allowed when the 'data' or 'columnHeaders' properties are being used.
   * TypeScript: Type safety consideration: Please note that when initializing an empty Table, it is full of 'undefined' values even if the table is specifically typed to not allow 'undefined'. TypeScript's static type-checking cannot see this.
   */
  columns?: number
  /**
   * Number of rows in the table.
   * This option is not allowed when the 'data' or 'rowHeaders' properties are being used.
   * TypeScript: Type safety consideration: Please note that when initializing an empty Table, it is full of 'undefined' values even if the table is specifically typed to not allow 'undefined'. TypeScript's static type-checking cannot see this.
   */
  rows?: number
}

export type TableSerializedForm<T> = {
  columnHeaders: Array<string>
  rowHeaders: Array<string>
  data: Array<Array<T>>
}

/**
 * Two-dimensional table class supporting column and row headers.
 */
export class Table<T> extends Base implements IRevivable<TableSerializedForm<T>> {
  protected _columnHeaders?: Array<string>
  protected _rowHeaders?: Array<string>
  protected _data: Array<Array<T>> = []

  /**
   * Creates a Table instance from CSV string data.
   * @param csv CSV data string
   * @param delimiter csv delimiter
   * @param options TableOptions constructor options.
   */
  public static fromCSV<T>(csv: string, delimiter = ';', options: ITableOptions<T | string> = {}): Table<T | string> {
    options.data = csv
      .split('\n')
      .filter((line) => line.length)
      .map((line) => line.trim().split(delimiter))
    return new Table(options)
  }

  /**
   * Revive a stringified Table object.
   * @param json a stringified Table object.
   */
  public static fromJSON<T>(json: string): Table<T> {
    return new Table(JSON.parse(json))
  }

  constructor(options: ITableOptions<T> = {}) {
    super()
    this.validateOptions(options)
    this.handleOptions(options)
    this.validateData()
    this.setNonEnumerablePrivateProperties()
  }

  /**
   * Gets the number of cols in the table, not including headers.
   */
  public get columns(): number {
    return this._data[0].length
  }

  /**
   * Gets the number of rows in the table, not including headers.
   */
  public get rows(): number {
    return this._data.length
  }

  /**
   * Gets the column headers.
   */
  public get columnHeaders(): Array<string> {
    if (!this._columnHeaders) {
      throw new Error('No column headers are defined for this table.')
    }
    return this._columnHeaders ? this._columnHeaders.slice() : []
  }

  /**
   * Gets the row headers.
   */
  public get rowHeaders(): Array<string> {
    if (!this._rowHeaders) {
      throw new Error('No row headers are defined for this table.')
    }
    return this._rowHeaders ? this._rowHeaders.slice() : []
  }

  /**
   * Returns a value at a given (row, col) position.
   * @param column Column index
   * @param row Row index
   * @param spreadsheetNotation Interpret row and col as spreadsheet coordinates, eg. ("A","1")
   */
  public get(column: number | string, row: number | string, spreadsheetNotation = false): T {
    ;[column, row] = this.normalizeColRow(column, row, spreadsheetNotation)
    return this._data[row][column]
  }

  /**
   * Inserts a given value at a given (row, col) position.
   * @param column Column index
   * @param row Row index
   * @param value The value to insert
   * @param spreadsheetNotation Interpret row and col as spreadsheet coordinates, eg. ("A","1")
   */
  public set(column: number | string, row: number | string, value: T, spreadsheetNotation = false): Table<T> {
    ;[column, row] = this.normalizeColRow(column, row, spreadsheetNotation)
    this._data[row][column] = value
    return this
  }

  /**
   * Deletes a column in the table.
   * @param column Column index
   * @param spreadsheetNotation Interpret row and col as spreadsheet coordinates, eg. ("A","1")
   */
  public removeColumn(column: number | string, spreadsheetNotation = false): Table<T> {
    column = this.normalizeCol(column, spreadsheetNotation)
    arrMapMutable(this._data, (row) => {
      row.splice(column, 1)
      return row
    })
    if (this._columnHeaders) {
      this._columnHeaders.splice(column + (this._rowHeaders ? 1 : 0), 1)
    }
    return this
  }

  /**
   * Deletes a row in the table.
   * @param row Row index
   * @param spreadsheetNotation Interpret row and col as spreadsheet coordinates, eg. ("A","1")
   */
  public removeRow(row: number | string, spreadsheetNotation = false): Table<T> {
    row = this.normalizeRow(row, spreadsheetNotation)
    this._data.splice(row, 1)
    if (this._rowHeaders) this._rowHeaders.splice(row, 1)
    return this
  }

  /**
   * Gets the index of a given column header.
   * Even if row headers are defined, this is not considered a column and is ignored in this search.
   */
  public indexOfColumnHeader(header: string): number {
    if (!this._columnHeaders) {
      throw new Error('No column headers are defined for this table.')
    }
    return this._columnHeaders.indexOf(header) - (this._rowHeaders ? 1 : 0)
  }

  /**
   * Gets the index of a given row header.
   */
  public indexOfRowHeader(header: string): number {
    if (!this._rowHeaders) {
      throw new Error('No row headers are defined for this table.')
    }
    return this._rowHeaders.indexOf(header)
  }

  /**
   * Returns the table as a two-dimensional array, including row and column headers..
   */
  public toArray(): Array<Array<T | string>> {
    const result: Array<Array<T | string>> = []
    if (this._columnHeaders) {
      result.push(this.columnHeaders)
    }
    for (let i = 0; i < this.rows; i++) {
      const row: Array<T | string> = this._data[i].slice()
      if (this._rowHeaders) row.unshift(this._rowHeaders[i])
      result.push(row)
    }
    return result
  }

  /**
   * Returns the table as a two-dimensional array, without row and column headers.
   */
  public toArrayDataOnly(): Array<Array<T>> {
    const result: Array<Array<T>> = []
    for (let i = 0; i < this.rows; i++) {
      result.push(this._data[i].slice())
    }
    return result
  }

  /**
   * Returns the table as a CSV string.
   * @param delimiter csv delimiter
   */
  public toCSV(delimiter = ';'): string {
    return arr2dToCSV(this.toArray(), delimiter)
  }

  /**
   * Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.
   */
  public toJSON(): TableSerializedForm<T> {
    return {
      columnHeaders: this._columnHeaders || [],
      rowHeaders: this._rowHeaders || [],
      data: this._data,
    }
  }

  protected validateOptions(options: ITableOptions<T>): void {
    this.assertNoAmbiguousOptions(options, [
      ['extractColumnHeaders', 'columnHeaders'],
      ['extractRowHeaders', 'rowHeaders'],
      ['columns', 'data'],
      ['rows', 'data'],
      ['columns', 'columnHeaders'],
      ['rows', 'rowHeaders'],
    ])
    this.assertNoOptionsRequireMissingOptions(options, [
      ['extractColumnHeaders', 'data'],
      ['extractRowHeaders', 'data'],
    ])
  }

  protected handleOptions(options: ITableOptions<T>): void {
    options = Object.assign({}, options)

    if (options.extractColumnHeaders && options.data) {
      options.data = options.data.slice()
      options.columnHeaders = options.data.splice(0, 1)[0].map((h) => h + '')
    }

    if (options.extractRowHeaders && options.data) {
      options.data = options.data.map((row) => row.slice())
      options.rowHeaders = []
      for (let i = 0; i < options.data.length; i++) {
        options.rowHeaders.push(options.data[i].splice(0, 1)[0] + '')
      }
    }

    if (options.rowHeaders) {
      this._rowHeaders = options.rowHeaders.slice()
      options.rows = options.rowHeaders.length
    } else if (options.rows === undefined) {
      options.rows = 1
    } else {
      this.validateRowMin(options.rows)
    }

    if (options.columnHeaders) {
      this._columnHeaders = options.columnHeaders.slice()
      options.columns = options.columnHeaders.length - (options.rowHeaders ? 1 : 0)
    } else if (options.columns === undefined) {
      options.columns = 1
    } else {
      this.validateColMin(options.columns)
    }

    if (options.data) {
      for (let i = 0; i < options.data.length; i++) {
        this._data.push(options.data[i].slice())
      }
    } else {
      this.buildEmptyTableWithDimensions(options.rows, options.columns)
    }
  }

  protected validateData(): void {
    if (this._columnHeaders) {
      const targetLength = this._columnHeaders.length - (this._rowHeaders ? 1 : 0)
      if (
        !arrEvery(
          this._data.map((row) => row.length),
          (rowLength) => rowLength === targetLength,
        )
      ) {
        throw new Error('Expected all rows to be of same length.')
      }
    }
    if (this._rowHeaders && this._rowHeaders.length !== this._data.length) {
      throw new Error('Expected a row header for each row.')
    }
  }

  protected buildEmptyTableWithDimensions(rows: number, cols: number): void {
    for (let i = 0; i < rows; i++) {
      this._data.push(new Array(cols))
    }
  }

  protected validateRowMin(rows: number): void {
    if (rows < 1) {
      throw new Error('Expected rows to be integer larger than 0 but got: ' + rows)
    }
    if (!Number.isInteger(rows)) {
      throw new Error('Expected rows to be integer an integer.')
    }
  }

  protected validateColMin(cols: number): void {
    if (cols < 1) {
      throw new Error('Expected columns to be integer larger than 0 but got: ' + cols)
    }
    if (!Number.isInteger(cols)) {
      throw new Error('Expected columns to be integer an integer.')
    }
  }

  protected ensureValidRowIndex(row: number | string): number {
    if (typeof row === 'string') {
      if (!this._rowHeaders) {
        throw new Error('Cannot pass row as string when no rowHeaders are defined.')
      }
      row = this._rowHeaders.indexOf(row)
      if (row === -1) {
        throw new Error('Row not found in rowHeaders.')
      }
    } else this.validateRowMin(row + 1)
    return row
  }

  protected ensureValidColIndex(col: number | string): number {
    if (typeof col === 'string') {
      if (!this._columnHeaders) {
        throw new Error('Cannot pass col as string when no columnHeaders are defined.')
      }
      col = this._columnHeaders.indexOf(col) - (this._rowHeaders ? 1 : 0)
      if (col < 0) {
        throw new Error('Col not found in columnHeaders.')
      }
    } else this.validateColMin(col + 1)
    return col
  }

  protected normalizeCol(col: number | string, spreadsheetNotation: boolean): number {
    if (spreadsheetNotation) {
      col = letterToCol(String(col), true)
    }
    return this.ensureValidColIndex(col)
  }

  protected normalizeRow(row: number | string, spreadsheetNotation: boolean): number {
    if (spreadsheetNotation) {
      row = Number(row)
    }
    return this.ensureValidRowIndex(row)
  }

  protected normalizeColRow(col: number | string, row: number | string, spreadsheetNotation: boolean): number[] {
    if (spreadsheetNotation) {
      ;[col, row] = A1ToColRow(String(col) + String(row), true)
    }
    return [this.ensureValidColIndex(col), this.ensureValidRowIndex(row)]
  }
}
