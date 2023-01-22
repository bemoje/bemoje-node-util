import * as util from './';

describe('string', () => {
  let str: string;
  beforeEach(() => {
    str = 'input';
  });

  it('strWrapIn', () => {
    expect(util.strWrapIn(str, '#')).toBe('#input#');
  });

  it('strWrapBetween', () => {
    expect(util.strWrapBetween(str, '#', '&')).toBe('#input&');
  });

  it('strWrapInBrackets', () => {
    expect(util.strWrapInBrackets(str)).toBe('[input]');
  });

  it('strWrapInBraces', () => {
    expect(util.strWrapInBraces(str)).toBe('{input}');
  });

  it('strWrapInParenthesis', () => {
    expect(util.strWrapInParenthesis(str)).toBe('(input)');
  });
});

describe('array', () => {
  let arrInt1D: Array<number>;
  beforeEach(() => {
    arrInt1D = [1, 2, 3, 4, 5];
  });

  it('arrMapMutable', () => {
    expect(
      util.arrMapMutable(arrInt1D, (value: number) => {
        return value + 1;
      }),
    ).toStrictEqual([2, 3, 4, 5, 6]);
  });
});

describe('class', () => {
  it('IOptions', () => {
    class Options {
      option1 = 1;
      option2 = 2;
    }
    class ImplementsOptions implements util.IOptions {
      options = new Options();
    }
    const o = new ImplementsOptions();
    expect(o.options.option1).toBe(1);
    expect(o.options.option2).toBe(2);
    o.options.option2 = 3;
    expect(o.options.option2).toBe(3);
  });
});

