import * as util from '../src/libs/spreadsheet'

describe('A1ToColRow', () => {
  it('accepts simple string', () => {
    expect(util.A1ToColRow('C1')).toStrictEqual([3, 1])
  })
  it('accepts long col letters', () => {
    expect(util.A1ToColRow('AA3')).toStrictEqual([27, 3])
    expect(util.A1ToColRow('AC3')).toStrictEqual([29, 3])
    expect(util.A1ToColRow('AAA3')).toStrictEqual([703, 3])
  })
  it('accepts long row numbers', () => {
    expect(util.A1ToColRow('A33')).toStrictEqual([1, 33])
    expect(util.A1ToColRow('A333')).toStrictEqual([1, 333])
  })
  it('accepts long row numbers and col numbers simultaneously', () => {
    expect(util.A1ToColRow('AA33')).toStrictEqual([27, 33])
    expect(util.A1ToColRow('AAA333')).toStrictEqual([703, 333])
  })
  it('works with zero-index', () => {
    expect(util.A1ToColRow('C1', true)).toStrictEqual([2, 0])
  })
  it('throws on invalid A1 string', () => {
    expect(() => util.A1ToColRow('')).toThrowError()
    expect(() => util.A1ToColRow('A')).toThrowError()
    expect(() => util.A1ToColRow('1')).toThrowError()
    expect(() => util.A1ToColRow('1A')).toThrowError()
    expect(() => util.A1ToColRow('1A1')).toThrowError()
    expect(() => util.A1ToColRow('A1A')).toThrowError()
  })
})

describe('colRowToA1', () => {
  it('example', () => {
    expect(util.colRowToA1([3, 1])).toStrictEqual('C1')
  })
  it('converts to long col letters', () => {
    expect(util.colRowToA1([27, 3])).toStrictEqual('AA3')
    expect(util.colRowToA1([29, 3])).toStrictEqual('AC3')
    expect(util.colRowToA1([703, 3])).toStrictEqual('AAA3')
  })
  it('converts to long row numbers', () => {
    expect(util.colRowToA1([1, 33])).toStrictEqual('A33')
    expect(util.colRowToA1([1, 333])).toStrictEqual('A333')
  })
  it('converts to long row numbers and col numbers simultaneously', () => {
    expect(util.colRowToA1([27, 33])).toStrictEqual('AA33')
    expect(util.colRowToA1([703, 333])).toStrictEqual('AAA333')
  })
  it('throws on invalid [col, row]: length not 2', () => {
    expect(() => util.colRowToA1([1, 1, 1])).toThrowError()
  })
  it('throws on invalid [col, row]: col < 1', () => {
    expect(() => util.colRowToA1([0, 1])).toThrowError()
  })
  it('throws on invalid [col, row]: row < 1', () => {
    expect(() => util.colRowToA1([1, 0])).toThrowError()
  })
  it('throws on invalid [col, row]: col not integer', () => {
    expect(() => util.colRowToA1([1.1, 1])).toThrowError()
  })
  it('throws on invalid [col, row]: col not integer', () => {
    expect(() => util.colRowToA1([1, 1.1])).toThrowError()
  })
})

describe('colToLetter', () => {
  it('should return the correct letter for column numbers', () => {
    expect(util.colToLetter(1)).toBe('A')
    expect(util.colToLetter(2)).toBe('B')
    expect(util.colToLetter(26)).toBe('Z')
    expect(util.colToLetter(27)).toBe('AA')
    expect(util.colToLetter(28)).toBe('AB')
    expect(util.colToLetter(52)).toBe('AZ')
    expect(util.colToLetter(53)).toBe('BA')
  })
  it('should throw an error for invalid input', () => {
    expect(() => util.colToLetter(-1)).toThrow()
    expect(() => util.colToLetter(0)).toThrow()
    expect(() => util.colToLetter(1.5)).toThrow()
  })
  it('should return the correct letter for zero-indexed column numbers', () => {
    expect(util.colToLetter(0, true)).toBe('A')
    expect(util.colToLetter(1, true)).toBe('B')
    expect(util.colToLetter(25, true)).toBe('Z')
    expect(util.colToLetter(26, true)).toBe('AA')
    expect(util.colToLetter(27, true)).toBe('AB')
  })
})

describe('letterToCol', () => {
  it('should return the correct column number for column letters', () => {
    expect(util.letterToCol('A')).toBe(1)
    expect(util.letterToCol('B')).toBe(2)
    expect(util.letterToCol('Z')).toBe(26)
    expect(util.letterToCol('AA')).toBe(27)
    expect(util.letterToCol('AB')).toBe(28)
    expect(util.letterToCol('AZ')).toBe(52)
    expect(util.letterToCol('BA')).toBe(53)
  })
  it('should return the correct column number for column letters with different cases', () => {
    expect(util.letterToCol('a')).toBe(1)
    expect(util.letterToCol('b')).toBe(2)
    expect(util.letterToCol('z')).toBe(26)
    expect(util.letterToCol('aa')).toBe(27)
    expect(util.letterToCol('ab')).toBe(28)
    expect(util.letterToCol('az')).toBe(52)
    expect(util.letterToCol('ba')).toBe(53)
  })
  it('should throw an error for invalid input', () => {
    expect(() => util.letterToCol('-1')).toThrow()
    expect(() => util.letterToCol('0')).toThrow()
  })
  it('should return the correct column number for zero-indexed column letters', () => {
    expect(util.letterToCol('A', true)).toBe(0)
    expect(util.letterToCol('B', true)).toBe(1)
    expect(util.letterToCol('Z', true)).toBe(25)
    expect(util.letterToCol('AA', true)).toBe(26)
    expect(util.letterToCol('AB', true)).toBe(27)
  })
})
