import * as util from '../src/libs/parse'

describe('parseSocialSecurityNumberDK', () => {
  it('correctly parses Danish SSN 20th century', () => {
    const { year, month, day, id, sex } = util.parseSocialSecurityNumberDK('201187-1234')
    expect(year).toBe(1987)
    expect(month).toBe(11)
    expect(day).toBe(20)
    expect(id).toBe(1234)
    expect(sex).toBe('F')
  })
  it('correctly parses Danish SSN 21st century', () => {
    const { year, month, day, id, sex } = util.parseSocialSecurityNumberDK('011209-1235')
    expect(year).toBe(2009)
    expect(month).toBe(12)
    expect(day).toBe(1)
    expect(id).toBe(1235)
    expect(sex).toBe('M')
  })
  it('throws on invalid format', () => {
    expect(() => util.parseSocialSecurityNumberDK('011209--1235')).toThrowError(
      'Invalid Danish social security number format. Expected ddmmyy[-]xxxx. Got: 011209--1235',
    )
    expect(() => util.parseSocialSecurityNumberDK('011209-12350')).toThrowError(
      'Invalid Danish social security number format. Expected ddmmyy[-]xxxx. Got: 011209-12350',
    )
  })
  it('throws on invalid birthdate - day', () => {
    expect(() => util.parseSocialSecurityNumberDK('001209-1235')).toThrowError(`Expected valid birth date.`)
    expect(() => util.parseSocialSecurityNumberDK('321209-1235')).toThrowError(`Expected valid birth date.`)
  })
  it('throws on invalid birthdate - month', () => {
    expect(() => util.parseSocialSecurityNumberDK('010009-1235')).toThrowError(`Expected valid birth date.`)
    expect(() => util.parseSocialSecurityNumberDK('011332-1235')).toThrowError(`Expected valid birth date.`)
  })
})

describe('isSocialSecurityNumberDK', () => {
  it('Correct validates Danish SSN', () => {
    expect(util.isSocialSecurityNumberDK('201187-1234')).toBe(true)
    expect(util.isSocialSecurityNumberDK('201187-1234')).toBe(true)
    expect(util.isSocialSecurityNumberDK('011209-1235')).toBe(true)
    expect(util.isSocialSecurityNumberDK('011209--1235')).toBe(false)
    expect(util.isSocialSecurityNumberDK('011209-12350')).toBe(false)
    expect(util.isSocialSecurityNumberDK('001209-1235')).toBe(false)
    expect(util.isSocialSecurityNumberDK('321209-1235')).toBe(false)
    expect(util.isSocialSecurityNumberDK('010009-1235')).toBe(false)
    expect(util.isSocialSecurityNumberDK('011332-1235')).toBe(false)
  })
})
