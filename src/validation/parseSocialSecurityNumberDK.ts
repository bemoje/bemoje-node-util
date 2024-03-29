import { isEven } from '../number/isEven'
import { getCentury } from '../date/getCentury'
import { getCurrentYear } from '../date/getCurrentYear'
import { regSocialSecurityNumbersDK } from '../regexlib/regSocialSecurityNumbersDK'
import { regexMatcherToValidater } from '../regex/regexMatcherToValidater'
import { isValidDate } from '../date/isValidDate'
import { ParsedSocialSecurityNumberDK } from './types/ParsedSocialSecurityNumberDK'

/**
 * Extract birthdate (yyyy,mm,dd), four digit id and sex from a Danish social security number.
 * Assumes birth dates are at most 100 years in the past.
 * @returns An object containing the birth year, month, day, id, and sex of the individual.
 * @throws Will throw an error if the SSN is not a valid Danish Social Security Number.
 * @param ssn Danish social security number
 * @example ```ts
 * const ssn = '010203-1234'
 * parseSocialSecurityNumberDK(ssn)
 * //=> { year: 2003, month: 2, day: 1, id: 1234, sex: 'F' }
 * ```
 */
export function parseSocialSecurityNumberDK(ssn: string): ParsedSocialSecurityNumberDK | undefined {
  const match = ssn.match(regexMatcherToValidater(regSocialSecurityNumbersDK))
  if (!match || !match.groups) return undefined
  const { dd, mm, yy, id4 } = match.groups
  const day = parseInt(dd)
  const month = parseInt(mm)
  const iCurYear = getCurrentYear()
  const isMinusTwo = parseInt(yy) > parseInt(String(iCurYear).substring(2))
  const year = parseInt(`${getCentury(iCurYear) - (isMinusTwo ? 2 : 1)}${yy}`)
  if (!isValidDate(year, month, day)) return undefined
  const id = parseInt(id4)
  const sex = isEven(parseInt(id4.substring(3))) ? 'F' : 'M'
  return { year, month, day, id, sex }
}
