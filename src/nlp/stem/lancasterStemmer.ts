import path from 'path'
import { readJsonFileSync } from '../../filesystem/readJsonFileSync'

/**
 * Get the stem from a given value.
 * @remarks This is a commonjs port of the ESM only package: https://www.npmjs.com/package/lancaster-stemmer
 * @param value Value to stem.
 */
export function lancasterStemmer(value: string): string {
  if (!rules) {
    rules = (
      readJsonFileSync(path.join(__dirname, 'data', 'lancasterRules.json')) as [string, [string, string, number][]][]
    ).reduce((accum: ILancasterRules, [letter, rules]) => {
      accum[letter] = rules.map(([match, replacement, type]) => {
        return { match, replacement, type }
      })
      return accum
    }, {})
  }
  const vowels = /[aeiouy]/
  return (function applyRules(value: string, isIntact: boolean): string {
    const ruleset = rules[value.charAt(value.length - 1)]
    let index = -1
    if (!ruleset) {
      return value
    }
    while (++index < ruleset.length) {
      const rule = ruleset[index]
      if (!isIntact && (rule.type === 0 || rule.type === 3)) {
        continue
      }
      const breakpoint = value.length - rule.match.length
      if (breakpoint < 0 || value.slice(breakpoint) !== rule.match) {
        continue
      }
      if (rule.type === 2) {
        return value
      }
      const next = value.slice(0, breakpoint) + rule.replacement
      if (!(vowels.test(next.charAt(0)) ? next.length > 1 : next.length > 2 && vowels.test(next))) {
        continue
      }
      if (rule.type === 1 || rule.type === 3) {
        return applyRules(next, false)
      }
      return next
    }
    return value
  })(String(value).toLowerCase(), true)
}

let rules: ILancasterRules

interface ILancasterRule {
  /**
   * what to match
   */
  match: string
  /**
   * the replacementacement string
   */
  replacement: string
  /**
   * the type of rule
   * @remakrs
   * type -1: cont
   * type 0: intact
   * type 1: stop
   * type 2: protect
   * type 3: contint
   */
  type: number
}

interface ILancasterRules {
  [key: string]: Array<ILancasterRule>
}
