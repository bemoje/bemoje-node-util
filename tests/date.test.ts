import * as util from '../src/libs/date'

describe('assertValidDateDay', () => {
  it('accepts valid', () => {
    expect(() => util.assertValidDateDay(1, 1)).not.toThrowError()
    expect(() => util.assertValidDateDay(5, 1)).not.toThrowError()
    expect(() => util.assertValidDateDay(31, 1)).not.toThrowError()
  })
  it('throws on invalid', () => {
    expect(() => util.assertValidDateDay(0, 1)).toThrowError()
    expect(() => util.assertValidDateDay(32, 1)).toThrowError()
  })
})

describe('assertValidDateMonth', () => {
  it('accepts valid', () => {
    expect(() => util.assertValidDateMonth(1)).not.toThrowError()
    expect(() => util.assertValidDateMonth(5)).not.toThrowError()
    expect(() => util.assertValidDateMonth(12)).not.toThrowError()
  })
  it('throws on invalid', () => {
    expect(() => util.assertValidDateMonth(0)).toThrowError()
    expect(() => util.assertValidDateMonth(13)).toThrowError()
  })
})

describe('assertValidDateYear', () => {
  it('accepts valid', () => {
    expect(() => util.assertValidDateYear(0)).not.toThrowError()
    expect(() => util.assertValidDateYear(1)).not.toThrowError()
    expect(() => util.assertValidDateYear(100)).not.toThrowError()
    expect(() => util.assertValidDateYear(2000)).not.toThrowError()
    expect(() => util.assertValidDateYear(2023)).not.toThrowError()
    expect(() => util.assertValidDateYear(2100)).not.toThrowError()
  })
  it('throws on invalid', () => {
    expect(() => util.assertValidDateYear(-1)).toThrowError()
    expect(() => util.assertValidDateYear(1.1)).toThrowError()
  })
})

describe('assertValidDate', () => {
  it('accepts valid', () => {
    expect(() => util.assertValidDate(2021, 2, 25, 13, 14, 52, 142)).not.toThrowError()
  })
  it('throws on invalid month', () => {
    expect(() => util.assertValidDate(2021, 0, 25)).toThrowError()
  })
})

describe('getCentury', () => {
  it('works', () => {
    expect(util.getCentury(0)).toBe(1)
    expect(util.getCentury(1)).toBe(1)
    expect(util.getCentury(112)).toBe(2)
    expect(util.getCentury(950)).toBe(10)
    expect(util.getCentury(1051)).toBe(11)
    expect(util.getCentury(2023)).toBe(21)
  })
  it('throws on invalid', () => {
    expect(() => util.getCentury(-1)).toThrowError()
    expect(() => util.getCentury(1.1)).toThrowError()
  })
})

describe('getCurrentYear', () => {
  it('works', () => {
    expect(util.getCurrentYear()).toBe(new Date().getUTCFullYear())
  })
})

describe('isLeapYear', () => {
  it('identifies leap years', () => {
    expect(util.isLeapYear(1996)).toBe(true)
    expect(util.isLeapYear(2000)).toBe(true)
    expect(util.isLeapYear(2004)).toBe(true)
    expect(util.isLeapYear(1200)).toBe(true)
  })
  it('identifies non-leap years', () => {
    expect(util.isLeapYear(1997)).toBe(false)
    expect(util.isLeapYear(2001)).toBe(false)
    expect(util.isLeapYear(2005)).toBe(false)
  })
  it('throws on invalid', () => {
    expect(() => util.isLeapYear(-1)).toThrowError()
    expect(() => util.isLeapYear(1.1)).toThrowError()
  })
})

describe('isValidDateDay', () => {
  it('identifies valid', () => {
    expect(util.isValidDateDay(1, 1)).toBe(true)
    expect(util.isValidDateDay(5, 1)).toBe(true)
    expect(util.isValidDateDay(31, 1)).toBe(true)
  })
  it('identifies invalid', () => {
    expect(util.isValidDateDay(0, 1)).toBe(false)
    expect(util.isValidDateDay(32, 1)).toBe(false)
  })
})

