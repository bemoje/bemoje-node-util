import { blackBright, blue, bold, cyan, green, magenta, red, yellow } from 'cli-color'
import path from 'path'
import { absoluteToRelativePath } from '../src/filesystem/absoluteToRelativePath'
import { NumberFormatter } from '../src/number/NumberFormatter'
import { walkSourceFiles } from './walkSourceFiles'

/**
 * Generate a indes.ts file in the source root directory that exports all the source files.
 */
export function generateTestStats(): void {
  const srcdir = path.join(process.cwd(), 'src')
  const sourceFiles = walkSourceFiles(srcdir)

  const needTests = sourceFiles.filter((file) => {
    return file.exportType === 'function' || file.exportType === 'class'
  })

  const untested = needTests.map((file) => {
    const dir = file.relative.split(path.sep)[1]
    const exports = file.exportName
    const lines = file.countLinesOfCode()
    const tests = file.countTests()
    const testLineRatio = tests / lines
    const filepath = file.relative.replace(/\\/g, '/')
    const testFilepath = tests ? absoluteToRelativePath(file.testFilepath, process.cwd()) : ''
    return {
      dir,
      exports,
      lines,
      tests,
      testLineRatio,
      filepath,
      testFilepath,
    }
  })

  untested.sort((a, b) => b.testLineRatio - a.testLineRatio)

  const formatter = new NumberFormatter(1).locale('en-US')
  untested.forEach((o) => {
    const { dir, exports, lines, tests, testLineRatio, filepath, testFilepath } = o
    const ratio = formatter.format(testLineRatio)

    let color = red
    if (testLineRatio > 0.2) color = yellow
    if (testLineRatio > 0.5) color = cyan
    if (testLineRatio > 0.8) color = green

    console.log(
      `${bold(dir)} / ${bold(color(exports))}: ${blackBright('ratio')}:  ${bold(
        color(ratio),
      )}  ( ${tests}${blackBright('/')}${blue(lines)} ${
        'tests' + blackBright('/') + blue('line') + blackBright(' of code.') + ' )'
      }`,
    )
    console.log(blackBright(filepath) + '\n')
  })

  const stats = untested.reduce(
    (acc, o) => {
      acc.moduleExports++
      acc.moduleLinesOfCode += o.lines
      acc.unitTests += o.tests
      return acc
    },
    {
      sourceFiles: sourceFiles.length,
      moduleExports: 0,
      moduleLinesOfCode: 0,
      unitTests: 0,
    },
  )

  console.log(blackBright('---------------'))
  console.log(bold(magenta('Stats')))
  console.log(stats)
  console.log(blackBright('---------------'))
}

/**
 * Main
 */
;(function main() {
  generateTestStats()
})()
