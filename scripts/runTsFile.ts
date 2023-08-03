import fs from 'fs'
import path from 'path'
import { absoluteToRelativePath } from '../src/filesystem/absoluteToRelativePath'
import { findFile } from '../src/filesystem/walk/findFile'
import { log } from '../src/node/logger/log'
import { shellSpawnProgram } from '../src/node/shellSpawnProgram'

// main program
async function main() {
  const search = process.argv.slice(2)[0]
  if (!search) {
    console.error('No search string argument provided.')
    process.exit()
  }
  const cwd = process.cwd()
  const srcdir = path.join(cwd, 'src')
  const scriptsdir = path.join(cwd, 'scripts')
  const result = await findFile(cwd, search, {
    filter: (fullpath: string, stats: fs.Stats) => {
      if (stats.isDirectory()) {
        if (!fullpath.startsWith(srcdir) && !fullpath.startsWith(scriptsdir)) return false
      } else {
        if (!/\.ts$/i.test(fullpath)) return false
        if (/\.test\.ts$/i.test(fullpath)) return false
      }
      return true
    },
  })
  if (result) {
    const filepath = absoluteToRelativePath(result)
    log.info('Running: ' + filepath + '\n')
    const tsnode = 'C:/Users/bemoj/AppData/Roaming/npm/node_modules/ts-node/dist/bin.js'
    await shellSpawnProgram('node', tsnode, result)
  } else {
    log.warn('No files found matching: ' + search)
  }
}
main().catch(console.error)
