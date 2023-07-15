import { IExtractedTsDocComment } from './types/IExtractedTsDocComment'

/**
 * This function takes a source string, and parses all TSDoc block comments in it..
 * @param code The source code string.
 */
export function* tsDocExtractAllComments(code: string): Generator<IExtractedTsDocComment> {
  let lines = code.split(/\r?\n/)
  let offset = 0
  while (true) {
    const index = lines.findIndex((line) => line.trim() === '/**')
    const lastIndex = lines.findIndex((line) => line.trim() === '*/')
    if (index !== -1 && lastIndex !== -1) {
      let nextLine
      if (lastIndex + 1 < lines.length) nextLine = lines[lastIndex + 1]
      if (nextLine?.trim() === '' && lastIndex + 2 < lines.length) nextLine = lines[lastIndex + 2]
      yield {
        start: index + offset,
        end: lastIndex + offset,
        match: lines.slice(index, lastIndex + 1).join('\n'),
        nextLine,
      }
      lines = lines.slice(lastIndex + 1)
      offset += lastIndex + 1
    } else {
      break
    }
  }
}
