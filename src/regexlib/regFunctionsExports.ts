import { buildRegexBetween } from '../regex/buildRegexBetween'

/**
 * Matches exported functions in TypeScript source code.
 */
export const regFunctionsExports = buildRegexBetween(
  /(^|\n)export (default )?(async )?function/,
  /\n\}(\n|$)/,
)
