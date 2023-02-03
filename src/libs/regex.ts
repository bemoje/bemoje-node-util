export type RexecOutput = {
  index: number;
  match: string;
  groups: Record<string, any>;
  lastIndex: number;
};

/**
 * Easily perform regex 'exec' on a string. An iterable is returned which steps through the exec process and yields all
 * the details you might need.
 * @param regex - The regular expression object
 * @param str - The string to perform the operation on
 * @example
 * ```js
 * const regex = /(?<group1>a)|(?<group2>d)/g
 * const str = 'Anthony wants a girlfriend.'
 * console.log([...rexec(regex, str)])
 * // [
 * // 	{
 * //     index: 9,
 * //     match: 'a',
 * //     groups: { g1: 'a', g2: undefined },
 * //     lastIndex: 10,
 * //   },
 * //   {
 * //     index: 14,
 * //     match: 'a',
 * //     groups: { g1: 'a', g2: undefined },
 * //     lastIndex: 15,
 * //   },
 * //   {
 * //     index: 25,
 * //     match: 'd',
 * //     groups: { g1: undefined, g2: 'd' },
 * //     lastIndex: 26,
 * //   },
 * // ]
 * ```
 */
export function* rexec(regex: RegExp, str: string): Generator<RexecOutput> {
  let arr;
  while ((arr = regex.exec(str)) !== null) {
    yield {
      index: arr.index,
      match: arr[0],
      groups: Object.assign({}, arr.groups),
      lastIndex: regex.lastIndex,
    };
  }
}

/**
 * Returns an array of named groups defined inside a RegExp instance.
 * @param re RegExp instance to extract named groups from.
 */
export function regexGetGroupNames(re: RegExp): Array<string> {
  const names = [];
  for (const res of rexec(/\(\?<(?<name>\w+)>/g, re.toString())) {
    names.push(res.groups.name);
  }
  return names;
}
