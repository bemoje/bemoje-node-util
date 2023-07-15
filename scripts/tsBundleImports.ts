import path from 'path'
import { tsStripImports } from '../src/tscode/tsStripImports'
import { strRemoveEmptyLines } from '../src/string/strRemoveEmptyLines'
import { tsDocStripExample } from '../src/tsdoc/tsDocStripExample'
import { tsDocRemoveEmptyLines } from '../src/tsdoc/tsDocRemoveEmptyLines'
import { tsStripBlockComments } from '../src/tscode/tsStripBlockComments'
import { tsStripFullSlashCommentLines } from '../src/tscode/tsStripFullSlashCommentLines'
import { strTrimLinesLeft } from '../src/string/strTrimLinesLeft'
import { tsStripExportKeyword } from '../src/tscode/tsStripExportKeyword'
import { tsDocStripAllTagsExcepThrowsParamDescription } from '../src/tsdoc/tsDocStripAllTagsExcepThrowsParamDescription'
import { tsWalkImports } from '../src/tscode/tsWalkImports'
import { ITsBundleImportsOptions } from './ITsBundleImportsOptions'
import { readFileStringSync } from '../src/filesystem/readFileStringSync'
import { tsStripDeclSourceMapComments } from '../src/tscode/tsStripDeclSourceMapComments'

/**
 * Bundles TypeScript imports from a root file and returns them as a 2D array of strings.
 * Each sub-array represents a depth level of imports.
 * The function also provides several options for manipulating the imported source code.
 * @param rootfile The root file from which to start bundling imports.
 * @param options An optional object of options to customize the bundling process.
 * @returns A 2D array of strings, where each sub-array represents a depth level of imports.
 * @example ```ts
 * //
 * ```
 * @throws If there is an error reading a file or parsing TypeScript.
 */
export function tsBundleImports(rootfile: string, options?: ITsBundleImportsOptions): string[][] {
  const opt = options || {}
  const result: string[][] = [[]]
  const external: Set<string> = new Set()
  let size = 0
  const imports = tsWalkImports(rootfile, opt.maxDepth || 0).entries()
  for (const [fpath, o] of imports) {
    const { depth, source, error, match } = o
    if (typeof error === 'string' && error.startsWith('External')) {
      external.add(match)
      continue
    }
    if (!source) continue
    let src = source
    src = tsStripImports(src)
    if (opt.declarations) {
      try {
        const relpath = fpath.replace(process.cwd(), '').replace(/\.ts$/g, '.d.ts')
        const dpath = path.join(process.cwd(), 'types', relpath)
        const dsrc = tsStripImports(tsStripDeclSourceMapComments(readFileStringSync(dpath)))
        if (dsrc.includes('/' + '**')) src = dsrc
      } catch (error) {
        console.error(error?.toString())
      }
    }
    if (opt.stripSlashComments) src = tsStripFullSlashCommentLines(src)
    if (opt.stripBlockComments) src = tsStripBlockComments(src)
    else {
      if (opt.stripTsDocSoOnlyDescription) src = tsDocStripAllTagsExcepThrowsParamDescription(src)
      else if (opt.stripTsDocExample) src = tsDocStripExample(src)
      if (opt.stripTsDocEmptyLines) src = tsDocRemoveEmptyLines(src)
    }
    if (opt.stripEmptyLines) src = strRemoveEmptyLines(src)
    if (opt.stripIndents) src = strTrimLinesLeft(src)
    if (depth !== 1 && opt.stripExportKeywords) src = tsStripExportKeyword(src)
    src = src.trim() + '\n'
    size += src.length
    if (opt.maxOutputStringSize && size > opt.maxOutputStringSize) break
    if (!result[depth - 1]) result.push([src])
    else result[depth - 1].unshift(src)
  }
  result.push(Array.from(external))
  return result.reverse()
}
