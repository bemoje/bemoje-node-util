/* eslint-disable @typescript-eslint/no-explicit-any */
import * as util from '../src/libs/array'

describe('arr2dToCSV', () => {
  it('works for 2D array', () => {
    const a = [
      ['#', 'name'],
      ['1', 'John'],
      ['2', 'Alice'],
    ]
    expect(util.arr2dToCSV(a)).toBe('#;name\n1;John\n2;Alice')
  })
  it('works with other delimiter settings', () => {
    const a = [
      ['#', 'name'],
      ['1', 'John'],
      ['2', 'Alice'],
    ]
    expect(util.arr2dToCSV(a, ',')).toBe('#,name\n1,John\n2,Alice')
  })
})

describe('arrEvery', () => {
  it('example', () => {
    const arr = [1, 2, 3, 4, 5]
    const isGreaterThanZero = (n: number) => n > 0
    const isGreaterThanThree = (n: number) => n > 3
    expect(util.arrEvery(arr, isGreaterThanZero)).toBe(true)
    expect(util.arrEvery(arr, isGreaterThanThree)).toBe(false)
  })
  it('callback is passed all correct values', () => {
    const arr = [1, 2, 3, 4, 5]
    const indexCheck = new Array(arr.length)
    util.arrEvery(arr, (element: any, i: number, array: Array<any>) => {
      expect(arr === array).toBe(true)
      expect(arr[i] === array[i]).toBe(true)
      expect(arr[i] === element).toBe(true)
      expect(Number.isInteger(i)).toBe(true)
      indexCheck[i] = arr[i]
      return true
    })
    expect(indexCheck).toStrictEqual(arr)
  })
})

describe('arrFlatten', () => {
  it('flattens empty array', () => {
    expect(util.arrFlatten([])).toStrictEqual([])
  })
  it('flattens array depth 0', () => {
    expect(util.arrFlatten([1, 2])).toStrictEqual([1, 2])
  })
  it('flattens array depth 1', () => {
    expect(util.arrFlatten([1, [2]])).toStrictEqual([1, 2])
  })
  it('flattens array depth 2', () => {
    expect(util.arrFlatten([1, [2, [3]]])).toStrictEqual([1, 2, 3])
  })
  it('flattens array depth 3', () => {
    expect(util.arrFlatten([1, [2, [3, [4]]]])).toStrictEqual([1, 2, 3, 4])
  })
  it('flattens array depth 3 with max depth 0', () => {
    expect(util.arrFlatten([1, [2, [3, [4]]]], 0)).toStrictEqual([1, [2, [3, [4]]]])
  })
  it('flattens array depth 3 with max depth 1', () => {
    expect(util.arrFlatten([1, [2, [3, [4]]]], 1)).toStrictEqual([1, 2, [3, [4]]])
  })
  it('flattens array depth 3 with max depth 2', () => {
    expect(util.arrFlatten([1, [2, [3, [4]]]], 2)).toStrictEqual([1, 2, 3, [4]])
  })
  it('flattens complex array', () => {
    expect(
      util.arrFlatten([[[1, [[2, [3, [4]], 6]]]], 1, [2, [3, [4]], 6], 8, 2, [], 5, [9]]),
    ).toStrictEqual([1, 2, 3, 4, 6, 1, 2, 3, 4, 6, 8, 2, 5, 9])
  })
})

describe('arrIndicesOf', () => {
  it('example', () => {
    const arr = ['a', 'b', 'c', 'a']
    expect(util.arrIndicesOf(arr, 'a')).toStrictEqual([0, 3])
    expect(util.arrIndicesOf(arr, 'b')).toStrictEqual([1])
    expect(util.arrIndicesOf(arr, 'd')).toStrictEqual([])
  })
})

describe('arrMapMutable', () => {
  it('example', () => {
    const a = [1, 2, 3, 4, 5]
    util.arrMapMutable(a, (value: number) => {
      return value + 1
    })
    expect(a).toStrictEqual([2, 3, 4, 5, 6])
  })
})

