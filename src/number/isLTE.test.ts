import { isLTE } from './isLTE'

describe('isLTE', () => {
  it('should return true when the number is less than the upper bound', () => {
    expect(isLTE(5, 10)).toBe(true)
  })

  it('should return true when the number is equal to the upper bound', () => {
    expect(isLTE(10, 10)).toBe(true)
  })

  it('should return false when the number is greater than the upper bound', () => {
    expect(isLTE(15, 10)).toBe(false)
  })

  it('should return true when the number and upper bound are both zero', () => {
    expect(isLTE(0, 0)).toBe(true)
  })

  it('should return false when the number is positive and the upper bound is negative', () => {
    expect(isLTE(1, -1)).toBe(false)
  })

  it('should return true when the number is negative and the upper bound is positive', () => {
    expect(isLTE(-1, 1)).toBe(true)
  })

  it('should return true when the number and upper bound are both negative and the number is less than the upper bound', () => {
    expect(isLTE(-5, -1)).toBe(true)
  })

  it('should return false when the number and upper bound are both negative and the number is greater than the upper bound', () => {
    expect(isLTE(-1, -5)).toBe(false)
  })
})
