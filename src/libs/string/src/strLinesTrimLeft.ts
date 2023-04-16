/**
 * Takes a multiline string and performs a left side trim of whitespace on each line.
 * @param input - input string
 */
export function strLinesTrimLeft(input: string): string {
  return input.replace(/\n\r?\s+/gm, '\n')
}
