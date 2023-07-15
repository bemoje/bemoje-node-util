import { setNonEnumerableSafe } from './setNonEnumerableSafe'

describe('setNonEnumerableSafe', () => {
  it('should set the specified properties of an object as non-enumerable', () => {
    const obj = { a: 1, b: 2, c: 3 }
    setNonEnumerableSafe(obj, 'a', 'b')
    const properties = Object.keys(obj)
    expect(properties).toEqual(['c'])
  })

  it('should ignore properties that do not exist on the object', () => {
    const obj = { a: 1, b: 2, c: 3 }
    setNonEnumerableSafe(obj, 'd')
    const properties = Object.keys(obj)
    expect(properties).toEqual(['a', 'b', 'c'])
  })

  it('should not throw an error if a specified property does not have a descriptor', () => {
    const obj = {}
    expect(() => setNonEnumerableSafe(obj, 'b')).not.toThrow()
  })
})
