import fs from 'fs'
import pdf from 'pdf-parse'
import { PDFDocument } from 'pdf-lib'

/**
 * Parse text content of each page in a PDF file. Array indices correspond to page numbers.
 */
export async function pdfReadPages(filepath: string): Promise<string[]> {
  const buffer = await fs.promises.readFile(filepath)
  const doc = await PDFDocument.load(buffer.buffer)
  const result = []
  for (let i = 0; i < doc.getPages().length; i++) {
    const pageDoc = await PDFDocument.create()
    const [pageCopy] = await pageDoc.copyPages(doc, [i])
    pageDoc.addPage(pageCopy)
    const pageIntArray = await pageDoc.save()
    const pageBuffer = Buffer.from(pageIntArray)
    const pageData = await pdf(pageBuffer)
    result[i] = pageData.text
  }
  return result
}

// const filepath = process.cwd() + '\\tests\\test-files\\pdf-test.pdf'
// pdfReadPages(filepath).then(console.log)
