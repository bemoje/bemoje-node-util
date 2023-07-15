export function strPrependLines(string: string, toPrepend: string): string {
  return string
    .split(/\r?\n/)
    .map((line) => toPrepend + line)
    .join('\n')
}
