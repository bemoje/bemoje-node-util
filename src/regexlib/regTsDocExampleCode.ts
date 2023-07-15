import { buildRegexBetween } from '../regex/buildRegexBetween'

/**
 * Matches TSDoc example-tag content wrapped in markdown typescript code blocks.
 */
export const regTsDocExampleCode = buildRegexBetween(/```(ts|typescript)/i, ' * ```')
