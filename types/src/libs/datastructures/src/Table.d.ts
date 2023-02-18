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
export declare class Table<T> {
    private _colHeaders?;
    private _rowHeaders?;
    private data;
    constructor(options?: TableOptions<T>);
    private handleOptions;
    private validateTableData;
    private buildEmptyTableWithDimensions;
    private validateRowMin;
    private validateColMin;
    private ensureValidRowIndex;
    private ensureValidColIndex;
    /**
     * Gets the number of rows in the table, not including headers.
     */
    get rows(): number;
    /**
     * Gets the number of cols in the table, not including headers.
     */
    get cols(): number;
    /**
     * Gets the row headers.
     */
    get rowHeaders(): Array<string>;
    /**
     * Gets the column headers.
     */
    get colHeaders(): Array<string>;
    /**
     * Returns a value at the given (row, col) position.
     * @param col Column index
     * @param row Row index
     * @param spreadsheetNotation enable that row and col should be interpreted as spreadsheet coordinates, eg. ("A","22")
     */
    get(col: number | string, row: number | string, spreadsheetNotation?: boolean): T;
    /**
     * Inserts a given value at the given (row, col) position.
     * @param col Column index
     * @param row Row index
     * @param value The value to insert
     * @param spreadsheetNotation enable that row and col should be interpreted as spreadsheet coordinates, eg. ("A","22")
     * @returns self (chainable)
     */
    set(col: number | string, row: number | string, value: T, spreadsheetNotation?: boolean): Table<T>;
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
     * Creates a Table instance from CSV string data.
     * @param csv CSV data string
     * @param delimiter csv delimiter
     * @param options TableOptions constructor options.
     */
    static fromCSV<T>(csv: string, delimiter?: string, options?: TableOptions<T | string>): Table<T | string>;
    /**
     * Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.
     */
    toJSON(): TableOptions<T>;
    /**
     * Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.
     */
    serialize(): string;
    /**
     * Revive a stringified Table object.
     * @param json a stringified Table object.
     */
    static fromJSON<T>(json: string): Table<T>;
}
//# sourceMappingURL=Table.d.ts.map