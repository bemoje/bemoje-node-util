import { isNegativeInteger } from './isNegativeInteger'

describe('isNegativeInteger', () => {
  it('should return true for negative integers', () => {
    expect(isNegativeInteger(-1)).toBe(true)
    expect(isNegativeInteger(-100)).toBe(true)
  })

  it('should return false for positive integers', () => {
    expect(isNegativeInteger(1)).toBe(false)
    expect(isNegativeInteger(100)).toBe(false)
  })

  it('should return false for zero', () => {
    expect(isNegativeInteger(0)).toBe(false)
  })

  it('should return false for non-integer numbers', () => {
    expect(isNegativeInteger(-1.5)).toBe(false)
    expect(isNegativeInteger(1.5)).toBe(false)
  })
})