describe('arrShallowEquals', () => {
  it('example', () => {
    expect(util.arrShallowEquals([1, 2, 3, 4], [1, 2, 3, 4])).toBe(true)
    expect(util.arrShallowEquals([1, 2, 3, 4], [1, 2, 3])).toBe(false)
  })
})

describe('arrShuffle', () => {
  it('example', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(util.arrShuffle(arr.slice())).not.toStrictEqual(arr)
  })
})

describe('arrSome', () => {
  it('example', () => {
    const arr = ['hello', 'world']
    expect(
      util.arrSome(arr, (element: any) => {
        return element.length > 5
      }),
    ).toBe(false)
    expect(
      util.arrSome(arr, (element: any) => {
        return element.length === 5
      }),
    ).toBe(true)
    expect(
      util.arrSome([], (element: any) => {
        return element.length === 5
      }),
    ).toBe(false)
  })
  it('callback is passed all correct values', () => {
    const arr = [1, 2, 3, 4, 5]
    const indexCheck = new Array(arr.length)
    util.arrSome(arr, (element: any, i: number, array: Array<any>) => {
      expect(arr === array).toBe(true)
      expect(arr[i] === array[i]).toBe(true)
      expect(arr[i] === element).toBe(true)
      expect(Number.isInteger(i)).toBe(true)
      indexCheck[i] = arr[i]
      return false
    })
    expect(indexCheck).toStrictEqual(arr)
  })
})

describe('arrSortNumeric', () => {
  it('example', () => {
    expect(util.arrSortNumeric([4, 5, 1, 1.5, 11])).toStrictEqual([1, 1.5, 4, 5, 11])
    expect([4, 5, 1, 1.5, 11].sort()).not.toStrictEqual([1, 1.5, 4, 5, 11])
  })
})

describe('arrSwap', () => {
  it('example', () => {
    expect(util.arrSwap([1, 2, 3, 4], 1, 2)).toStrictEqual([1, 3, 2, 4])
  })
})

describe('Callback', () => {
  it('should call the callback function with the correct arguments', () => {
    const callback = jest.fn()
    const array = [1, 2, 3]
    array.forEach(callback)
    expect(callback).toHaveBeenCalledTimes(3)
    expect(callback).toHaveBeenCalledWith(1, 0, array)
    expect(callback).toHaveBeenCalledWith(2, 1, array)
    expect(callback).toHaveBeenCalledWith(3, 2, array)
  })
})

describe('Predicate', () => {
  it('should return true if the predicate function returns true for any element in the array', () => {
    const predicate = (value: number) => value > 2
    const array = [1, 2, 3]
    expect(array.some(predicate)).toBe(true)
  })

  it('should return false if the predicate function returns false for all elements in the array', () => {
    const predicate = (value: number) => value > 3
    const array = [1, 2, 3]
    expect(array.some(predicate)).toBe(false)
  })
})

describe('Callback', () => {
  it('should call the callback function with the correct arguments', () => {
    const callback = jest.fn()
    const array = [1, 2, 3]
    array.forEach(callback)
    expect(callback).toHaveBeenCalledTimes(3)
    expect(callback).toHaveBeenCalledWith(1, 0, array)
    expect(callback).toHaveBeenCalledWith(2, 1, array)
    expect(callback).toHaveBeenCalledWith(3, 2, array)
  })
})

describe('Predicate', () => {
  it('should return true if the predicate function returns true for any element in the array', () => {
    const predicate = (value: number) => value > 2
    const array = [1, 2, 3]
    expect(array.some(predicate)).toBe(true)
  })

  it('should return false if the predicate function returns false for all elements in the array', () => {
    const predicate = (value: number) => value > 3
    const array = [1, 2, 3]
    expect(array.some(predicate)).toBe(false)
  })
})

describe('Callback', () => {
  it('should call the callback function with the correct arguments', () => {
    const callback = jest.fn()
    const array = [1, 2, 3]
    array.forEach(callback)
    expect(callback).toHaveBeenCalledTimes(3)
    expect(callback).toHaveBeenCalledWith(1, 0, array)
    expect(callback).toHaveBeenCalledWith(2, 1, array)
    expect(callback).toHaveBeenCalledWith(3, 2, array)
  })
})

