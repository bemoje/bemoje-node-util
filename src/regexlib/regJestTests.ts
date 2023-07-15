import { buildRegexBetween } from '../regex/buildRegexBetween'

/**
 * Matches root level Jest describe() tests.
 */
export const regJestTests = buildRegexBetween(/(^|\n)describe\(/, '\n})')
