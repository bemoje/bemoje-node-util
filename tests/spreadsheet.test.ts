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
