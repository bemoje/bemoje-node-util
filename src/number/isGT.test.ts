import { isGT } from './isGT'

describe('isGT', () => {
  it('should return true when the number is greater than the lower bound', () => {
    expect(isGT(5, 3)).toBe(true)
  })

  it('should return false when the number is less than the lower bound', () => {
    expect(isGT(2, 3)).toBe(false)
  })

  it('should return false when the number is equal to the lower bound', () => {
    expect(isGT(3, 3)).toBe(false)
  })

  it('should return true when the number is a large positive number and the lower bound is a large negative number', () => {
    expect(isGT(1e6, -1e6)).toBe(true)
  })

  it('should return false when the number is a large negative number and the lower bound is a large positive number', () => {
    expect(isGT(-1e6, 1e6)).toBe(false)
  })

  it('should return true when the number is a small positive number and the lower bound is a small negative number', () => {
    expect(isGT(0.000001, -0.000001)).toBe(true)
  })

  it('should return false when the number is a small negative number and the lower bound is a small positive number', () => {
    expect(isGT(-0.000001, 0.000001)).toBe(false)
  })
})
