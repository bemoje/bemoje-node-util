import fs from 'fs'
import pdf from 'pdf-parse'
import { PDFDocument } from 'pdf-lib'

/**
 * Parse text content of each page in a PDF file. Array indices correspond to page numbers.
 */
export async function* pdfIteratePages(
  filepath: string,
  begin?: number,
  end?: number,
): AsyncGenerator<string> {
  const buffer = await fs.promises.readFile(filepath)
  const doc = await PDFDocument.load(buffer.buffer)
  if (!end) end = doc.getPages().length
  if (!begin) begin = 0
  for (let i = begin; i < end; i++) {
    try {
      const pageDoc = await PDFDocument.create()
      const [pageCopy] = await pageDoc.copyPages(doc, [i])
      pageDoc.addPage(pageCopy)
      const pageIntArray = await pageDoc.save()
      const pageBuffer = Buffer.from(pageIntArray)
      const pageData = await pdf(pageBuffer)
      yield pageData.text
    } catch (error) {
      yield ''
    }
  }
}
