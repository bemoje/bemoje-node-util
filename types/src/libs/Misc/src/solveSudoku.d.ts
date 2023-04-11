declare class Sudoku {
    sudoku: Array<Array<number | undefined>>;
    protected candidates: Array<Array<Set<number>>>;
    protected isGuess: boolean;
    constructor(sudoku: Array<Array<number | undefined>>, candidates?: Array<Array<Set<number>>>, isGuess?: boolean);
    protected itRow(r: number): Generator<number | undefined>;
    protected itRows(): Generator<Generator<number | undefined>>;
    protected itCol(c: number): Generator<number | undefined>;
    protected itCols(): Generator<Generator<number | undefined>>;
    protected itNonant(r: number, c: number): Generator<number | undefined>;
    protected itNonants(): Generator<Generator<number | undefined>>;
    protected itAllSeries(): Generator<Generator<number | undefined>>;
    protected isCompleteSeries(itSeries: Generator<number | undefined>): boolean;
    protected isCompleteSudoku(): boolean;
    protected solveAt(row: number, col: number): boolean;
    solve(): boolean;
    print(): void;
}
export declare function solveSudoku(sudoku: Array<Array<number | undefined>>): Sudoku;
export {};
//# sourceMappingURL=solveSudoku.d.ts.map