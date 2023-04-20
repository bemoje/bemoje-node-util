import * as util from '../src/libs/regex'

describe('rexec', () => {
  it('example', () => {
    const re = /(?<g1>a)/g
    const str = 'Anthony wants a girlfriend.'
    const result = [...util.rexec(re, str)]
    expect(result).toStrictEqual([
      {
        index: 9,
        match: 'a',
        groups: { g1: 'a' },
        lastIndex: 10,
      },
      {
        index: 14,
        match: 'a',
        groups: { g1: 'a' },
        lastIndex: 15,
      },
    ])
  })
})

describe('regexGetGroupNames', () => {
  it('returns empty array when no groups defined', () => {
    const re = /hello (\w+) are you (\w+)/g
    expect(util.regexGetGroupNames(re)).toStrictEqual([])
  })
  it('gets group names', () => {
    const re = /hello (?<group1>\w+) are you (?<group2>\w+)/g
    expect(util.regexGetGroupNames(re)).toStrictEqual(['group1', 'group2'])
  })
})

describe('regexEscapeString', () => {
  it('escapes correctly', () => {
    expect(util.regexEscapeString('[click](google.com)')).toBe('\\[click\\]\\(google\\.com\\)')
  })
  it('works when creating RegExp object', () => {
    expect(() => {
      new RegExp(util.regexEscapeString('[.^$()]*(wow)+'), 'g')
    }).not.toThrowError()
  })
})

describe('regexMatcherToValidater', () => {
  it('works', () => {
    const regexMatchDigits = /\d+/g
    const regexIsDigit = util.regexMatcherToValidater(regexMatchDigits) //=> /^\d$/
    const isDigit = (str: string) => regexIsDigit.test(str)
    expect(isDigit('1')).toBe(true)
    expect(isDigit('a')).toBe(false)
  })
})

describe('BemojeRegex', () => {
  describe('constructor', () => {
    it('should create a new instance of BemojeRegex', () => {
      const regex = new util.BemojeRegex(/abc/)
      expect(regex).toBeInstanceOf(util.BemojeRegex)
    })

    it('should create a new instance of RegExp if source is RegExp and flags are not provided', () => {
      const regex = new util.BemojeRegex(/abc/)
      expect(regex).toBeInstanceOf(RegExp)
    })

    it('should use default options if options are not provided', () => {
      const regex = new util.BemojeRegex('abc')
      expect(regex.options).toEqual({
        escapeSourceString: false,
        fixFlags: false,
      })
    })

    it('should use provided options if options are provided', () => {
      const regex = new util.BemojeRegex('abc', '', { escapeSourceString: true })
      expect(regex.options).toEqual({
        escapeSourceString: true,
        fixFlags: false,
      })
    })

    it('should escape source string if escapeSourceString option is true', () => {
      const regex = new util.BemojeRegex('[a-z]', '', { escapeSourceString: true })
      expect(regex.source).toEqual('\\[a-z\\]')
    })

    it('should fix flags if fixFlags option is true', () => {
      const regex = new util.BemojeRegex('', 'gimy')
      expect(regex.flags).toEqual('gimy')
    })
  })

  describe('compareTo', () => {
    it('should return true if the RegExp instance has same source and flags', () => {
      const regex1 = new util.BemojeRegex(/abc/, 'gi')
      const regex2 = /abc/gi
      expect(regex1.compareTo(regex2)).toBe(true)
    })

    it("should return false if the RegExp instance doesn't have same source and flags", () => {
      const regex1 = new util.BemojeRegex(/abc/, 'gi')
      const regex2 = /def/gi
      expect(regex1.compareTo(regex2)).toBe(false)
    })
  })

  describe('compareToStrict', () => {
    it("should return false if the RegExp instance isn't a BemojeRegex instance", () => {
      const regex1 = new util.BemojeRegex(/abc/, 'gi')
      const regex2 = /abc/gi
      expect(regex1.compareToStrict(regex2)).toBe(false)
    })

    it("should return false if the RegExp instance doesn't have same source and flags", () => {
      const regex1 = new util.BemojeRegex(/abc/, 'gi')
      const regex2 = new util.BemojeRegex(/def/, 'gi')
      expect(regex1.compareToStrict(regex2)).toBe(false)
    })

    it('should return true if the RegExp instance has same source and flags and is also a BemojeRegex instance', () => {
      const regex1 = new util.BemojeRegex(/abc/, 'gi')
      const regex2 = new util.BemojeRegex(/abc/, 'gi')
      expect(regex1.compareToStrict(regex2)).toBe(true)
    })
  })

  describe('toRegExp', () => {
    it('should convert a BemojeRegex instance to a RegExp instance', () => {
      expect(new util.BemojeRegex(/abc/, 'gi').toRegExp()).toBeInstanceOf(RegExp)
    })
  })
})

