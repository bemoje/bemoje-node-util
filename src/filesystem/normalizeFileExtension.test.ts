import { normalizeFileExtension } from './normalizeFileExtension'

describe('normalizeFileExtension', () => {
  it('example', () => {
    expect(normalizeFileExtension('.js')).toBe('.js')
    expect(normalizeFileExtension('js')).toBe('.js')
    expect(normalizeFileExtension('test.js')).toBe('.js')
    expect(normalizeFileExtension('.test.js')).toBe('.js')
    expect(normalizeFileExtension('.test.js')).toBe('.js')
    expect(normalizeFileExtension('..js')).toBe('.js')
    expect(() => normalizeFileExtension('.>s')).toThrowError()
  })
})
