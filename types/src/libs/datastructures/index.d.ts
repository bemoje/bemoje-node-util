export { Matrix } from './src/Matrix';
export { Table, ITableOptions, TableSerializedForm } from './src/Table';
export { SortedArray, ISortedArrayOptions } from './src/SortedArray';
export interface IRevivableJSON<SerializedForm> {
    toJSON: () => SerializedForm;
}
/**
 * Interface for data structures.
 */
export interface IDataStructure<T> {
    toArray(): Array<any>;
    isSameInstanceAs(other: T): boolean;
    deepEquals(other: T): boolean;
    getImmutable(): boolean;
    setImmutable(immutable: boolean): T;
    clone(): T;
    forEach(f: (value: any, ...args: []) => void | boolean): T;
    map(f: (value: any, ...args: []) => any): T;
    some(f: (value: any, ...args: []) => boolean): boolean;
    every(f: (value: any, ...args: []) => boolean): boolean;
    [Symbol.iterator](): Generator<any>;
    values(): Generator<any>;
}
/**
 * Interface for 2-dimensional data structures, like matrices and tables
 */
export interface IDataStructure2D<T> extends IDataStructure<T> {
    set(row: number, col: number, value: any): T;
    get(row: number, col: number): any;
    has(row: number, col: number): boolean;
    forEach(f: (value: any, row: number, col: number) => void | boolean): T;
    map(f: (value: any, row: number, col: number) => any): T;
    some(f: (value: any, row: number, col: number) => boolean): boolean;
    every(f: (value: any, row: number, col: number) => boolean): boolean;
}
/**
 * Interface for indexed data structures, like arrays
 */
export interface IIndexedDataStructure<T> extends IDataStructure<T> {
    set(index: number, value: any): T;
    get(index: number): any;
    has(index: number): boolean;
    forEach(f: (value: any, index: number) => void | boolean): T;
    map(f: (value: any, index: number) => any): T;
    some(f: (value: any, index: number) => boolean): boolean;
    every(f: (value: any, index: number) => boolean): boolean;
    keys(): Generator<any>;
}
/**
 * Interface for indexed data structures, like hash maps
 */
export interface IKeyValueDataStructure<T> extends IDataStructure<T> {
    set(key: any, value: any): T;
    get(key: any): any;
    has(key: any): boolean;
    forEach(f: (value: any, key: any) => void | boolean): T;
    map(f: (value: any, key: any) => any): T;
    some(f: (value: any, key: any) => boolean): boolean;
    every(f: (value: any, key: any) => boolean): boolean;
    keys(): Generator<any>;
    entries(): Generator<[key: any, value: any]>;
}
//# sourceMappingURL=index.d.ts.map