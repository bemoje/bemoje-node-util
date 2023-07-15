import { buildRegexBetween } from '../regex/buildRegexBetween'

/**
 * Matches block comments including if they are indented.
 */
export const regBlockCommentsWithIndent = buildRegexBetween(/(^|\n| *)\/\*\*/g, /\n +\*\//g)
