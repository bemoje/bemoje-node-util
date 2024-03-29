import type { RexecYield } from './types/RexecYield';
/**
 * Easily perform regex 'exec' on a string. An iterable is returned which steps through the exec process and yields all the details you might need.
 * @param regex The regular expression object
 * @returns A generator that yields an object for each match.
 * @throws If the provided regex is not a RegExp instance.
 * @param string The string to perform the operation on
 * @example ```ts
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
export declare function rexec(regex: RegExp, string: string): Generator<RexecYield>;
//# sourceMappingURL=rexec.d.ts.map