describe('Predicate', () => {
  it('should return true if the predicate function returns true for any element in the array', () => {
    const predicate = (value: number) => value > 2
    const array = [1, 2, 3]
    expect(array.some(predicate)).toBe(true)
  })

  it('should return false if the predicate function returns false for all elements in the array', () => {
    const predicate = (value: number) => value > 3
    const array = [1, 2, 3]
    expect(array.some(predicate)).toBe(false)
  })
})

describe('Callback', () => {
  it('should call the callback function with the correct arguments', () => {
    const callback = jest.fn()
    const array = [1, 2, 3]
    array.forEach(callback)
    expect(callback).toHaveBeenCalledTimes(3)
    expect(callback).toHaveBeenCalledWith(1, 0, array)
    expect(callback).toHaveBeenCalledWith(2, 1, array)
    expect(callback).toHaveBeenCalledWith(3, 2, array)
  })
})

describe('Predicate', () => {
  it('should return true if the predicate function returns true for any element in the array', () => {
    const predicate = (value: number) => value > 2
    const array = [1, 2, 3]
    expect(array.some(predicate)).toBe(true)
  })

  it('should return false if the predicate function returns false for all elements in the array', () => {
    const predicate = (value: number) => value > 3
    const array = [1, 2, 3]
    expect(array.some(predicate)).toBe(false)
  })
})

describe('arrSum', () => {
  it('should return 0 for an empty array', () => {
    expect(util.arrSum([])).toBe(0)
  })

  it('should return the sum of an array of positive numbers', () => {
    expect(util.arrSum([1, 2, 3])).toBe(6)
  })

  it('should return the sum of an array of negative numbers', () => {
    expect(util.arrSum([-1, -2, -3])).toBe(-6)
  })

  it('should return the sum of an array of mixed positive and negative numbers', () => {
    expect(util.arrSum([-1, 2, -3, 4])).toBe(2)
  })
})

describe('arrAverage', () => {
  it('should return the average of an array of numbers', () => {
    expect(util.arrAverage([1, 2, 3, 4, 5])).toBe(3)
    expect(util.arrAverage([0, 0, 0, 0, 0])).toBe(0)
    expect(util.arrAverage([-1, 1])).toBe(0)
  })
})

describe('arrTableToObjects', () => {
  it('without headers', () => {
    const table = [
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      ['4', '5', '6'],
    ]
    expect(util.arrTableToObjects(table)).toEqual([
      { a: '1', b: '2', c: '3' },
      { a: '4', b: '5', c: '6' },
    ])
  })

  it('with headers', () => {
    const headers = ['a', 'b', 'c']
    const rows = [
      ['1', '2', '3'],
      ['4', '5', '6'],
    ]
    expect(util.arrTableToObjects(rows, headers)).toEqual([
      { a: '1', b: '2', c: '3' },
      { a: '4', b: '5', c: '6' },
    ])
  })
})

describe('arrRemoveDuplicates', () => {
  it('removes duplicates', () => {
    expect(util.arrRemoveDuplicates([1, 2, 3, 1, 2, 3])).toEqual([1, 2, 3])
  })
})

describe('arrTableAssertRowsSameLength', () => {
  it('should throw an error if rows have different lengths', () => {
    const rows = [
      ['a', 'b', 'c'],
      ['d', 'e'],
    ]
    expect(() => util.arrTableAssertRowsSameLength(rows)).toThrow()
  })

  it('should not throw an error if all rows have the same length', () => {
    const rows = [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
    ]
    expect(() => util.arrTableAssertRowsSameLength(rows)).not.toThrow()
  })
})

describe('arrLast', () => {
  it('should return the last element of an array', () => {
    expect(util.arrLast([1, 2, 3])).toBe(3)
    expect(util.arrLast(['a', 'b', 'c'])).toBe('c')
  })

  it('should throw an error if the array is empty', () => {
    expect(() => util.arrLast([])).toThrow()
  })
})
