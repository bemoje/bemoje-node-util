import { IRevivable } from '../../../';
import { Base } from './Base';
/**
 * Constructor options for the Table class.
 */
export interface ITableOptions<T> {
    /**
     * 2D array to build table from.
     * All rows must be the same length.
     * When using this option, the 'columns' and 'rows' options are not allowed.
     */
    data?: Array<Array<T>>;
    /**
     * Intepret the first row of passed data as column headers/names (see TableOptions.data property).
     * When performing lookups in the table from indices or coordinates, headers are ignored, ie. not counted.
     * If the 'data' option is not used, this option is not allowed.
     * If the 'columnHeaders' option is used, this option is not allowed.
     */
    extractColumnHeaders?: boolean;
    /**
     * Intepret the first element of every row of passed data as row headers/names (see TableOptions.data property).
     * When performing lookups in the table from indices or coordinates, headers are ignored, ie. not counted.
     * If the 'data' option is not used, this option is not allowed.
     * If the 'rowHeaders' option is used, this option is not allowed.
     */
    extractRowHeaders?: boolean;
    /**
     * Define column headers/names.
     * Must be of same length as entered in the 'columns' option.
     * When performing lookups in the table from indices or coordinates, headers are ignored, ie. not counted.
     * When using row headers simultaneously, this array will need to be of length one higher as the first element is intepreted as the column header for the row headers column.
     */
    columnHeaders?: Array<string>;
    /**
     * Define column headers/names.
     * Must be of same length as entered in the 'columns' option.
     * When performing lookups in the table from indices or coordinates, headers are ignored, ie. not counted.
     */
    rowHeaders?: Array<string>;
    /**
     * Number of columns in the table.
     * This option is not allowed when the 'data' or 'columnHeaders' properties are being used.
     * TypeScript: Type safety consideration: Please note that when initializing an empty Table, it is full of 'undefined' values even if the table is specifically typed to not allow 'undefined'. TypeScript's static type-checking cannot see this.
     */
    columns?: number;
    /**
     * Number of rows in the table.
     * This option is not allowed when the 'data' or 'rowHeaders' properties are being used.
     * TypeScript: Type safety consideration: Please note that when initializing an empty Table, it is full of 'undefined' values even if the table is specifically typed to not allow 'undefined'. TypeScript's static type-checking cannot see this.
     */
    rows?: number;
}
export type TableSerializedForm<T> = {
    columnHeaders: Array<string>;
    rowHeaders: Array<string>;
    data: Array<Array<T>>;
};
/**
 * Two-dimensional table class supporting column and row headers.
 */
export declare class Table<T> extends Base implements IRevivable<TableSerializedForm<T>> {
    protected _columnHeaders?: Array<string>;
    protected _rowHeaders?: Array<string>;
    protected _data: Array<Array<T>>;
    /**
     * Creates a Table instance from CSV string data.
     * @param csv CSV data string
     * @param delimiter csv delimiter
     * @param options TableOptions constructor options.
     */
    static fromCSV<T>(csv: string, delimiter?: string, options?: ITableOptions<T | string>): Table<T | string>;
    /**
     * Revive a stringified Table object.
     * @param json a stringified Table object.
     */
    static fromJSON<T>(json: string): Table<T>;
    constructor(options?: ITableOptions<T>);
    /**
     * Gets the number of cols in the table, not including headers.
     */
    get columns(): number;
    /**
     * Gets the number of rows in the table, not including headers.
     */
    get rows(): number;
    /**
     * Gets the column headers.
     */
    get columnHeaders(): Array<string>;
    /**
     * Gets the row headers.
     */
    get rowHeaders(): Array<string>;
    /**
     * Returns a value at a given (row, col) position.
     * @param column Column index
     * @param row Row index
     * @param spreadsheetNotation Interpret row and col as spreadsheet coordinates, eg. ("A","1")
     */
    get(column: number | string, row: number | string, spreadsheetNotation?: boolean): T;
    /**
     * Inserts a given value at a given (row, col) position.
     * @param column Column index
     * @param row Row index
     * @param value The value to insert
     * @param spreadsheetNotation Interpret row and col as spreadsheet coordinates, eg. ("A","1")
     */
    set(column: number | string, row: number | string, value: T, spreadsheetNotation?: boolean): Table<T>;
    /**
     * Deletes a column in the table.
     * @param column Column index
     * @param spreadsheetNotation Interpret row and col as spreadsheet coordinates, eg. ("A","1")
     */
    removeColumn(column: number | string, spreadsheetNotation?: boolean): Table<T>;
    /**
     * Deletes a row in the table.
     * @param row Row index
     * @param spreadsheetNotation Interpret row and col as spreadsheet coordinates, eg. ("A","1")
     */
    removeRow(row: number | string, spreadsheetNotation?: boolean): Table<T>;
    /**
     * Gets the index of a given column header.
     * Even if row headers are defined, this is not considered a column and is ignored in this search.
     */
    indexOfColumnHeader(header: string): number;
    /**
     * Gets the index of a given row header.
     */
    indexOfRowHeader(header: string): number;
    /**
     * Returns the table as a two-dimensional array, including row and column headers..
     */
    toArray(): Array<Array<T | string>>;
    /**
     * Returns the table as a two-dimensional array, without row and column headers.
     */
    toArrayDataOnly(): Array<Array<T>>;
    /**
     * Returns the table as a CSV string.
     * @param delimiter csv delimiter
     */
    toCSV(delimiter?: string): string;
    /**
     * Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.
     */
    toJSON(): TableSerializedForm<T>;
    protected validateOptions(options: ITableOptions<T>): void;
    protected handleOptions(options: ITableOptions<T>): void;
    protected validateData(): void;
    protected buildEmptyTableWithDimensions(rows: number, cols: number): void;
    protected validateRowMin(rows: number): void;
    protected validateColMin(cols: number): void;
    protected ensureValidRowIndex(row: number | string): number;
    protected ensureValidColIndex(col: number | string): number;
    protected normalizeCol(col: number | string, spreadsheetNotation: boolean): number;
    protected normalizeRow(row: number | string, spreadsheetNotation: boolean): number;
    protected normalizeColRow(col: number | string, row: number | string, spreadsheetNotation: boolean): number[];
}
//# sourceMappingURL=Table.d.ts.map