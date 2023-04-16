import { isEven } from '../../number'
import { getCurrentYear, getCentury } from '../../date'
import { regexMatcherToValidater, regMatchSocialSecurityNumberDK } from '../../regex'
import { isValidDate } from '../../date'

/**
 * Extract birthdate (yyyy,mm,dd), four digit id and sex from a Danish social security number.
 * Assumes birth dates are at most 100 years in the past.
 * @param ssn - Danish social security number
 */
export function parseSocialSecurityNumberDK(ssn: string): {
  year: number
  month: number
  day: number
  id: number
  sex: string
} {
  const match = ssn.match(regexMatcherToValidater(regMatchSocialSecurityNumberDK))
  if (!match || !match.groups)
    throw new Error(`Invalid Danish social security number format. Expected ddmmyy[-]xxxx. Got: ${ssn}`)
  const { dd, mm, yy, id } = match.groups
  const iDay = parseInt(dd)
  const iMon = parseInt(mm)
  const iCurYear = getCurrentYear()
  const iYear =
    parseInt(yy) > parseInt(String(iCurYear).substring(2))
      ? parseInt(`${getCentury(iCurYear) - 2}${yy}`)
      : parseInt(`${getCentury(iCurYear) - 1}${yy}`)
  if (!isValidDate(iYear, iMon, iDay)) {
    throw new Error(`Expected valid birth date.`)
  }
  const iId = parseInt(id)
  const sex = isEven(parseInt(id.substring(3))) ? 'F' : 'M'
  return {
    year: iYear,
    month: iMon,
    day: iDay,
    id: iId,
    sex,
  }
}

/**
 * Determine whether a string is a valid Danish social security number.
 * @param s - String to test
 */
export function isSocialSecurityNumberDK(s: string): boolean {
  try {
    parseSocialSecurityNumberDK(s)
    return true
  } catch (e) {
    return false
  }
}
