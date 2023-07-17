import { rexecFirstMatch } from '../regex/rexecFirstMatch'
import { regJestTests } from '../regexlib/regJestTests'

/**
 * Parses the Jest tests from the given string.
 * @remarks This function uses the `rexecFirstMatch` function from the `regex` module and the `regJestTests` function from the `regexlib` module.
 * @param code The string to parse Jest tests from.
 * @returns The extracted Jest tests as a string.
 * @throws Throws an error if the tests could not be parsed from the input source code.
 */
export function tsExtractJestTests(code: string): string {
  const result = rexecFirstMatch(regJestTests, code)?.match.trim()
  if (!result) throw new Error('Could not parse the tests from the input source code.')
  return result
}
