import { Stats } from 'fs'
import path from 'path'
import type { WalkOptions } from 'walkdir'
import walkdir from 'walkdir'
import { SourceFile } from './SourceFile'

/**
 * Walk and filter source files in a given directory.
 * Only files with the extension `.ts` are included.
 * Files with the extension `.test.ts`, `.d.ts`, or `.[anything].ts` are all excluded.
 * All index.ts files are excluded.
 * @returns an array of absolute filepaths
 */
export function walkSourceFiles(
  srcdir: string,
  filter: (filepath: string, stat: Stats) => boolean = () => true,
  options: WalkOptions = {},
): SourceFile[] {
  const result: SourceFile[] = []
  walkdir.sync(srcdir, options, (filepath, stat) => {
    if (!stat.isFile()) return
    if (!/\.ts$/i.test(filepath)) return
    if (/\.\w+\.ts$/i.test(filepath)) return
    if (filepath.endsWith(path.sep + 'index.ts')) return
    if (!filter(filepath, stat)) return
    result.push(new SourceFile(filepath))
  })
  return result
}
