import { isEven } from '../../number';
import { getCurrentYear, getCentury, assertValidDateDay, assertValidDateMonth } from '../../date';
import { regexMatcherToValidater } from '../../regex';

export const regexMatchSocialSecurityNumberDK = /(?<dd>[0-3][0-9])(?<mm>[0-1][0-9])(?<yy>[0-9]{2}).?(?<id>[0-9]{4})/g;

/**
 * Extract birthdate (yyyy,mm,dd), four digit id and sex from a Danish social security number.
 * Assumes birth dates are at most 100 years in the past.
 */
export function parseSocialSecurityNumberDK(ssn: string): {
  year: number;
  month: number;
  day: number;
  id: number;
  sex: string;
} {
  const match = ssn.match(regexMatcherToValidater(regexMatchSocialSecurityNumberDK));
  if (!match || !match.groups)
    throw new Error(`Invalid Danish social security number format. Expected ddmmyy[-]xxxx. Got: ${ssn}`);
  const { dd, mm, yy, id } = match.groups;
  const intDay = parseInt(dd);
  const intMon = parseInt(mm);
  const curYear = getCurrentYear();
  const intYear =
    parseInt(yy) > parseInt(String(curYear).substring(2))
      ? parseInt(`${getCentury(curYear) - 2}${yy}`)
      : parseInt(`${getCentury(curYear) - 1}${yy}`);
  assertValidDateDay(intDay, intMon, intYear);
  assertValidDateMonth(intMon);
  const intId = parseInt(id);
  const sex = isEven(parseInt(id.substring(3))) ? 'F' : 'M';
  return {
    year: intYear,
    month: intMon,
    day: intDay,
    id: intId,
    sex,
  };
}

/**
 * Determine whether a string is a valid Danish social security number.
 */
export function isSocialSecurityNumberDK(s: string): boolean {
  try {
    parseSocialSecurityNumberDK(s);
    return true;
  } catch (e) {
    return false;
  }
}
