import * as util from '../src/libs/set'
import { arrSortNumeric } from '../src/libs/array/src/arrSortNumeric'

describe('setIntersection', () => {
  it('example', () => {
    expect(Array.from(util.setIntersection([new Set([1, 2, 3]), new Set([2, 3, 4])]))).toStrictEqual([2, 3])
  })
  it('handles many sets', () => {
    expect(
      Array.from(util.setIntersection([new Set([1, 2, 3]), new Set([2, 3, 4]), new Set([3, 4, 5])])),
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
    expect(Array.from(util.setUnion([new Set([1, 2, 3]), new Set([2, 3, 4]), new Set([3, 4, 5])]))).toStrictEqual(
      arrSortNumeric([1, 2, 3, 4, 5]),
    )
  })
  it('handles empty sets', () => {
    expect(Array.from(util.setUnion([new Set([1, 2, 3]), new Set([])]))).toStrictEqual(arrSortNumeric([1, 2, 3]))
    expect(Array.from(util.setUnion([new Set([]), new Set([])]))).toStrictEqual([])
  })
})
