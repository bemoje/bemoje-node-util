import { IRevivable } from '../../mixins/src/interfaces';
import { Base } from '../../mixins/src/Base';
export type SimpleTableSerializedForm<T> = {
    headers: Array<string>;
    data: Array<Array<T>>;
};
/**
 * Two-dimensional table class supporting column and row headers.
 */
export declare class SimpleTable<T> extends Base implements IRevivable<SimpleTableSerializedForm<T>> {
    protected _colIndexMap: Record<string, number>;
    protected _headers: Array<string>;
    protected _data: Array<Array<T>>;
    /**
     * Revive a stringified Table object.
     * @param json a stringified Table object.
     */
    static fromJSON<T>(json: string): SimpleTable<T>;
    constructor(data: T[][], headers?: string[]);
    protected assertRowValidLength(row: T[]): void;
    /**
     * Gets the number of cols in the table, not including headers.
     */
    get numColumns(): number;
    /**
     * Gets the number of rows in the table, not including headers.
     */
    get numRows(): number;
    /**
     * Gets the column headers.
     */
    get headers(): Array<string>;
    /**
     * Returns the table as a two-dimensional array, without column headers.
     */
    get data(): T[][];
    /**
     * Returns a value at a given (row, col) position.
     * @param column Column index or name
     * @param row Row index
     */
    get(column: number | string, row: number): T;
    /**
     * Inserts a given value at a given (row, col) position.
     * @param column Column index
     * @param row Row index
     * @param value The value to insert
     */
    set(column: number | string, row: number, value: T): SimpleTable<T>;
    /**
     * Returns the table as a two-dimensional array, including row and column headers..
     */
    toArray(): (T | string)[][];
    /**
     * Override of the native toJSON method. When parsing the returned json string, it can be revived as a Table object when using the static Table.fromJSON method.
     */
    toJSON(): SimpleTableSerializedForm<T>;
}
//# sourceMappingURL=SimpleTable.d.ts.map