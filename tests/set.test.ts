import * as util from '../src/libs/set'
import { arrSortNumeric } from '../src/libs/array/src/arrSortNumeric'

describe('setIntersection', () => {
  it('example', () => {
    expect(
      Array.from(util.setIntersection([new Set([1, 2, 3]), new Set([2, 3, 4])])),
    ).toStrictEqual([2, 3])
  })
  it('handles many sets', () => {
    expect(
      Array.from(
        util.setIntersection([new Set([1, 2, 3]), new Set([2, 3, 4]), new Set([3, 4, 5])]),
      ),
    ).toStrictEqual([3])
  })
  it('handles empty sets', () => {
    expect(Array.from(util.setIntersection([new Set([1, 2, 3]), new Set([])]))).toStrictEqual([])
    expect(Array.from(util.setIntersection([new Set([]), new Set([])]))).toStrictEqual([])
  })
})

describe('setUnion', () => {
  it('example', () => {
    expect(Array.from(util.setUnion([new Set([1, 2, 3]), new Set([2, 3, 4])]))).toStrictEqual(
      arrSortNumeric([1, 2, 3, 4]),
    )
  })
  it('handles many sets', () => {
    expect(
      Array.from(util.setUnion([new Set([1, 2, 3]), new Set([2, 3, 4]), new Set([3, 4, 5])])),
    ).toStrictEqual(arrSortNumeric([1, 2, 3, 4, 5]))
  })
  it('handles empty sets', () => {
    expect(Array.from(util.setUnion([new Set([1, 2, 3]), new Set([])]))).toStrictEqual(
      arrSortNumeric([1, 2, 3]),
    )
    expect(Array.from(util.setUnion([new Set([]), new Set([])]))).toStrictEqual([])
  })
})

describe('setIsSuperset', () => {
  it('should return true if the first set is a superset of the second set', () => {
    const set1 = new Set([1, 2, 3, 4, 5])
    const set2 = new Set([2, 4])
    expect(util.setIsSuperset(set1, set2)).toBe(true)
  })

  it('should return false if the first set is not a superset of the second set', () => {
    const set1 = new Set([1, 2, 3, 4, 5])
    const set2 = new Set([2, 4, 6])
    expect(util.setIsSuperset(set1, set2)).toBe(false)
  })
})

describe('setDifference', () => {
  it('should return a new set with elements that are in the first set but not in the second set', () => {
    const setA = new Set([1, 2, 3, 4])
    const setB = new Set([2, 4])
    const result = util.setDifference(setA, setB)
    expect(result).toEqual(new Set([1, 3]))
  })
})

describe('setSymmetricDifference', () => {
  it('returns the symmetric difference between two sets', () => {
    const setA = new Set([1, 2, 3])
    const setB = new Set([2, 3, 4])
    const result = util.setSymmetricDifference(setA, setB)
    expect(result).toEqual(new Set([1, 4]))
  })
})
