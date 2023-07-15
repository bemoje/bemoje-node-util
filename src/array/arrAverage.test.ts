import { arrAverage } from './arrAverage'

describe('arrAverage', () => {
  it('should return the average of an array of numbers', () => {
    expect(arrAverage([1, 2, 3, 4, 5])).toBe(3)
    expect(arrAverage([0, 0, 0, 0, 0])).toBe(0)
    expect(arrAverage([-1, 1])).toBe(0)
  })

  it('should return 0 when the array is empty', () => {
    expect(arrAverage([])).toBe(0)
  })

  it('should return the average of the array', () => {
    expect(arrAverage([1, 2, 3, 4, 5])).toBe(3)
    expect(arrAverage([10, 20, 30, 40, 50])).toBe(30)
    expect(arrAverage([-1, 0, 1])).toBe(0)
  })
})
