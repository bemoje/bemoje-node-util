export interface IOptions {
    options: Record<string, any>;
}
export interface IDataStructure<T> {
    forEach(f: (value: any, i: number, ...args: []) => void | boolean): T;
    map(f: (value: any, i: number, ...args: []) => any): T;
    toArray(): Array<any>;
    isSameInstanceAs(other: T): boolean;
    deepEquals(other: T): boolean;
}
export interface IDataStructure2D<T> extends IDataStructure<T> {
    set(row: number, col: number, value: number): T;
    get(row: number, col: number): number;
    has(row: number, col: number): boolean;
}
//# sourceMappingURL=class.d.ts.map