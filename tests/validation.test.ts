/* eslint-disable @typescript-eslint/no-empty-function */
import * as util from '../src/libs/validation'

describe('isConstructor', () => {
  it('returns true for class constructors', () => {
    expect(util.isConstructor(function () {})).toBe(true)
    expect(util.isConstructor(Array)).toBe(true)
    expect(util.isConstructor(class B {})).toBe(true)
  })
  it('returns false for non-functions', () => {
    expect(util.isConstructor([])).toBe(false)
    expect(util.isConstructor(null)).toBe(false)
    expect(util.isConstructor(undefined)).toBe(false)
    expect(util.isConstructor(function* () {})).toBe(false)
  })
  it('returns false for functions without prototype property', () => {
    expect(util.isConstructor(() => {})).toBe(false)
  })
  it('returns false for functions with incorrect prototype property', () => {
    function a() {}
    a.prototype = {}
    expect(util.isConstructor(a)).toBe(false)
  })
  it('returns false for functions with incorrect prototype circular refeerence', () => {
    function a() {}
    a.prototype = { constructor: function () {} }
    expect(util.isConstructor(a)).toBe(false)
  })
})

describe('isPrototype', () => {
  it('returns true for prototype objects', () => {
    expect(util.isPrototype(Array.prototype)).toBe(true)
  })
  it('returns false for non objects', () => {
    expect(util.isPrototype(1)).toBe(false)
  })
  it('returns false for objects with no constructor property', () => {
    expect(util.isPrototype({})).toBe(false)
  })
  it('returns false for objects with constructor but without circular reference', () => {
    expect(util.isPrototype({ constructor: function () {} })).toBe(false)
  })
})

describe('isObject', () => {
  it('returns true for objects', () => {
    expect(util.isObject({})).toBe(true)
    expect(util.isObject([])).toBe(true)
    expect(util.isObject(new RegExp(''))).toBe(true)
  })
  it('returns false for non-objects', () => {
    expect(util.isObject(null)).toBe(false)
    expect(util.isObject('')).toBe(false)
    expect(util.isObject(2)).toBe(false)
    expect(util.isObject(() => {})).toBe(false)
  })
})

describe('isHex', () => {
  it('returns true for hex strings', () => {
    expect(util.isHex('0')).toBe(true)
    expect(util.isHex('25af2')).toBe(true)
    expect(util.isHex('EF2A0')).toBe(true)
  })
  it('returns false for non-hex strings', () => {
    expect(util.isHex('g')).toBe(false)
    expect(util.isHex('25ah')).toBe(false)
  })
})

describe('isHexOrUnicode', () => {
  it('returns true for hex strings', () => {
    expect(util.isHexOrUnicode('0')).toBe(true)
    expect(util.isHexOrUnicode('25af2')).toBe(true)
    expect(util.isHexOrUnicode('EF2A0')).toBe(true)
    expect(util.isHexOrUnicode('0x0')).toBe(true)
    expect(util.isHexOrUnicode('0x25af2')).toBe(true)
    expect(util.isHexOrUnicode('\\u25af2')).toBe(true)
    expect(util.isHexOrUnicode('\\\\u25af2')).toBe(true)
    expect(util.isHexOrUnicode('0xEF2A0')).toBe(true)
    expect(util.isHexOrUnicode('\\uEF2A0')).toBe(true)
    expect(util.isHexOrUnicode('\\\\uEF2A0')).toBe(true)
  })
  it('returns false for non-hex strings', () => {
    expect(util.isHexOrUnicode('25ai2')).toBe(false)
    expect(util.isHexOrUnicode('0xg')).toBe(false)
    expect(util.isHexOrUnicode('\\ug')).toBe(false)
    expect(util.isHexOrUnicode('\\\\ug')).toBe(false)
  })
})
