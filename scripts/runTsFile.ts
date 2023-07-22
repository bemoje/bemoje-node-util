import path from 'path'
import { absoluteToRelativePath } from '../src/filesystem/absoluteToRelativePath'
import { log } from '../src/node/log'
import { shellCommand } from '../src/node/shellCommand'
import { walkTsFiles } from './lib/walkTsFiles'

// main program
async function main() {
  const cmdLineArgs = process.argv.slice(2)
  const search = cmdLineArgs[0].replace(/\\|\//g, path.sep)

  const filter = (filepath: string) => new RegExp(search, 'i').test(filepath)
  const filepaths = walkTsFiles(path.join(process.cwd(), 'src'), filter).concat(walkTsFiles(path.join(process.cwd(), 'scripts'), filter))

  if (filepaths.length) {
    const filepath = absoluteToRelativePath(filepaths[0])
    log.info('Running: ' + filepath + '\n')
    await shellCommand('npx ts-node ' + filepath)
  } else {
    console.log('No files found matching: ' + search)
  }
}
main().catch(console.error)
