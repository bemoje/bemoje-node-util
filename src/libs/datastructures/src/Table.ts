import { arr2dToCSV, arrEvery, arrMapMutable } from '../../array';
import { A1ToColRow } from '../../spreadsheet';
import { letterToCol } from '../../spreadsheet/src/letterToCol';

/**
 * Constructor options for class: Table
 */
export type TableOptions<T> = {
  rows?: number;
  cols?: number;
  colHeaders?: Array<string>;
  rowHeaders?: Array<string>;
  data?: Array<Array<T>>;
  extractColHeadersFromData?: boolean;
  extractRowHeadersFromData?: boolean;
};

/**
 * Two-dimensional table class supporting column and row headers.
 */
export class Table<T> {
  private _colHeaders?: Array<string>;
  private _rowHeaders?: Array<string>;
  private data: Array<Array<T>> = [];

  constructor(options: TableOptions<T> = {}) {
    this.handleOptions(options);
    this.validateTableData();
  }

  private handleOptions(options: TableOptions<T>): void {
    if (options.extractColHeadersFromData && options.data && !options.colHeaders) {
      options.data = options.data.slice();
      options.colHeaders = options.data.splice(0, 1)[0].map((h) => h + '');
    }

    if (options.extractRowHeadersFromData && options.data && !options.rowHeaders) {
      options.data = options.data.map((row) => row.slice());
      options.rowHeaders = [];
      for (let i = 0; i < options.data.length; i++) {
        options.rowHeaders.push(options.data[i].splice(0, 1)[0] + '');
      }
    }

    if (options.rowHeaders) {
      this._rowHeaders = options.rowHeaders.slice();
      options.rows = options.rowHeaders.length;
    } else if (options.rows === undefined) {
      options.rows = 1;
    } else {
      this.validateRowMin(options.rows);
    }

    if (options.colHeaders) {
      this._colHeaders = options.colHeaders.slice();
      options.cols = options.colHeaders.length - (options.rowHeaders ? 1 : 0);
    } else if (options.cols === undefined) {
      options.cols = 1;
    } else {
      this.validateColMin(options.cols);
    }

    if (options.data) {
      for (let i = 0; i < options.data.length; i++) {
        this.data.push(options.data[i].slice());
      }
    } else {
      this.buildEmptyTableWithDimensions(options.rows, options.cols);
    }
  }

  private validateTableData(): void {
    if (this._colHeaders) {
      const targetLength = this._colHeaders.length - (this._rowHeaders ? 1 : 0);
      if (
        !arrEvery(
          this.data.map((row) => row.length),
          (rowLength) => rowLength === targetLength,
        )
      ) {
        throw new Error('Expected all rows to be of same length.');
      }
    }

    if (this._rowHeaders && this._rowHeaders.length !== this.data.length) {
      throw new Error('Expected a row header for each row.');
    }
  }

  private buildEmptyTableWithDimensions(rows: number, cols: number): void {
    for (let i = 0; i < rows; i++) {
      this.data.push(new Array(cols));
    }
  }

  private validateRowMin(rows: number): void {
    if (rows < 1) {
      throw new Error('Expected rows to be integer larger than 0 but got: ' + rows);
    }
    if (!Number.isInteger(rows)) {
      throw new Error('Expected rows to be integer and integer.');
    }
  }

  private validateColMin(cols: number): void {
    if (cols < 1) {
      throw new Error('Expected cols to be integer larger than 0 but got: ' + cols);
    }
    if (!Number.isInteger(cols)) {
      throw new Error('Expected cols to be integer and integer.');
    }
  }

  private ensureValidRowIndex(row: number | string): number {
    if (typeof row === 'string') {
      if (!this._rowHeaders) {
        throw new Error('Cannot pass row as string when no rowHeaders are defined.');
      }
      row = this._rowHeaders.indexOf(row);
      if (row === -1) {
        throw new Error('Row not found in rowHeaders.');
      }
    } else this.validateRowMin(row + 1);
    return row;
  }

  private ensureValidColIndex(col: number | string): number {
    if (typeof col === 'string') {
      if (!this._colHeaders) {
        throw new Error('Cannot pass col as string when no colHeaders are defined.');
      }
      col = this._colHeaders.indexOf(col) - (this._rowHeaders ? 1 : 0);
      if (col < 0) {
        throw new Error('Col not found in colHeaders.');
      }
    } else this.validateColMin(col + 1);
    return col;
  }

  private normalizeCol(col: number | string, spreadsheetNotation: boolean): number {
    if (spreadsheetNotation) {
      col = letterToCol(String(col), true);
    }
    return this.ensureValidColIndex(col);
  }

  private normalizeRow(row: number | string, spreadsheetNotation: boolean): number {
    if (spreadsheetNotation) {
      row = Number(row);
    }
    return this.ensureValidRowIndex(row);
  }

  private normalizeColRow(col: number | string, row: number | string, spreadsheetNotation: boolean): number[] {
    if (spreadsheetNotation) {
      [col, row] = A1ToColRow(String(col) + String(row), true);
    }
    return [this.ensureValidColIndex(col), this.ensureValidRowIndex(row)];
  }

  /**
   * Gets the number of rows in the table, not including headers.
   */
  public get rows(): number {
    return this.data.length;
  }

