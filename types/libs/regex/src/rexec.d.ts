import { RexecYield } from '../';
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
 * //     match: 'a',
 * //     groups: { g1: 'a' },
 * //     lastIndex: 10,
 * //   },
 * //   {
 * //     index: 14,
 * //     match: 'a',
 * //     groups: { g1: 'a' },
 * //     lastIndex: 15,
 * //   },
 * // ]
 * ```
 */
export declare function rexec(regex: RegExp, string: string): Generator<RexecYield>;
//# sourceMappingURL=rexec.d.ts.map