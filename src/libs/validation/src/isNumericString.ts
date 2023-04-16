import {
  regNumberInteger,
  regNumberNoThousandSepEU,
  regNumberNoThousandSepUS,
  regNumberEUFormat,
  regNumberUSFormat,
  regexMatcherToValidater,
} from '../../regex'

const validators = [
  regNumberInteger,
  regNumberNoThousandSepEU,
  regNumberNoThousandSepUS,
  regNumberEUFormat,
  regNumberUSFormat,
].map((regex) => regexMatcherToValidater(regex))

/**
 * Checks if a string is a number.
 * @param str - input string
 */
export function isNumericString(str: string): boolean {
  str = str.trim()
  let n = Number(str)
  if (isNaN(n) || !isFinite(n)) {
    n = parseFloat(str)
  }
  return !isNaN(n) && isFinite(n) && validators.some((regex) => regex.test(str))
}
