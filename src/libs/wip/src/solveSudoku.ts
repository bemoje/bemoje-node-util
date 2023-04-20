class Sudoku {
  public sudoku: Array<Array<number | undefined>>
  protected candidates: Array<Array<Set<number>>>
  protected isGuess: boolean

  constructor(sudoku: Array<Array<number | undefined>>, candidates?: Array<Array<Set<number>>>, isGuess = false) {
    if (!isGuess) {
      if (sudoku.length !== 9) throw Error('Expected sudoku to be a 9x9 array of integers between 1 and 9.')
      for (const row of sudoku) {
        if (row.length !== 9) throw Error('Expected sudoku to be a 9x9 array of integers between 1 and 9.')
        for (const cell of row) {
          if (cell !== undefined && (!Number.isInteger(cell) || cell < 1 || cell > 9)) {
            throw Error('Expected sudoku to be a 9x9 array of integers between 1 and 9.')
          }
        }
      }
    }
    this.sudoku = []
    for (let i = 0; i <= 8; i++) {
      this.sudoku[i] = sudoku[i].slice()
    }
    if (candidates) {
      this.candidates = candidates.map((row) => row.map((set) => new Set(set)))
    } else {
      this.candidates = []
      for (let r = 0; r <= 8; r++) {
        this.candidates[r] = []
        for (let c = 0; c <= 8; c++) {
          if (this.sudoku[r][c] === undefined) {
            this.candidates[r][c] = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
          } else {
            this.candidates[r][c] = new Set([])
          }
        }
      }
    }
    this.isGuess = isGuess
  }

  protected *itRow(r: number): Generator<number | undefined> {
    for (let c = 0; c <= 8; c++) {
      yield this.sudoku[r][c]
    }
  }

  protected *itRows(): Generator<Generator<number | undefined>> {
    for (let r = 0; r <= 8; r++) {
      yield this.itRow(r)
    }
  }

  protected *itCol(c: number): Generator<number | undefined> {
    for (let r = 0; r <= 8; r++) {
      yield this.sudoku[r][c]
    }
  }

  protected *itCols(): Generator<Generator<number | undefined>> {
    for (let c = 0; c <= 8; c++) {
      yield this.itCol(c)
    }
  }

  protected *itNonant(r: number, c: number): Generator<number | undefined> {
    const row = r < 3 ? 0 : r < 6 ? 3 : 6
    const col = c < 3 ? 0 : c < 6 ? 3 : 6
    for (let r = row; r < row + 3; r++) {
      for (let c = col; c < col + 3; c++) {
        yield this.sudoku[r][c]
      }
    }
  }

  protected *itNonants(): Generator<Generator<number | undefined>> {
    yield this.itNonant(0, 0)
    yield this.itNonant(0, 3)
    yield this.itNonant(0, 6)
    yield this.itNonant(3, 0)
    yield this.itNonant(3, 3)
    yield this.itNonant(3, 6)
    yield this.itNonant(6, 0)
    yield this.itNonant(6, 3)
    yield this.itNonant(6, 6)
  }

  protected *itAllSeries(): Generator<Generator<number | undefined>> {
    yield* this.itRows()
    yield* this.itCols()
    yield* this.itNonants()
  }

  protected isCompleteSeries(itSeries: Generator<number | undefined>): boolean {
    const seen = new Set()
    for (const v of itSeries) {
      if (v === undefined) return false
      if (!seen.has(v)) {
        seen.add(v)
      } else {
        return false
      }
    }
    return true
  }

  protected isCompleteSudoku(): boolean {
    for (const itSeries of this.itAllSeries()) {
      if (!this.isCompleteSeries(itSeries)) {
        return false
      }
    }
    return true
  }

  protected solveAt(row: number, col: number): boolean {
    if (this.sudoku[row][col] !== undefined) return false
    const candidates = this.candidates[row][col]
    for (let i = 0; i <= 8; i++) {
      const v1 = this.sudoku[row][i]
      if (v1 !== undefined) {
        candidates.delete(v1)
      }
      const v2 = this.sudoku[i][col]
      if (v2 !== undefined) {
        candidates.delete(v2)
      }
    }
    for (const v of this.itNonant(row, col)) {
      if (v !== undefined) {
        candidates.delete(v)
      }
    }
    if (candidates.size === 1) {
      this.sudoku[row][col] = candidates.values().next().value
      const v = this.sudoku[row][col]
      if (v !== undefined) {
        candidates.delete(v)
      }
      return true
    }
    return false
  }

  public solve(): boolean {
    let foundAnswer = false
    const tryAll = () => {
      for (let r = 0; r <= 8; r++) {
        for (let c = 0; c <= 8; c++) {
          if (this.solveAt(r, c)) {
            foundAnswer = true
          }
        }
      }
    }
    tryAll()
    tryAll()
    if (foundAnswer) {
      return this.solve()
    } else if (!this.isCompleteSudoku()) {
      for (let maxCandidates = 2; maxCandidates <= 9; maxCandidates++) {
        for (let r = 0; r <= 8; r++) {
          for (let c = 0; c <= 8; c++) {
            if (this.candidates[r][c].size === maxCandidates) {
              const guess = this.candidates[r][c].values().next().value
              this.candidates[r][c].delete(guess)
              const newSudoku = new Sudoku(this.sudoku, this.candidates, true)
              newSudoku.sudoku[r][c] = guess
              newSudoku.candidates[r][c] = new Set()
              const successful = newSudoku.solve()
              if (successful) {
                this.sudoku = newSudoku.sudoku
                this.candidates = newSudoku.candidates
              }
              return this.solve()
            }
          }
        }
      }
      if (!this.isGuess) {
        this.print()
        throw Error('Sudoku is invalid and cannot be solved.')
      }
      return false
    } else {
      return true
    }
  }

  public print(): void {
    console.log('-------------------')
    for (let r = 0; r <= 8; r++) {
      console.log('|' + this.sudoku[r].map((v) => (v === undefined ? ' ' : v)).join('|') + '|')
    }
    console.log('-------------------')
  }
}

export function solveSudoku(sudoku: Array<Array<number | undefined>>): Sudoku {
  const instance = new Sudoku(sudoku)
  instance.solve()
  return instance
}
