import { isInRange } from './isInRange'

describe('isInRange', () => {
  it('should return true when number is within the range and range is inclusive', () => {
    expect(isInRange(5, [1, 10])).toBe(true)
  })

  it('should return false when number is outside the range and range is inclusive', () => {
    expect(isInRange(15, [1, 10])).toBe(false)
  })

  it('should return true when number is equal to the start of the range and range start is inclusive', () => {
    expect(isInRange(1, [1, 10])).toBe(true)
  })

  it('should return true when number is equal to the end of the range and range end is inclusive', () => {
    expect(isInRange(10, [1, 10])).toBe(true)
  })

  it('should return false when number is equal to the start of the range and range start is exclusive', () => {
    expect(isInRange(1, [1, 10], [true, false])).toBe(false)
  })

  it('should return false when number is equal to the end of the range and range end is exclusive', () => {
    expect(isInRange(10, [1, 10], [false, true])).toBe(false)
  })

  it('should return true when number is within the range and range is exclusive', () => {
    expect(isInRange(5, [1, 10], [true, true])).toBe(true)
  })

  it('should return false when number is outside the range and range is exclusive', () => {
    expect(isInRange(15, [1, 10], [true, true])).toBe(false)
  })
})
