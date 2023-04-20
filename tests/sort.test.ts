import * as util from '../src/libs/sort'

describe('compareArrays', () => {
  it('example', () => {
    const arr = [
      [1, 2, 3],
      [1, 2, 2],
      [3, 0, 1],
      [0, 3, 1],
    ]
    const compare = util.compareArray(util.compareNumber)
    expect(arr.sort(compare)).toStrictEqual([
      [0, 3, 1],
      [1, 2, 2],
      [1, 2, 3],
      [3, 0, 1],
    ])
  })
  it('is compatible with descending sorting comparator', () => {
    const arr = [
      [1, 2, 3],
      [1, 2, 2],
      [3, 0, 1],
      [0, 3, 1],
    ]
    const compare = util.compareArray(util.compareNumberDescending, true)
    expect(arr.sort(compare)).toStrictEqual([
      [3, 0, 1],
      [1, 2, 3],
      [1, 2, 2],
      [0, 3, 1],
    ])
  })
  it('deep recursive compare ascending', () => {
    const arr = [
      ['repo', 'src', ['compare', 'json']],
      ['repo', 'src', ['compare', 'ts']],
      ['repo', 'src', ['compare', 'js']],
    ]
    const compare = util.compareArray(util.compareString)
    expect(arr.sort(compare)).toStrictEqual([
      ['repo', 'src', ['compare', 'js']],
      ['repo', 'src', ['compare', 'json']],
      ['repo', 'src', ['compare', 'ts']],
    ])
  })
  it('deep recursive compare descending', () => {
    const arr = [
      ['repo', 'src', ['compare', 'json']],
      ['repo', 'src', ['compare', 'ts']],
      ['repo', 'src', ['compare', 'js']],
    ]
    const compare = util.compareArray(util.compareStringDescending, true)
    expect(arr.sort(compare)).toStrictEqual([
      ['repo', 'src', ['compare', 'ts']],
      ['repo', 'src', ['compare', 'json']],
      ['repo', 'src', ['compare', 'js']],
    ])
  })
})

describe('compareNumberDescending', () => {
  it('should return a negative number if the first value is greater than the second value', () => {
    expect(util.compareNumberDescending(2, 1)).toBeLessThan(0)
    expect(util.compareNumberDescending(10, 5)).toBeLessThan(0)
    expect(util.compareNumberDescending(-3, -2)).toBeGreaterThan(0)
  })

  it('should return a positive number if the first value is less than the second value', () => {
    expect(util.compareNumberDescending(1, 2)).toBeGreaterThan(0)
    expect(util.compareNumberDescending(5, 10)).toBeGreaterThan(0)
    expect(util.compareNumberDescending(-2, -3)).toBeLessThan(0)
  })

  it('should return zero if the values are equal', () => {
    expect(util.compareNumberDescending(1, 1)).toEqual(0)
    expect(util.compareNumberDescending(-1, -1)).toEqual(0)
    expect(util.compareNumberDescending(0, 0)).toEqual(0)
  })
})

describe('compareNumber', () => {
  it('should return a negative number if the first value is less than the second value', () => {
    expect(util.compareNumber(2, 1)).toBeGreaterThan(0)
    expect(util.compareNumber(10, 5)).toBeGreaterThan(0)
    expect(util.compareNumber(-3, -2)).toBeLessThan(0)
  })

  it('should return a positive number if the first value is greater than the second value', () => {
    expect(util.compareNumber(1, 2)).toBeLessThan(0)
    expect(util.compareNumber(5, 10)).toBeLessThan(0)
    expect(util.compareNumber(-2, -3)).toBeGreaterThan(0)
  })

  it('should return zero if the values are equal', () => {
    expect(util.compareNumber(1, 1)).toEqual(0)
    expect(util.compareNumber(-1, -1)).toEqual(0)
    expect(util.compareNumber(0, 0)).toEqual(0)
  })
})

describe('compareNumeric', () => {
  it('should return a negative number if the first value is less than the second value', () => {
    expect(util.compareNumeric(1, 2)).toBeLessThan(0)
    expect(util.compareNumeric(-1, 0)).toBeLessThan(0)
    expect(util.compareNumeric(BigInt(1), BigInt(2))).toBeLessThan(0)
    expect(util.compareNumeric(false, true)).toBeLessThan(0)
  })

  it('should return a positive number if the first value is greater than the second value', () => {
    expect(util.compareNumeric(2, 1)).toBeGreaterThan(0)
    expect(util.compareNumeric(0, -1)).toBeGreaterThan(0)
    expect(util.compareNumeric(BigInt(2), BigInt(1))).toBeGreaterThan(0)
    expect(util.compareNumeric(true, false)).toBeGreaterThan(0)
  })

  it('should return zero if the values are equal', () => {
    expect(util.compareNumeric(1, 1)).toEqual(0)
    expect(util.compareNumeric(-1, -1)).toEqual(0)
    expect(util.compareNumeric(BigInt(1), BigInt(1))).toEqual(0)
    expect(util.compareNumeric(false, false)).toEqual(0)
  })
})

describe('compareNumericDescending', () => {
  it('should return a negative number if the first value is greater than the second value', () => {
    expect(util.compareNumericDescending(2, 1)).toBeLessThan(0)
    expect(util.compareNumericDescending(0, -1)).toBeLessThan(0)
    expect(util.compareNumericDescending(BigInt(2), BigInt(1))).toBeLessThan(0)
    expect(util.compareNumericDescending(true, false)).toBeLessThan(0)
  })

  it('should return a positive number if the first value is less than the second value', () => {
    expect(util.compareNumericDescending(1, 2)).toBeGreaterThan(0)
    expect(util.compareNumericDescending(-1, 0)).toBeGreaterThan(0)
    expect(util.compareNumericDescending(BigInt(1), BigInt(2))).toBeGreaterThan(0)
    expect(util.compareNumericDescending(false, true)).toBeGreaterThan(0)
  })

  it('should return zero if the values are equal', () => {
    expect(util.compareNumericDescending(1, 1)).toEqual(0)
    expect(util.compareNumericDescending(-1, -1)).toEqual(0)
    expect(util.compareNumericDescending(BigInt(1), BigInt(1))).toEqual(0)
    expect(util.compareNumericDescending(false, false)).toEqual(0)
  })
})