describe('regexValidFlags', () => {
  it('should return the expected flags', () => {
    expect(util.regexValidFlags()).toEqual(['g', 'i', 'm', 's', 'u', 'y'])
  })
})

describe('regexMatchBetween', () => {
  it('should match a string between two given strings or regexes', () => {
    const input = 'Hello world! This is a test string.'
    const matchBetween = util.regexMatchBetween('Hello', 'test')
    const result = [...matchBetween(input)]
    expect(result).toEqual([
      {
        left: { index: 0, match: 'Hello', groups: {}, lastIndex: 5 },
        mid: { index: 5, match: ' world! This is a ', groups: {}, lastIndex: 23 },
        right: { index: 23, match: 'test', groups: {}, lastIndex: 27 },
      },
    ])
  })
})

describe('regexIsValidFlags', () => {
  it('should return true for valid flags', () => {
    expect(util.regexIsValidFlags('g')).toBe(true)
    expect(util.regexIsValidFlags('i')).toBe(true)
    expect(util.regexIsValidFlags('m')).toBe(true)
    expect(util.regexIsValidFlags('s')).toBe(true)
    expect(util.regexIsValidFlags('u')).toBe(true)
    expect(util.regexIsValidFlags('y')).toBe(true)
    expect(util.regexIsValidFlags('gi')).toBe(true)
    expect(util.regexIsValidFlags('gim')).toBe(true)
    expect(util.regexIsValidFlags('gimsuy')).toBe(true)
    expect(util.regexIsValidFlags('gmisuy')).toBe(true)
  })

  it('should return false for invalid flags', () => {
    expect(util.regexIsValidFlags('a')).toBe(false)
    expect(util.regexIsValidFlags('gg')).toBe(false)
    expect(util.regexIsValidFlags('gmisuyy')).toBe(false)
  })
})

describe('regexFixFlags', () => {
  it('should return an empty string when passed an empty string', () => {
    expect(util.regexFixFlags('')).toBe('')
  })

  it('should remove duplicate flags', () => {
    expect(util.regexFixFlags('ggg')).toBe('g')
    expect(util.regexFixFlags('iiii')).toBe('i')
    expect(util.regexFixFlags('mmmm')).toBe('m')
    expect(util.regexFixFlags('ssss')).toBe('s')
    expect(util.regexFixFlags('uuuu')).toBe('u')
    expect(util.regexFixFlags('yyyy')).toBe('y')
  })

  it('should remove invalid flags', () => {
    expect(util.regexFixFlags('a')).toBe('')
    expect(util.regexFixFlags('?')).toBe('')
    expect(util.regexFixFlags('*')).toBe('')
  })

  it('should sort flags alphabetically', () => {
    expect(util.regexFixFlags('gimsuy')).toBe('gimsuy')
    expect(util.regexFixFlags('yusmig')).toBe('gimsuy')
  })
})

describe('buildRegexBetween', () => {
  it('should build a regex that matches a string between two strings', () => {
    const regex = util.buildRegexBetween('a', 'b')
    expect(regex.source).toBe('(?<left>a)(?<mid>.*?)(?=b)(?<right>b)')
  })

  it('should build a regex that matches a string between two regexes', () => {
    const regex = util.buildRegexBetween(/a/, /b/)
    expect(regex.source).toBe('(?<left>a)(?<mid>.*?)(?=b)(?<right>b)')
  })

  it('should add "g" and "s" flags by default', () => {
    const regex = util.buildRegexBetween('a', 'b')
    expect(regex.flags).toBe('gs')
  })

  it('should add flags passed as argument', () => {
    const regex = util.buildRegexBetween('a', 'b', 'i')
    expect(regex.flags).toBe('gis')
  })
})
