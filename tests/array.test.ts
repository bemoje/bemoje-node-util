import * as util from '../src/libs/array'
import { Callback, Predicate } from '../src/libs/types'

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

describe('arrAssignFrom', () => {
  it('mutably assigns values - longer source array', () => {
    const target = [1, 2, 3]
    const result = util.arrAssignFrom(target, [4, 5, 6, 7])
    expect(target).toStrictEqual([4, 5, 6, 7])
    expect(target).toBe(result)
  })
  it('mutably assigns values - shorter source array', () => {
    const target = [1, 2, 3]
    const result = util.arrAssignFrom(target, [4, 5])
    expect(target).toStrictEqual([4, 5])
    expect(target).toBe(result)
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

describe('arrFilterMutable', () => {
  it('example', () => {
    const a = [1, 2, 3, 4, 5]
    util.arrFilterMutable(a, (value) => {
      return value > 3
    })
    expect(a).toStrictEqual([4, 5])
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
    expect(util.arrFlatten([[[1, [[2, [3, [4]], 6]]]], 1, [2, [3, [4]], 6], 8, 2, [], 5, [9]])).toStrictEqual([
      1, 2, 3, 4, 6, 1, 2, 3, 4, 6, 8, 2, 5, 9,
    ])
  })
})

describe('arrFlattenMutable', () => {
  it('mutably flattens empty array', () => {
    const a: any = []
    util.arrFlattenMutable(a)
    expect(a).toStrictEqual([])
  })
  it('mutably flattens array depth 0', () => {
    const a = [1, 2]
    util.arrFlattenMutable(a)
    expect(a).toStrictEqual([1, 2])
  })
  it('mutably flattens array depth 1', () => {
    const a = [1, [2]]
    util.arrFlattenMutable(a)
    expect(a).toStrictEqual([1, 2])
  })
  it('mutably flattens array depth 2', () => {
    const a = [1, [2, [3]]]
    util.arrFlattenMutable(a)
    expect(a).toStrictEqual([1, 2, 3])
  })
  it('mutably flattens array depth 3 with max depth 2', () => {
    const a = [1, [2, [3, [4]]]]
    util.arrFlattenMutable(a, 2)
    expect(a).toStrictEqual([1, 2, 3, [4]])
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
    const callback: Callback = jest.fn()
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
    const predicate: Predicate = (value) => value > 2
    const array = [1, 2, 3]
    expect(array.some(predicate)).toBe(true)
  })

  it('should return false if the predicate function returns false for all elements in the array', () => {
    const predicate: Predicate = (value) => value > 3
    const array = [1, 2, 3]
    expect(array.some(predicate)).toBe(false)
  })
})

describe('Callback', () => {
  it('should call the callback function with the correct arguments', () => {
    const callback: Callback = jest.fn()
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
    const predicate: Predicate = (value) => value > 2
    const array = [1, 2, 3]
    expect(array.some(predicate)).toBe(true)
  })

  it('should return false if the predicate function returns false for all elements in the array', () => {
    const predicate: Predicate = (value) => value > 3
    const array = [1, 2, 3]
    expect(array.some(predicate)).toBe(false)
  })
})

describe('Callback', () => {
  it('should call the callback function with the correct arguments', () => {
    const callback: Callback = jest.fn()
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
    const predicate: Predicate = (value) => value > 2
    const array = [1, 2, 3]
    expect(array.some(predicate)).toBe(true)
  })

  it('should return false if the predicate function returns false for all elements in the array', () => {
    const predicate: Predicate = (value) => value > 3
    const array = [1, 2, 3]
    expect(array.some(predicate)).toBe(false)
  })
})

describe('Callback', () => {
  it('should call the callback function with the correct arguments', () => {
    const callback: Callback = jest.fn()
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
    const predicate: Predicate = (value) => value > 2
    const array = [1, 2, 3]
    expect(array.some(predicate)).toBe(true)
  })

  it('should return false if the predicate function returns false for all elements in the array', () => {
    const predicate: Predicate = (value) => value > 3
    const array = [1, 2, 3]
    expect(array.some(predicate)).toBe(false)
  })
})
