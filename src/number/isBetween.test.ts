import { isBetween } from './isBetween'

describe('isBetween', () => {
  it('returns true if number is between lower and upper bounds', () => {
    expect(isBetween(5, 2, 8)).toBe(true)
  })

  it('returns false if number is equal to lower or upper bounds', () => {
    expect(isBetween(2, 2, 8, true, true)).toBe(false)
    expect(isBetween(8, 2, 8, true, true)).toBe(false)
  })

  it('returns false if number is outside of lower and upper bounds', () => {
    expect(isBetween(1, 2, 8)).toBe(false)
    expect(isBetween(10, 2, 8)).toBe(false)
  })
})
