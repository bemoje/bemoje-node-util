export type RexecYield = {
  index: number
  lastIndex: number
  groups: Record<string, string>
  match: string
}

/**
 * Easily perform regex 'exec' on a string. An iterable is returned which steps through the exec process and yields all the details you might need.
 * @param regex - The regular expression object
 * @param string - The string to perform the operation on
 * @example
 * ```js
 * const regex = /(?<g1>a)/g
 * const str = 'Anthony wants a girlfriend.'
 * console.log([...rexec(regex, str)])
 * // [
 * // 	{
 * //     index: 9,
 * //     lastIndex: 10,
 * //     groups: { g1: 'a' },
 * //     match: 'a',
 * //   },
 * //   {
 * //     index: 14,
 * //     lastIndex: 15,
 * //     groups: { g1: 'a' },
 * //     match: 'a',
 * //   },
 * // ]
 * ```
 */
export function* rexec(regex: RegExp, string: string): Generator<RexecYield> {
  let match
  while ((match = regex.exec(string)) !== null) {
    yield {
      index: match.index,
      lastIndex: regex.lastIndex,
      groups: Object.assign({}, match.groups),
      match: match[0],
    }
  }
}
