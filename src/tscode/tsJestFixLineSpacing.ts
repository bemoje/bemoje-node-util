import { strRemoveEmptyLines } from '../string/strRemoveEmptyLines'

export function tsJestFixLineSpacing(code: string): string {
  return strRemoveEmptyLines(code)
    .split('\n')
    .map((line) => {
      if (/^(describe|it)\(/.test(line.trimStart())) return '\n' + line
      return line
    })
    .join('\n')
}
