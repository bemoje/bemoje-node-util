import { strCountCharOccurances } from '../../string'

/**
 * Normalize a file extension to the form: .[ext]
 * Anything before the last "." is not returned.
 * @param ext file extension
 */
export function normalizeFileExtension(ext: string): string {
  if (ext === '' || ext === '.') return ''
  if (/[<>"|?*:]/g.test(ext)) {
    throw new Error(`Illegal characters in file extension: ${ext}  |  Illegal characters are: <>"|?:*`)
  }
  if (strCountCharOccurances(ext, '.') === 0) return '.' + ext
  return ext.substring(ext.lastIndexOf('.'))
}
