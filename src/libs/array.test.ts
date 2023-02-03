import * as util from './array';

describe('arrMapMutable', () => {
  it('example', () => {
    expect(
      util.arrMapMutable([1, 2, 3, 4, 5], (value: number) => {
        return value + 1;
      }),
    ).toStrictEqual([2, 3, 4, 5, 6]);
  });
});

describe('arrSortNumeric', () => {
  it('example', () => {
    expect(util.arrSortNumeric([4, 5, 1, 1.5, 11])).toStrictEqual([
      1, 1.5, 4, 5, 11,
    ]);
    expect([4, 5, 1, 1.5, 11].sort()).not.toStrictEqual([1, 1.5, 4, 5, 11]);
  });
});

describe('arrSwap', () => {
  it('example', () => {
    expect(util.arrSwap([1, 2, 3, 4], 1, 2)).toStrictEqual([1, 3, 2, 4]);
  });
});

describe('arrShallowEquals', () => {
  it('example', () => {
    expect(util.arrShallowEquals([1, 2, 3, 4], [1, 2, 3, 4])).toBe(true);
    expect(util.arrShallowEquals([1, 2, 3, 4], [1, 2, 3])).toBe(false);
  });
});

describe('arrShuffle', () => {
  it('example', () => {
    expect(util.arrShuffle([1, 2, 3, 4])).not.toStrictEqual([1, 3, 2, 4]);
  });
});

describe('arrIndexesOf', () => {
  it('example', () => {
    const arr = ['a', 'b', 'c', 'a'];
    expect(util.arrIndexesOf(arr, 'a')).toStrictEqual([0, 3]);
    expect(util.arrIndexesOf(arr, 'b')).toStrictEqual([1]);
    expect(util.arrIndexesOf(arr, 'd')).toStrictEqual([]);
  });
});

describe('arrEvery', () => {
  it('example', () => {
    const arr = [1, 2, 3, 4, 5];
    const isGreaterThanZero = (n: number) => n > 0;
    const isGreaterThanThree = (n: number) => n > 3;
    expect(util.arrEvery(arr, isGreaterThanZero)).toBe(true);
    expect(util.arrEvery(arr, isGreaterThanThree)).toBe(false);
  });
  it('callback is passed all correct values', () => {
    const arr = [1, 2, 3, 4, 5];
    const indexCheck = new Array(arr.length);
    util.arrEvery(arr, (element: any, i: number, array: Array<any>) => {
      expect(arr === array).toBe(true);
      expect(arr[i] === array[i]).toBe(true);
      expect(arr[i] === element).toBe(true);
      expect(Number.isInteger(i)).toBe(true);
      indexCheck[i] = arr[i];
      return true;
    });
    expect(indexCheck).toStrictEqual(arr);
  });
});

describe('arrSome', () => {
  it('example', () => {
    const arr = ['hello', 'world'];
    expect(
      util.arrSome(arr, (element: any) => {
        return element.length > 5;
      }),
    ).toBe(false);
    expect(
      util.arrSome(arr, (element: any) => {
        return element.length === 5;
      }),
    ).toBe(true);
    expect(
      util.arrSome([], (element: any) => {
        return element.length === 5;
      }),
    ).toBe(false);
  });
  it('callback is passed all correct values', () => {
    const arr = [1, 2, 3, 4, 5];
    const indexCheck = new Array(arr.length);
    util.arrSome(arr, (element: any, i: number, array: Array<any>) => {
      expect(arr === array).toBe(true);
      expect(arr[i] === array[i]).toBe(true);
      expect(arr[i] === element).toBe(true);
      expect(Number.isInteger(i)).toBe(true);
      indexCheck[i] = arr[i];
      return false;
    });
    expect(indexCheck).toStrictEqual(arr);
  });
});

describe('arrFlatten', () => {
  it('example', () => {
    expect(util.arrFlatten([1, [2]])).toStrictEqual([1, 2]);
    expect(util.arrFlatten([1, [2, [3]]])).toStrictEqual([1, 2, 3]);
  });
});
