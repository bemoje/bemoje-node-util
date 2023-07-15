import { setNonWritable } from './setNonWritable'

describe('setNonWritable', () => {
  it('should set the writable property to true.', () => {
    const o = { a: 1 }
    setNonWritable(o, 'a')
    expect(() => (o.a = 2)).toThrowError()
    expect(o.a).toBe(1)
  })
})
