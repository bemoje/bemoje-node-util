import { setNonEnumerable } from './setNonEnumerable'

describe('setNonEnumerable', () => {
  it('should set the enumerable property to true.', () => {
    const o = { a: 1 }
    expect(Object.keys(o).includes('a')).toBe(true)
    setNonEnumerable(o, 'a')
    expect(Object.keys(o).includes('a')).toBe(false)
  })
})
