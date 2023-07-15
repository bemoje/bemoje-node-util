import { setNonEnumerablePrivateProperties } from './setNonEnumerablePrivateProperties'

describe('setNonEnumerablePrivateProperties', () => {
  it('should set the enumerable property to false for all property names starting with an underscore.', () => {
    const o = { _a: 1, _b: 2, c: 3 }
    setNonEnumerablePrivateProperties(o)
    expect(Object.keys(o)).toStrictEqual(['c'])
  })
})
