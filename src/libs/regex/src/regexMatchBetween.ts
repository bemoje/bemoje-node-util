import { rexec, regexEscapeString, RexecYield } from '../'
import { strRemoveDuplicateChars } from '../../string'

export type matchBetweenYield = {
  left: RexecYield
  mid: RexecYield
  right: RexecYield
}
export type matchBetweenFunction = (input: string) => Generator<matchBetweenYield>

/**
 * Returns a function that matches a string between two given strings or regexes.
 * @param left - string or regex to match before
 * @param right - string or regex to match after
 * @param flags - regex flags - 'g' and 's' are always added to whatever flags are passed.
 * @example
 * ```ts
 * const input = 'Hello world! This is a test string.'
 * const matchBetween = regexMatchBetween('Hello', 'test')
 * [...matchBetween(input)]
 * // [
 * //   {
 * //     left: { index: 0, match: 'Hello', groups: {}, lastIndex: 5 },
 * //     mid: { index: 12, match: ' world! This is a ', groups: {}, lastIndex: 31 },
 * //     right: { index: 36, match: 'test', groups: {}, lastIndex: 40 },
 * //   },
 * // ]
 * ```
 */
export function regexMatchBetween(left: string | RegExp, right: string | RegExp, flags?: string): matchBetweenFunction {
  left = typeof left === 'string' ? regexEscapeString(left) : left.source
  right = typeof right === 'string' ? regexEscapeString(right) : right.source
  flags = flags ? strRemoveDuplicateChars('gs' + flags) : 'gs'
  const reLeft = new RegExp(`${left}`, flags)
  const reRight = new RegExp(`${right}`, flags)

  return function* (input: string): Generator<matchBetweenYield> {
    const matchesRight = [...rexec(reRight, input)]
    for (const left of rexec(reLeft, input)) {
      for (const right of matchesRight) {
        if (left.lastIndex > right.index) continue
        const mid = {
          index: left.lastIndex,
          match: input.substring(left.lastIndex, right.index),
          groups: Object.create(null),
          lastIndex: right.index,
        }
        yield { left, mid, right }
        break
      }
    }
  }
}
