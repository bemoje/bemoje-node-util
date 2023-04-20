export type RexecYield = {
  index: number
  match: string
  groups: Record<string, string>
  lastIndex: number
}
export type matchBetweenYield = {
  left: RexecYield
  mid: RexecYield
  right: RexecYield
}
export type matchBetweenFunction = (input: string) => Generator<matchBetweenYield>
export * as regexLibrary from './src/regexLibrary'
export * from './src/BemojeRegex'
export * from './src/buildRegexBetween'
export * from './src/regexEscapeString'
export * from './src/regexFixFlags'
export * from './src/regexGetGroupNames'
export * from './src/regexIsValidFlags'
export * from './src/regexMatchBetween'
export * from './src/regexMatcherToValidater'
export * from './src/regexValidFlags'
export * from './src/rexec'
