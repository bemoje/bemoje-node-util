import { tsStripComments } from './tsStripComments'

describe(tsStripComments.name, () => {
  it('should return empty string on empty string as input', () => {
    expect(tsStripComments('')).toBe('')
  })
})
