import { buildRegexBetween } from '../regex/buildRegexBetween'

/**
 * Matches TSDoc example-tag content wrapped in markdown typescript code blocks.
 */
export const regTsDocExampleLines = buildRegexBetween(
  / +\* +(@example )?```(ts|typescript|js|javascript)?/i,
  / +\* +```\n/g,
)
