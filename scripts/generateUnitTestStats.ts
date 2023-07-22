import { blackBright, blue, bold, cyan, green, magenta, red, yellow } from 'cli-color'
import path from 'path'
import { NumberFormatter } from '../src/number/NumberFormatter'
import { walkTsSourceFiles } from './lib/walkTsSourceFiles'

/**
 * Generate a indes.ts file in the source root directory that exports all the source files.
 */
function generateTestStats(): void {
  const srcdir = path.join(process.cwd(), 'src')
  const sourceFiles = walkTsSourceFiles(srcdir)

  const data = sourceFiles
    .filter((file) => {
      return file.exportType === 'function' || file.exportType === 'class'
    })
    .map((file) => {
      const dir = file.relative.split(path.sep)[1]
      const exports = file.exportName
      const lines = file.countLinesOfCode()
      const tests = file.countTests()
      const testLineRatio = (tests * 0.25) / lines
      const filepath = file.relative.replace(/\\/g, '/')
      return {
        dir,
        exports,
        lines,
        tests,
        testLineRatio,
        filepath,
      }
    })

  data.sort((a, b) => b.testLineRatio - a.testLineRatio)

  const formatter = new NumberFormatter(1).locale('en-US')
  data.forEach((o) => {
    const { dir, exports, lines, tests, testLineRatio, filepath } = o
    let color = red
    if (testLineRatio > 0) color = yellow
    if (testLineRatio > 0.33) color = cyan
    if (testLineRatio > 0.66) color = green
    console.log(
      `${bold(dir)} / ${bold(color(exports))}: ${blackBright('ratio')}:  ${bold(
        color(formatter.format(testLineRatio)),
      )}  ( ${tests}${blackBright('/')}${blue(lines)} ${'tests' + blackBright('/') + blue('line') + blackBright(' of code.') + ' )'}`,
    )
    console.log(blackBright(filepath) + '\n')
  })

  const totals = data.reduce(
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
  console.log(bold(magenta('Totals')))
  console.log('sourceFiles: ' + blue(totals.sourceFiles))
  console.log('moduleExports: ' + blue(totals.moduleExports))
  console.log('moduleLinesOfCode: ' + blue(totals.moduleLinesOfCode))
  console.log('unitTests: ' + blue(totals.unitTests))
  console.log(blackBright('---------------'))
}

/**
 * Main
 */
;(function main() {
  generateTestStats()
})()
