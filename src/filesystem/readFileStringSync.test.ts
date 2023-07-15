import { readFileStringSync } from './readFileStringSync'

describe('readFileStringSync', () => {
  it('example', () => {
    expect(readFileStringSync(__filename).indexOf('describe(') !== -1).toBe(true)
  })
})
