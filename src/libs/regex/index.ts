export * from './src/regexEscapeString'
export * from './src/regexGetGroupNames'
export * from './src/regexMatchBetween'
export * from './src/regexMatcherToValidater'
export * from './src/rexec'
export * from './src/regexes'

export type rexecYield = {
  index: number
  match: string
  groups: Record<string, string>
  lastIndex: number
}
export type matchBetweenYield = { left: rexecYield; mid: rexecYield; right: rexecYield }
export type matchBetweenFunction = (input: string) => Generator<matchBetweenYield>