describe('isValidDateMonth', () => {
  it('identifies valid', () => {
    expect(util.isValidDateMonth(1)).toBe(true)
    expect(util.isValidDateMonth(5)).toBe(true)
    expect(util.isValidDateMonth(12)).toBe(true)
  })
  it('identifies invalid', () => {
    expect(util.isValidDateMonth(0)).toBe(false)
    expect(util.isValidDateMonth(13)).toBe(false)
  })
})

describe('isValidDateYear', () => {
  it('identifies valid', () => {
    expect(util.isValidDateYear(0)).toBe(true)
    expect(util.isValidDateYear(1)).toBe(true)
    expect(util.isValidDateYear(100)).toBe(true)
    expect(util.isValidDateYear(2000)).toBe(true)
    expect(util.isValidDateYear(2023)).toBe(true)
    expect(util.isValidDateYear(2100)).toBe(true)
  })
  it('identifies invalid', () => {
    expect(util.isValidDateYear(-1)).toBe(false)
    expect(util.isValidDateYear(1.1)).toBe(false)
  })
})

describe('numDaysInMonth', () => {
  it('works for all months', () => {
    expect(util.numDaysInMonth(1)).toBe(31)
    expect(util.numDaysInMonth(2)).toBe(28)
    expect(util.numDaysInMonth(3)).toBe(31)
    expect(util.numDaysInMonth(4)).toBe(30)
    expect(util.numDaysInMonth(5)).toBe(31)
    expect(util.numDaysInMonth(6)).toBe(30)
    expect(util.numDaysInMonth(7)).toBe(31)
    expect(util.numDaysInMonth(8)).toBe(31)
    expect(util.numDaysInMonth(9)).toBe(30)
    expect(util.numDaysInMonth(10)).toBe(31)
    expect(util.numDaysInMonth(11)).toBe(30)
    expect(util.numDaysInMonth(12)).toBe(31)
  })
  it('handles february in leap year', () => {
    expect(util.numDaysInMonth(2, 2024)).toBe(29)
    expect(util.numDaysInMonth(2, 2025)).toBe(28)
  })
  it('throws on invalid', () => {
    expect(() => util.numDaysInMonth(0)).toThrowError()
    expect(() => util.numDaysInMonth(13)).toThrowError()
  })
  it('throws on invalid', () => {
    expect(() => util.numDaysInMonth(-1)).toThrowError()
    expect(() => util.numDaysInMonth(1.1)).toThrowError()
  })
})

describe('isoDateTimestamp', () => {
  it('should return a string', () => {
    expect(typeof util.isoDateTimestamp()).toBe('string')
  })

  it('should return a string with only digits', () => {
    expect(util.isoDateTimestamp()).toMatch(/^\d+$/)
  })

  it('should return a string with length 17', () => {
    expect(util.isoDateTimestamp().length).toBe(17)
  })
})

describe('isoDateTimestampForFilename', () => {
  it('should return a string in the format of YYYY-MM-DD-HH-mm-SS-sss', () => {
    const date = new Date('2022-01-01T00:00:00.000Z')
    const result = util.isoDateTimestampForFilename(date)
    expect(result).toEqual('2022-01-01-00-00-00-000')
  })

  it('should return a string with the current date and time if no date is provided', () => {
    const result = util.isoDateTimestampForFilename()
    const regex = /^\d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}-\d{3}$/
    expect(result).toMatch(regex)
  })
})

describe('daysSinceDate', () => {
  it('should return 0 if the date is today', () => {
    const today = new Date()
    expect(util.daysSinceDate(today)).toBe(0)
  })

  it('should return a positive number if the date is in the past', () => {
    const date = new Date('2021-01-01')
    expect(util.daysSinceDate(date)).toBeGreaterThan(0)
  })

  it('should return a negative number if the date is in the future', () => {
    const date = new Date('2050-01-01')
    expect(util.daysSinceDate(date)).toBeLessThan(0)
  })
})

describe('dateDaysAgo', () => {
  it('should return a date that is the given number of days ago', () => {
    const today = new Date()
    const yesterday = util.dateDaysAgo(1)
    expect(yesterday.getDate()).toBe(today.getDate() - 1)
  })
})
