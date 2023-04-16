/**
 * Takes a multiline string and removes lines that are empty or only contain whitespace.
 * @param input - input string
 */
export function strLinesRemoveEmpty(input: string): string {
  return input
    .replace(/\r?\n\s*\r?\n/gm, '\n')
    .trimStart()
    .trimEnd()
}
