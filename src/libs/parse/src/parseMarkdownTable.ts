/**
 * Parse a markdown table into a 2D array of strings.
 */
export function parseMarkdownTable(string: string): string[][] {
  return string
    .trim() // allow leading/trailing whitespace
    .split('\n')
    .map((s) => s.trim())
    .filter((s, i) => !!s) // remove empty lines
    .filter((s, i) => i !== 1) // remove the separator line
    .map((row) => {
      return row
        .trim()
        .replace(/^\|/, '') // remove leading pipe
        .replace(/\|$/, '') // remove trailing pipe
        .split('|')
        .map((cell) => cell.trim())
    })
}
