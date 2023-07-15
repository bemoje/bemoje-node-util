import { arrEvery } from '../array/arrEvery'

/**
 * Checks if the provided code string is a valid TSDoc comment.
 * @remarks This function tests each line of the provided code string against a regular expression that matches the TSDoc comment syntax.
 * @param code The source code string to be checked.
 * @returns A boolean indicating whether the provided code string is a valid TSDoc comment.
 */
export function isValidTsDocComment(code: string): boolean {
  if (!code) return false
  const lines = code.split(/\r?\n/)
  if (lines.length < 3) return false
  const last = lines.pop()
  if (last && !last.trimStart().startsWith('*/')) return false
  const first = lines.shift()
  if (first && !first.trimStart().startsWith('/**')) return false
  for (const line of lines) {
    if (!line.trimStart().startsWith('*')) return false
  }
  return true
}

// export function isValidTsDocComment(code: string): boolean {
//   if (!code) return false
//   const lines = code.split(/\r?\n/)
//   const re = /^ *(\/\*\*|\*\/|\*)/
//   return arrEvery(lines, (line) => re.test(line))
// }
