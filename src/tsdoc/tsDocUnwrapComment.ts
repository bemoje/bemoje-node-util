import { strTrimLinesRight } from '../string/strTrimLinesRight'
import { strRemoveFirstAndLastLine } from '../string/strRemoveFirstAndLastLine'
import { assertValidTsDocComment } from './assertValidTsDocComment'

/**
 * Unwraps a TSDoc block comment, removing the comment markers and leading asterisks.
 * Throws an error if the provided string is not a valid TSDoc block comment.
 * @param code The TSDoc block comment to unwrap.
 * @returns The unwrapped TSDoc comment.
 * @remarks This function will throw an error if the provided string is not a valid TSDoc block comment.
 * @throws If the provided string is not a valid TSDoc block comment.
 */
export function tsDocUnwrapComment(code: string): string {
  assertValidTsDocComment(code)
  code = strRemoveFirstAndLastLine(code)
  code = code.replace(/^ *\*( |$)/gm, '')
  code = strTrimLinesRight(code)
  return code
}
