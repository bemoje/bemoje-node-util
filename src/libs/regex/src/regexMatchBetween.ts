import { rexec, matchBetweenFunction, matchBetweenYield, regexEscapeString } from '../'

/**
 * Returns a function that matches a string between two given strings or regexes.
 * @param left - string or regex to match before
 * @param right - string or regex to match after
 * @param flags - regex flags
 */
export function regexMatchBetween(left: string | RegExp, right: string | RegExp, flags = ''): matchBetweenFunction {
  left = typeof left === 'string' ? regexEscapeString(left) : left.source
  right = typeof right === 'string' ? regexEscapeString(right) : right.source
  flags = `gms${flags.replace(/g|m|s/g, '')}`
  const reLeft = new RegExp(`${left}`, flags)
  const reRight = new RegExp(`${right}`, flags)

  return function* (input: string): Generator<matchBetweenYield> {
    const matchesRight = [...rexec(reRight, input)]
    const seen = new WeakSet()
    for (const left of rexec(reLeft, input)) {
      for (const right of matchesRight) {
        if (left.lastIndex > right.index || seen.has(right)) continue
        seen.add(right)
        const mid = {
          index: left.lastIndex,
          match: input.substring(left.lastIndex, right.index),
          groups: {},
          lastIndex: right.index,
        }
        yield { left, mid, right }
        break
      }
    }
  }
}

// const code = `
// import { regexEscapeString } from '../../regex'

// /**
//  * Inserts provided strings before and after a string.
//  * @param input - input string
//  * @param before - string to place before
//  * @param after - string to place after
//  * @example
//  */
// export function strUnwrap(input: string, before: string, after: string, caseSensitive = true): string {
//   const flags = caseSensitive ? '' : 'i'
//   return input
//     .replace(new RegExp('^' + regexEscapeString(before), flags), '')
//     .replace(new RegExp(regexEscapeString(after) + '$', flags), '')
// }
// /**
//  * asdasdsad
//  * @param input - input string
//  * @param before - string to place before
//  * @param after - string to place after
//  * @example
//  */
// `

// const left = '/**'
// const right = ' */'
// const matchBlockComment = regexMatchBetween(left, right)
// for (const match of matchBlockComment(code)) {
//   console.log(match)
// }
