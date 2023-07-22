import fs from 'fs'
import path from 'path'
import { arrFlatten } from '../src/array/arrFlatten'
import { createDirectorySync } from '../src/filesystem/createDirectorySync'
import { tsBundleImportsForUnitTestGeneration } from './lib/tsBundleImportsForUnitTestGeneration'
import { walkTsFiles } from './lib/walkTsFiles'

// main program
function main() {
  const cmdLineArgs = process.argv.slice(2)
  const search = cmdLineArgs[0].replace(/\\|\//g, path.sep)

  const filter = (filepath: string) => new RegExp(search, 'i').test(filepath)
  const filepaths = walkTsFiles(path.join(process.cwd(), 'src'), filter).concat(walkTsFiles(path.join(process.cwd(), 'scripts'), filter))

  if (filepaths.length) {
    const filepath = filepaths[0]
    const filename = path.basename(filepath)
    const levels = tsBundleImportsForUnitTestGeneration(filepath)
    const files = arrFlatten(levels, 1)
    const code = files.join('\n')
    const tempdir = process.env.TEMP
    if (!tempdir) throw new Error('TEMP environment variable not set')
    const tempFiledir = createDirectorySync(path.join(tempdir, 'bemoje-ts-bundles'))
    const tempFilepath = path.join(tempFiledir, filename + '_' + Date.now() + '.ts')
    fs.writeFileSync(tempFilepath, code)
    console.log({ bundle: tempFilepath })
  } else {
    console.log('No files found matching: ' + search)
  }
}
main()
