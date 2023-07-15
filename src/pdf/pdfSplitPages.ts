import fs from 'fs'
import path from 'path'
import { mkdirp } from 'mkdirp'
import { PDFDocument } from 'pdf-lib'

/**
 * Split a given PDF file into separate single-page-files.
 * @returns Array of filepaths of the split files. Array indices correspond to page numbers.
 */
export async function pdfSplitPages(filepath: string, outputDirpath: string): Promise<string[]> {
  const inputBuffer = await fs.promises.readFile(filepath)
  const doc = await PDFDocument.load(inputBuffer)
  const numPages = doc.getPages().length
  const numPageNumDigits = numPages.toString().length
  const filepaths = []
  await mkdirp(outputDirpath)
  for (let i = 0; i < numPages; i++) {
    const page = await PDFDocument.create()
    const [copiedPage] = await page.copyPages(doc, [i])
    page.addPage(copiedPage)
    const pageNumber = i
    const outputBuffer = await page.save()
    const outputFilename = `${pageNumber.toString().padStart(numPageNumDigits, '0')}.pdf`
    const outputFilepath = path.join(outputDirpath, outputFilename)
    await fs.promises.writeFile(outputFilepath, outputBuffer)
    filepaths[pageNumber] = outputFilepath
  }
  return filepaths
}
