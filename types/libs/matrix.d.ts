import { IOptions, IDataStructure2D } from './class';
export declare class MatrixOptions {
    immutable: boolean;
}
export declare class Matrix implements IOptions, IDataStructure2D<Matrix> {
    protected matrix: Array<Array<number>>;
    options: MatrixOptions;
    static fromArray(array: Array<Array<number>>): Matrix;
    static fromIterable(iterable: Iterable<Iterable<number>>): Matrix;
    static identity(size: number): Matrix;
    constructor(rows: number, cols: number);
    get rows(): number;
    get cols(): number;
    isSameInstanceAs(other: Matrix): boolean;
    isImmutable(): boolean;
    setImmutable(immutable: boolean): Matrix;
    deepEquals(other: Matrix | Array<Array<number>>): boolean;
    set(row: number, col: number, value: number): Matrix;
    get(row: number, col: number): number;
    has(row: number, col: number): boolean;
    toArray(): Array<Array<number>>;
    clone(): Matrix;
    forEach(f: (value: number, row: number, col: number) => void | boolean): Matrix;
    forEachInRow(row: number, f: (value: number, col: number) => void | boolean): Matrix;
    forEachInCol(col: number, f: (value: number, row: number) => void | boolean): Matrix;
    forEachInDiagonal(f: (value: number, row: number, col: number) => void | boolean): Matrix;
    map(f: (value: number, row: number, col: number) => number): Matrix;
    [Symbol.iterator](): Generator<number>;
    mapRow(row: number, f: (value: number, col: number) => number): Matrix;
    mapCol(col: number, f: (value: number, row: number) => number): Matrix;
    appendRow(row?: Array<number>): Matrix;
    appendCol(col?: Array<number>): Matrix;
    addBy(n: number): Matrix;
    subtractBy(n: number): Matrix;
    multiplyBy(n: number): Matrix;
    divideBy(n: number): Matrix;
    addRowBy(row: number, n: number): Matrix;
    subtractRowBy(row: number, n: number): Matrix;
    multiplyRowBy(row: number, n: number): Matrix;
    divideRowBy(row: number, n: number): Matrix;
    addColBy(col: number, n: number): Matrix;
    subtractColBy(col: number, n: number): Matrix;
    multiplyColBy(col: number, n: number): Matrix;
    divideColBy(col: number, n: number): Matrix;
    swapRows(row1: number, row2: number): Matrix;
    swapCols(col1: number, col2: number): Matrix;
    some(f: (value: number, row: number, col: number) => boolean): boolean;
    every(f: (value: number, row: number, col: number) => boolean): boolean;
    hasDimensions(rows: number, cols: number): boolean;
    isSquareMatrix(): boolean;
    /**
     * Returns whether the matrix is a square matrix that has identical values on its diagonal.
     */
    isScalarMatrix(): boolean;
    isZeroMatrix(): boolean;
}
//# sourceMappingURL=matrix.d.ts.map