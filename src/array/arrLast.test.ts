import { arrLast } from './arrLast'

describe('arrLast', () => {
  it('should return the last element of the array', () => {
    expect(arrLast([1, 2, 3])).toBe(3)
    expect(arrLast(['a', 'b', 'c'])).toBe('c')
  })

  it('should throw an error if the array is empty', () => {
    expect(() => arrLast([])).toThrow('Cannot get last element of empty array.')
  })
})
