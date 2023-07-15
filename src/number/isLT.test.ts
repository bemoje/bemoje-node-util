import { isLT } from './isLT'

describe('NumberUtils', () => {
  describe('isLT', () => {
    it('should return true when the number is less than the upper bound', () => {
      expect(isLT(5, 10)).toBe(true)
    })

    it('should return false when the number is equal to the upper bound', () => {
      expect(isLT(10, 10)).toBe(false)
    })

    it('should return false when the number is greater than the upper bound', () => {
      expect(isLT(15, 10)).toBe(false)
    })

    it('should return true when the number is negative and the upper bound is positive', () => {
      expect(isLT(-5, 10)).toBe(true)
    })

    it('should return false when the number is positive and the upper bound is negative', () => {
      expect(isLT(5, -10)).toBe(false)
    })

    it('should return true when both the number and the upper bound are negative and the number is less than the upper bound', () => {
      expect(isLT(-15, -10)).toBe(true)
    })

    it('should return false when both the number and the upper bound are negative and the number is greater than the upper bound', () => {
      expect(isLT(-5, -10)).toBe(false)
    })
  })
})
