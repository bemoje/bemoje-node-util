/**
 * Takes a multiline string and performs a right side trim of whitespace on each line.
 * @param input - input string
 */
export function strLinesTrimRight(input: string): string {
  return input.replace(/\s+\n/gm, '\n')
}
