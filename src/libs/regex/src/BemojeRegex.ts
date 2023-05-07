import { regexGetGroupNames } from './regexGetGroupNames'
import { regexEscapeString } from './regexEscapeString'
import { regexMatcherToValidater } from './regexMatcherToValidater'
import { rexec } from './rexec'
import { strSortChars } from '../../string/src/strSortChars'
import { regexIsValidFlags } from './regexIsValidFlags'
import { regexFixFlags } from './regexFixFlags'
import { regexValidFlags } from './regexValidFlags'
import type { RexecYield } from '../'

export type BemojeRegexOptions = {
  /**
   * Whether to insert escape characters into the source string.
   */
  escapeSourceString?: boolean

  /**
   * Whether to repair the flags string if it is not valid.
   */
  fixFlags?: boolean
}

/**
 * A RegExp class extension with extra features.
 */
export class BemojeRegex extends RegExp {
  protected static defaultOptions: BemojeRegexOptions = {
    escapeSourceString: false,
    fixFlags: false,
  }

  public options: BemojeRegexOptions

  public constructor(source: string | RegExp, flags = '', options?: BemojeRegexOptions) {
    if (source instanceof RegExp && !flags) {
      super(source)
    } else {
      options = Object.assign({}, BemojeRegex.defaultOptions, options)
      if (source instanceof RegExp) {
        flags = flags ? flags : source.flags
        source = source.source
      } else if (options?.escapeSourceString) {
        source = regexEscapeString(source)
      }
      if (options.fixFlags) {
        flags = regexFixFlags(flags)
      } else {
        flags = strSortChars(flags)
      }
      super(source, flags)
    }
    this.options = options || BemojeRegex.defaultOptions
  }

  /**
   * Checks if a string is a valid regex flags string.
   */
  public static isValidFlags = regexIsValidFlags

  /**
   * Takes a string of RegExp flags and returns a string guaranteed to be valid.
   * @param flags - string of RegExp flags
   */
  public static fixFlags = regexFixFlags

  /**
   * Returns an array of all valid flags for a regular expression.
   */
  public static getValidFlags = regexValidFlags

  /**
   * Returns true if the RegExp instance has same source and flags.
   * @param regex - RegExp instance to compare to.
   */
  public compareTo(regex: RegExp): boolean {
    return this.source === regex.source && this.flags === regex.flags
  }

  /**
   * Returns true if the RegExp instance is a also BemojeRegex instance and both have the same source and flags.
   * @param regex - RegExp instance to compare to.
   */
  public compareToStrict(regex: RegExp): boolean {
    return (
      regex instanceof BemojeRegex && this.source === regex.source && this.flags === regex.flags
    )
  }

  /**
   * Returns an array of named groups defined inside the RegExp instance.
   */
  public getGroupNames(): Array<string> {
    return regexGetGroupNames(this)
  }

  /**
   * Easily perform regex 'exec' on a string. An iterable is returned which steps through the exec process and yields all the details you might need.
   */
  public *rexec(string: string): Generator<RexecYield> {
    yield* rexec(this, string)
  }

  /**
   * Convert a regex for matching to a regex for validation.
   */
  public toValidator(): BemojeRegex {
    return Object.setPrototypeOf(regexMatcherToValidater(this), BemojeRegex.prototype)
  }

  /**
   * Convert the BemojeRegex instance to a RegExp instance.
   */
  public toRegExp(): RegExp {
    return Object.setPrototypeOf(this, RegExp.prototype)
  }
}

// declare global {
//   interface RegExp {
//     /**
//      * Convert the RegExp instance to a BemojeRegex instance.
//      */
//     get bemoje(): BemojeRegex
//   }
// }

// Object.defineProperty(RegExp.prototype, 'bemoje', {
//   get: function () {
//     return Object.setPrototypeOf(this, BemojeRegex.prototype)
//   },
// })

// const reg = new BemojeRegex(/(?<asd>\/\*\*)(?<aga3>.*?)(?=\*\/)(?<ahfdtr>\*\/)/gi)
// console.log(reg.getGroupNames())
// console.log(reg.getGroupNames())
// console.log(reg.toValidator())
// console.log(reg.toRegExp())
// const reg2 = new BemojeRegex(/abc/g)
// const str2 = 'lala abc lalala abc ...'
// console.log([...reg2.rexec(str2)])