  /**
   * Gets the number of cols in the table, not including headers.
   */
  public get cols(): number {
    return this.data[0].length;
  }

  /**
   * Gets the row headers.
   */
  public get rowHeaders(): Array<string> {
    if (!this._rowHeaders) {
      throw new Error('No row headers are defined for this table.');
    }
    return this._rowHeaders ? this._rowHeaders.slice() : [];
  }

  /**
   * Gets the column headers.
   */
  public get colHeaders(): Array<string> {
    if (!this._colHeaders) {
      throw new Error('No column headers are defined for this table.');
    }
    return this._colHeaders ? this._colHeaders.slice() : [];
  }

  /**
   * Returns a value at the given (row, col) position.
   * @param col Column index
   * @param row Row index
   * @param spreadsheetNotation enable that row and col should be interpreted as spreadsheet coordinates, eg. ("A","22")
   */
  public get(col: number | string, row: number | string, spreadsheetNotation = false): T {
    [col, row] = this.normalizeColRow(col, row, spreadsheetNotation);
    return this.data[row][col];
  }

  /**
   * Inserts a given value at the given (row, col) position.
   * @param col Column index
   * @param row Row index
   * @param value The value to insert
   * @param spreadsheetNotation enable that row and col should be interpreted as spreadsheet coordinates, eg. ("A","22")
   * @returns self (chainable)
   */
  public set(col: number | string, row: number | string, value: T, spreadsheetNotation = false): Table<T> {
    [col, row] = this.normalizeColRow(col, row, spreadsheetNotation);
    this.data[row][col] = value;
    return this;
  }

  /**
   * Deletes a column in the table.
   * @param col Column index
   * @param spreadsheetNotation enable that row and col should be interpreted as spreadsheet coordinates, eg. ("A","22")
   */
  public deleteColumn(col: number | string, spreadsheetNotation = false): Table<T> {
    col = this.normalizeCol(col, spreadsheetNotation);
    arrMapMutable(this.data, (row) => {
      row.splice(col, 1);
      return row;
    });
    if (this._colHeaders) {
      this._colHeaders.splice(col + (this._rowHeaders ? 1 : 0), 1);
    }
    return this;
  }

  /**
   * Deletes a row in the table.
   * @param row Row index
   * @param spreadsheetNotation enable that row and col should be interpreted as spreadsheet coordinates, eg. ("A","22")
   */
  public deleteRow(row: number | string, spreadsheetNotation = false): Table<T> {
    row = this.normalizeRow(row, spreadsheetNotation);
    this.data.splice(row, 1);
    if (this._rowHeaders) this._rowHeaders.splice(row, 1);
    return this;
  }

  /**
   * Gets the index of a given column header.
   * Even if row headers are defined, this is not considered a column and is ignored in this search.
   */
  public indexOfColHeader(header: string): number {
    if (!this._colHeaders) {
      throw new Error('No column headers are defined for this table.');
    }
    return this._colHeaders.indexOf(header) - (this._rowHeaders ? 1 : 0);
  }

  /**
   * Gets the index of a given row header.
   */
  public indexOfRowHeader(header: string): number {
    if (!this._rowHeaders) {
      throw new Error('No row headers are defined for this table.');
    }
    return this._rowHeaders.indexOf(header);
  }

  /**
   * Returns the table as a two-dimensional array, including row and column headers..
   */
  public toArray(): Array<Array<T | string>> {
    const result: Array<Array<T | string>> = [];
    if (this._colHeaders) {
      result.push(this.colHeaders);
    }
    for (let i = 0; i < this.rows; i++) {
      const row: Array<T | string> = this.data[i].slice();
      if (this._rowHeaders) row.unshift(this._rowHeaders[i]);
      result.push(row);
    }
    return result;
  }

  /**
   * Returns the table as a two-dimensional array, without row and column headers.
   */
  public toArrayDataOnly(): Array<Array<T>> {
    const result: Array<Array<T>> = [];
    for (let i = 0; i < this.rows; i++) {
      result.push(this.data[i].slice());
    }
    return result;
  }

  /**
   * Returns the table as a CSV string.
   * @param delimiter csv delimiter
   */
  public toCSV(delimiter = ';'): string {
    return arr2dToCSV(this.toArray(), delimiter);
  }

  /**
   * Creates a Table instance from CSV string data.
   * @param csv CSV data string
   * @param delimiter csv delimiter
   * @param options TableOptions constructor options.
   */
  public static fromCSV<T>(csv: string, delimiter = ';', options: TableOptions<T | string> = {}): Table<T | string> {
    options.data = csv
      .split('\n')
      .filter((line) => line.length)
      .map((line) => line.trim().split(delimiter));
    return new Table(options);
  }

  /**
   * Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.
   */
  public toJSON(): TableOptions<T> {
    return {
      colHeaders: this._colHeaders,
      rowHeaders: this._rowHeaders,
      data: this.data,
    };
  }

  /**
   * Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.
   */
  public serialize(): string {
    return JSON.stringify(this.toJSON());
  }

  /**
   * Revive a stringified Table object.
   * @param json a stringified Table object.
   */
  public static fromJSON<T>(json: string): Table<T> {
    return new Table(JSON.parse(json));
  }
}
