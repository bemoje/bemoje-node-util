import fs from 'fs'
import path from 'path'
import { walkTsSourceFiles } from './lib/walkTsSourceFiles'

/**
 * Generate a indes.ts file in the source root directory that exports all the source files.
 */
function generateEntryPoint(): void {
  const srcdir = path.join(process.cwd(), 'src')
  const sourceFiles = walkTsSourceFiles(srcdir).filter((file) => !file.isPrivate)
  const lines = sourceFiles
    .filter((file) => !file.isPrivate)
    .map((file) => {
      return `export * from '${file.relative.replace('src', '.').replace(/\\/g, '/').replace(/\.ts$/i, '')}'`
    })
  const code = lines.join('\n') + '\n'
  const entrypoint = path.join(srcdir, 'index.ts')
  fs.writeFileSync(entrypoint, code, 'utf8')
  console.log(`\n${sourceFiles.length} files are exported from entry point: ${entrypoint}`)
}

/**
 * Main
 */
function main() {
  generateEntryPoint()
}
main()
