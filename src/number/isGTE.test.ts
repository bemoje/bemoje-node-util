import { isGTE } from './isGTE'

describe('isGTE', () => {
  it('should return true when number is greater than lowerBound', () => {
    expect(isGTE(5, 3)).toBe(true)
  })

  it('should return true when number is equal to lowerBound', () => {
    expect(isGTE(3, 3)).toBe(true)
  })

  it('should return false when number is less than lowerBound', () => {
    expect(isGTE(2, 3)).toBe(false)
  })

  it('should return true when number and lowerBound are both zero', () => {
    expect(isGTE(0, 0)).toBe(true)
  })

  it('should return false when number is negative and lowerBound is zero', () => {
    expect(isGTE(-1, 0)).toBe(false)
  })

  it('should return true when number is zero and lowerBound is negative', () => {
    expect(isGTE(0, -1)).toBe(true)
  })

  it('should return true when number and lowerBound are both negative and number is greater', () => {
    expect(isGTE(-2, -3)).toBe(true)
  })

  it('should return false when number and lowerBound are both negative and number is less', () => {
    expect(isGTE(-3, -2)).toBe(false)
  })
})
