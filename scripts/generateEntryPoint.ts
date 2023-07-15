import fs from 'fs'
import path from 'path'
import { walkSourceFiles } from './walkSourceFiles'

/**
 * Generate a indes.ts file in the source root directory that exports all the source files.
 */
export function generateEntryPoint(): void {
  const srcdir = path.join(process.cwd(), 'src')
  const sourceFiles = walkSourceFiles(srcdir).filter((o) => !o.isPrivate)
  const entrypoint = path.join(srcdir, 'index.ts')
  const lines = sourceFiles
    .filter((o) => !o.isPrivate)
    .map((o) => {
      return `export * from '${o.relative
        .replace('src', '.')
        .replace(/\\/g, '/')
        .replace(/\.ts$/i, '')}'`
    })
  const code = lines.join('\n') + '\n'
  fs.writeFileSync(entrypoint, code, 'utf8')
  console.log(`\n${sourceFiles.length} files are exported from entry point: ${entrypoint}`)
}

/**
 * Main
 */
;(function main() {
  generateEntryPoint()
})()
