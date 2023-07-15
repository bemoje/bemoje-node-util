import { pdfIteratePages } from './pdfIteratePages'

/**
 * Parse text content of each page in a PDF file. Array indices correspond to page numbers.
 */
export async function pdfGetPages(
  filepath: string,
  begin?: number,
  end?: number,
): Promise<string[]> {
  const result = []
  for await (const page of pdfIteratePages(filepath, begin, end)) {
    result.push(page)
  }
  return result
}