describe('Matrix', () => {
  it('static fromArray', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    expect(m.deepEquals(arr)).toBe(true);
  });

  it('static fromIterable', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromIterable(arr);
    expect(m.deepEquals(arr)).toBe(true);
  });

  it('static identity', () => {
    expect(util.Matrix.identity(1).deepEquals([[1]])).toBe(true);
    expect(
      util.Matrix.identity(2).deepEquals([
        [1, 0],
        [0, 1],
      ]),
    ).toBe(true);
    expect(
      util.Matrix.identity(3).deepEquals([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
    ).toBe(true);
  });

  it('constructor', () => {
    expect(() => {
      new util.Matrix(0, 1);
    }).toThrowError('Expected rows to be greater than zero.');

    expect(() => {
      new util.Matrix(1, 0);
    }).toThrowError('Expected cols to be greater than zero.');

    expect(new util.Matrix(3, 2).toArray()).toStrictEqual([
      [0, 0],
      [0, 0],
      [0, 0],
    ]);
  });

  it('get rows', () => {
    expect(new util.Matrix(3, 2).rows).toBe(3);
  });

  it('get cols', () => {
    expect(new util.Matrix(3, 2).cols).toBe(2);
  });

  it('isSameInstanceAs', () => {
    const m1 = new util.Matrix(1, 1);
    const m2 = new util.Matrix(1, 1);
    expect(m1.isSameInstanceAs(m2)).toBe(false);
    expect(m1.isSameInstanceAs(m1)).toBe(true);
  });

  it('isImmutable', () => {
    const m = new util.Matrix(1, 1);
    expect(m.isImmutable()).toBe(false);
  });

  it('setImmutable', () => {
    const m = new util.Matrix(1, 1);

    m.setImmutable(true);
    expect(m.isImmutable()).toBe(true);
    expect(m.set(0, 0, 0).isSameInstanceAs(m)).toBe(false);
    expect(m.map((n: number) => n).isSameInstanceAs(m)).toBe(false);
    expect(m.mapRow(0, (n: number) => n).isSameInstanceAs(m)).toBe(false);
    expect(m.mapCol(0, (n: number) => n).isSameInstanceAs(m)).toBe(false);
    expect(m.appendRow().isSameInstanceAs(m)).toBe(false);
    expect(m.appendCol().isSameInstanceAs(m)).toBe(false);
    expect(m.addBy(1).isSameInstanceAs(m)).toBe(false);
    expect(m.subtractBy(1).isSameInstanceAs(m)).toBe(false);
    expect(m.multiplyBy(1).isSameInstanceAs(m)).toBe(false);
    expect(m.divideBy(1).isSameInstanceAs(m)).toBe(false);
    expect(m.addRowBy(0, 1).isSameInstanceAs(m)).toBe(false);
    expect(m.subtractRowBy(0, 1).isSameInstanceAs(m)).toBe(false);
    expect(m.multiplyRowBy(0, 1).isSameInstanceAs(m)).toBe(false);
    expect(m.divideRowBy(0, 1).isSameInstanceAs(m)).toBe(false);
    expect(m.addColBy(0, 1).isSameInstanceAs(m)).toBe(false);
    expect(m.subtractColBy(0, 1).isSameInstanceAs(m)).toBe(false);
    expect(m.multiplyColBy(0, 1).isSameInstanceAs(m)).toBe(false);
    expect(m.divideColBy(0, 1).isSameInstanceAs(m)).toBe(false);
    expect(m.swapRows(0, 0).isSameInstanceAs(m)).toBe(false);
    expect(m.swapCols(0, 0).isSameInstanceAs(m)).toBe(false);

    m.setImmutable(false);
    expect(m.isImmutable()).toBe(false);
    expect(m.set(0, 0, 0).isSameInstanceAs(m)).toBe(true);
    expect(m.map((n: number) => n).isSameInstanceAs(m)).toBe(true);
    expect(m.mapRow(0, (n: number) => n).isSameInstanceAs(m)).toBe(true);
    expect(m.mapCol(0, (n: number) => n).isSameInstanceAs(m)).toBe(true);
    expect(m.appendRow().isSameInstanceAs(m)).toBe(true);
    expect(m.appendCol().isSameInstanceAs(m)).toBe(true);
    expect(m.addBy(1).isSameInstanceAs(m)).toBe(true);
    expect(m.subtractBy(1).isSameInstanceAs(m)).toBe(true);
    expect(m.multiplyBy(1).isSameInstanceAs(m)).toBe(true);
    expect(m.divideBy(1).isSameInstanceAs(m)).toBe(true);
    expect(m.addRowBy(0, 1).isSameInstanceAs(m)).toBe(true);
    expect(m.subtractRowBy(0, 1).isSameInstanceAs(m)).toBe(true);
    expect(m.multiplyRowBy(0, 1).isSameInstanceAs(m)).toBe(true);
    expect(m.divideRowBy(0, 1).isSameInstanceAs(m)).toBe(true);
    expect(m.addColBy(0, 1).isSameInstanceAs(m)).toBe(true);
    expect(m.subtractColBy(0, 1).isSameInstanceAs(m)).toBe(true);
    expect(m.multiplyColBy(0, 1).isSameInstanceAs(m)).toBe(true);
    expect(m.divideColBy(0, 1).isSameInstanceAs(m)).toBe(true);
    expect(m.swapRows(0, 0).isSameInstanceAs(m)).toBe(true);
    expect(m.swapCols(0, 0).isSameInstanceAs(m)).toBe(true);
  });

  it('deepEquals', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m1 = util.Matrix.fromArray(arr);
    const m2 = util.Matrix.fromArray(arr);
    expect(m1.deepEquals(arr)).toBe(true);
    expect(m1.deepEquals(m2)).toBe(true);
    m1.set(0, 0, 0);
    expect(m1.deepEquals(m2)).toBe(false);
    m1.set(0, 0, 1);
    expect(m1.deepEquals(m2)).toBe(true);
  });

  it('set', () => {
    const m = new util.Matrix(3, 2);
    m.set(0, 0, 1);
    m.set(2, 1, 2);
    expect(m.toArray()).toStrictEqual([
      [1, 0],
      [0, 0],
      [0, 2],
    ]);
  });

  it('get', () => {
    const m = new util.Matrix(3, 2);
    m.set(0, 0, 1);
    m.set(2, 1, 2);
    expect(m.get(0, 0)).toBe(1);
    expect(m.get(2, 1)).toBe(2);
    expect(m.get(2, 0)).toBe(0);
  });

  it('has', () => {
    const m = new util.Matrix(2, 2);
    expect(m.has(0, 0)).toBe(true);
    expect(m.has(1, 1)).toBe(true);
    expect(m.has(-1, 0)).toBe(false);
    expect(m.has(0, -1)).toBe(false);
    expect(m.has(0, 2)).toBe(false);
    expect(m.has(2, 0)).toBe(false);
  });

  it('toArray', () => {
    expect(new util.Matrix(2, 2).toArray()).toStrictEqual([
      [0, 0],
      [0, 0],
    ]);
  });

  it('clone', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    const clone = m.clone();
    expect(clone).toStrictEqual(m);
    expect(clone).toBeInstanceOf(util.Matrix);
    expect(m).not.toBe(clone);

    expect(m.clone().options.immutable).toBe(false);
    m.options.immutable = true;
    expect(m.clone().options.immutable).toBe(true);
  });

  it('forEach', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    let count = 0;
    m.forEach((value: number, row: number, col: number) => {
      count++;
      if (count === 1) {
        expect(value).toBe(1);
        expect(row).toBe(0);
        expect(col).toBe(0);
      } else if (count === 2) {
        expect(value).toBe(2);
        expect(row).toBe(0);
        expect(col).toBe(1);
      } else if (count === 3) {
        expect(value).toBe(3);
        expect(row).toBe(1);
        expect(col).toBe(0);
      } else if (count === 4) {
        expect(value).toBe(4);
        expect(row).toBe(1);
        expect(col).toBe(1);
      }
    });
    expect(count).toBe(4);
  });

  it('forEach | cancel iteration', () => {
    const m = new util.Matrix(2, 2);
    let count = 0;
    m.forEach(() => {
      count++;
      if (count === 3) {
        return false;
      } else {
        return true;
      }
    });
    expect(count).toBe(3);
  });

  it('forEachInRow', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    let count = 0;
    m.forEachInRow(0, (value: number, col: number) => {
      count++;
      if (count === 1) {
        expect(value).toBe(1);
        expect(col).toBe(0);
      } else if (count === 2) {
        expect(value).toBe(2);
        expect(col).toBe(1);
      }
    });
    expect(count).toBe(2);
  });

  it('forEachInRow | cancel iteration', () => {
    const m = new util.Matrix(2, 2);
    let count = 0;
    m.forEachInRow(0, () => {
      count++;
      if (count === 1) {
        return false;
      } else {
        return true;
      }
    });
    expect(count).toBe(1);
  });

  it('forEachInCol', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    let count = 0;
    m.forEachInCol(0, (value: number, row: number) => {
      count++;
      if (count === 1) {
        expect(value).toBe(1);
        expect(row).toBe(0);
      } else if (count === 2) {
        expect(value).toBe(3);
        expect(row).toBe(1);
      }
    });
    expect(count).toBe(2);
  });

  it('forEachInCol | cancel iteration', () => {
    const m = new util.Matrix(2, 2);
    let count = 0;
    m.forEachInCol(0, () => {
      count++;
      if (count === 1) {
        return false;
      } else {
        return true;
      }
    });
    expect(count).toBe(1);
  });

  it('forEachInDiagonal', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    let count = 0;
    m.forEachInDiagonal((value: number, row: number, col: number) => {
      count++;
      if (count === 1) {
        expect(value).toBe(1);
        expect(row).toBe(0);
        expect(col).toBe(0);
      } else if (count === 2) {
        expect(value).toBe(4);
        expect(row).toBe(1);
        expect(col).toBe(1);
      }
    });
    expect(count).toBe(2);
  });

  it('forEachInDiagonal | cancel iteration', () => {
    const m = new util.Matrix(2, 2);
    let count = 0;
    m.forEachInDiagonal(() => {
      count++;
      if (count === 1) {
        return false;
      } else {
        return true;
      }
    });
    expect(count).toBe(1);
  });

  it('map', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    let count = 0;
    m.map((value: number, row: number, col: number) => {
      count++;
      if (count === 1) {
        expect(value).toBe(1);
        expect(row).toBe(0);
        expect(col).toBe(0);
      } else if (count === 2) {
        expect(value).toBe(2);
        expect(row).toBe(0);
        expect(col).toBe(1);
      } else if (count === 3) {
        expect(value).toBe(3);
        expect(row).toBe(1);
        expect(col).toBe(0);
      } else if (count === 4) {
        expect(value).toBe(4);
        expect(row).toBe(1);
        expect(col).toBe(1);
      }
      return value * 2;
    });
    expect(count).toBe(4);
    expect(
      m.deepEquals([
        [2, 4],
        [6, 8],
      ]),
    ).toBe(true);
  });

  it('*[Symbol.iterator]', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    expect([...m]).toStrictEqual([1, 2, 3, 4]);
  });

  it('mapRow', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    let count = 0;
    m.mapRow(0, (value: number, col: number) => {
      count++;
      if (count === 1) {
        expect(value).toBe(1);
        expect(col).toBe(0);
      } else if (count === 2) {
        expect(value).toBe(2);
        expect(col).toBe(1);
      }
      return value * 2;
    });
    expect(count).toBe(2);
    expect(
      m.deepEquals([
        [2, 4],
        [3, 4],
      ]),
    ).toBe(true);
  });

  it('mapCol', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    let count = 0;
    m.mapCol(0, (value: number, row: number) => {
      count++;
      if (count === 1) {
        expect(value).toBe(1);
        expect(row).toBe(0);
      } else if (count === 2) {
        expect(value).toBe(3);
        expect(row).toBe(1);
      }
      return value * 2;
    });
    expect(count).toBe(2);
    expect(
      m.deepEquals([
        [2, 2],
        [6, 4],
      ]),
    ).toBe(true);
  });

  it('appendRow', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);

    m.appendRow();
    expect(m.toArray()).toStrictEqual([
      [1, 2],
      [3, 4],
      [0, 0],
    ]);

    m.appendRow([5, 6]);
    expect(m.toArray()).toStrictEqual([
      [1, 2],
      [3, 4],
      [0, 0],
      [5, 6],
    ]);

    expect(() => {
      m.appendRow([0, 0, 0]);
    }).toThrowError('Row must have length 2');
  });

  it('appendCol', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);

    m.appendCol();
    expect(m.toArray()).toStrictEqual([
      [1, 2, 0],
      [3, 4, 0],
    ]);

    m.appendCol([5, 6]);
    expect(m.toArray()).toStrictEqual([
      [1, 2, 0, 5],
      [3, 4, 0, 6],
    ]);

    expect(() => {
      m.appendCol([0, 0, 0]);
    }).toThrowError('Col must have length 2');
  });

  it('addBy', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    m.addBy(1);
    expect(
      m.deepEquals([
        [2, 3],
        [4, 5],
      ]),
    ).toBe(true);
  });

  it('subtractBy', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    m.subtractBy(1);
    expect(
      m.deepEquals([
        [0, 1],
        [2, 3],
      ]),
    ).toBe(true);
  });

  it('multiplyBy', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    m.multiplyBy(2);
    expect(
      m.deepEquals([
        [2, 4],
        [6, 8],
      ]),
    ).toBe(true);
  });

  it('divideBy', () => {
    const arr = [
      [2, 4],
      [6, 8],
    ];
    const m = util.Matrix.fromArray(arr);
    m.divideBy(2);
    expect(
      m.deepEquals([
        [1, 2],
        [3, 4],
      ]),
    ).toBe(true);
  });

  it('addRowBy', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    m.addRowBy(0, 1);
    expect(
      m.deepEquals([
        [2, 3],
        [3, 4],
      ]),
    ).toBe(true);
  });

  it('subtractRowBy', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    m.subtractRowBy(0, 1);
    expect(
      m.deepEquals([
        [0, 1],
        [3, 4],
      ]),
    ).toBe(true);
  });

  it('multiplyRowBy', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    m.multiplyRowBy(0, 2);
    expect(
      m.deepEquals([
        [2, 4],
        [3, 4],
      ]),
    ).toBe(true);
  });

  it('divideRowBy', () => {
    const arr = [
      [2, 4],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    m.divideRowBy(0, 2);
    expect(
      m.deepEquals([
        [1, 2],
        [3, 4],
      ]),
    ).toBe(true);
  });

  it('addColBy', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    m.addColBy(0, 1);
    expect(
      m.deepEquals([
        [2, 2],
        [4, 4],
      ]),
    ).toBe(true);
  });

  it('subtractColBy', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    m.subtractColBy(0, 1);
    expect(
      m.deepEquals([
        [0, 2],
        [2, 4],
      ]),
    ).toBe(true);
  });

  it('multiplyColBy', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    m.multiplyColBy(0, 2);
    expect(
      m.deepEquals([
        [2, 2],
        [6, 4],
      ]),
    ).toBe(true);
  });

  it('divideColBy', () => {
    const arr = [
      [2, 3],
      [4, 5],
    ];
    const m = util.Matrix.fromArray(arr);
    m.divideColBy(0, 2);
    expect(
      m.deepEquals([
        [1, 3],
        [2, 5],
      ]),
    ).toBe(true);
  });

  it('swapRows', () => {
    const arr = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    const m = util.Matrix.fromArray(arr);
    m.swapRows(0, 2);
    expect(
      m.deepEquals([
        [5, 6],
        [3, 4],
        [1, 2],
      ]),
    ).toBe(true);
  });

  it('swapCols', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const m = util.Matrix.fromArray(arr);
    m.swapCols(0, 2);
    expect(
      m.deepEquals([
        [3, 2, 1],
        [6, 5, 4],
      ]),
    ).toBe(true);
  });

  it('some', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    expect(
      m.some((value: number) => {
        return value === 4;
      }),
    ).toBe(true);
    expect(
      m.some((value: number, row: number, col: number) => {
        expect(row >= 0).toBe(true);
        expect(col >= 0).toBe(true);
        return value === 5;
      }),
    ).toBe(false);
  });

  it('every', () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const m = util.Matrix.fromArray(arr);
    expect(
      m.every((value: number, row: number, col: number) => {
        expect(row >= 0).toBe(true);
        expect(col >= 0).toBe(true);
        return value > 0;
      }),
    ).toBe(true);
    expect(
      m.every((value: number) => {
        return value > 1;
      }),
    ).toBe(false);
  });

  it('hasDimensions', () => {
    const m = new util.Matrix(3, 2);
    expect(m.hasDimensions(3, 2)).toBe(true);
    expect(m.hasDimensions(3, 3)).toBe(false);
    expect(m.hasDimensions(4, 2)).toBe(false);
  });

  it('isSquareMatrix', () => {
    expect(new util.Matrix(1, 1).isSquareMatrix()).toBe(true);
    expect(new util.Matrix(2, 2).isSquareMatrix()).toBe(true);
    expect(new util.Matrix(3, 3).isSquareMatrix()).toBe(true);
    expect(new util.Matrix(3, 2).isSquareMatrix()).toBe(false);
  });

  it('isScalarMatrix', () => {
    expect(new util.Matrix(1, 1).isScalarMatrix()).toBe(true);
    expect(new util.Matrix(3, 3).isScalarMatrix()).toBe(true);
    expect(util.Matrix.identity(3).isScalarMatrix()).toBe(true);
    expect(new util.Matrix(3, 2).isScalarMatrix()).toBe(false);
    expect(new util.Matrix(3, 3).set(0, 0, 1).isScalarMatrix()).toBe(false);
    expect(new util.Matrix(3, 3).appendRow().isScalarMatrix()).toBe(false);
  });

  it('isZeroMatrix', () => {
    expect(new util.Matrix(1, 1).isZeroMatrix()).toBe(true);
    expect(new util.Matrix(3, 3).isZeroMatrix()).toBe(true);
    expect(new util.Matrix(3, 2).isZeroMatrix()).toBe(true);
    expect(new util.Matrix(3, 3).set(1, 2, 1).isZeroMatrix()).toBe(false);
  });
});
