import { MixinBase } from '../mixins/MixinBase';
import { ISimpleTableSerializedForm } from './types/ISimpleTableSerializedForm';
/**
 * Two-dimensional table class supporting column and row headers.
 * @template T The type of the data in the table.
 */
export declare class SimpleTable<T> extends MixinBase {
    #private;
    /**
     * Revive a stringified Table object.
     * @param json a stringified Table object.
     */
    static fromJSON<T>(json: string): SimpleTable<T>;
    /**
     * Creates a new SimpleTable.
     * @param data The data of the table.
     * @param headers The headers of the table.
     */
    constructor(data: T[][], headers?: string[]);
    /**
     * Checks if a row has the correct length.
     * @param row The row to check.
     */
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
    get headers(): string[];
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
    toJSON(): ISimpleTableSerializedForm<T>;
}
//# sourceMappingURL=SimpleTable.d.ts.map