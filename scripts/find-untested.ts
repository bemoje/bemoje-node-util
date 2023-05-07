import fs from 'fs'
import path from 'path'
import walkdir from 'walkdir'
import { rexec } from '../src/'
import { generateUnitTests } from './generateUnitTests'

// settings
const testFileForEveryExport = ['datastructures']
const ignoreSources = [
  ['regex', 'regexLibrary'],
  ['nlp', 'generateUnitTests'],
  ['html', '*'],
  ['datastructures', 'interfaces'],
  ['datastructures', 'mixins'],
  ['node', 'log'],
  ['mixins', '*'],
]

// paths
const testsPath = path.join(process.cwd(), 'tests')
const srcPath = path.join(process.cwd(), 'src')
const libPath = path.join(process.cwd(), 'src', 'libs')
const outPathNeedsTests = path.join(process.cwd(), 'notes', 'needs-tests.json')
const outPathHasTests = path.join(process.cwd(), 'notes', 'has-tests.json')

// // generate root index.ts file
// const rootFilePath = path.join(srcPath, 'index.ts')
// const libDirPaths = fs
//   .readdirSync(libPath)
//   .map((name) => {
//     return { name, dirpath: path.join(libPath, name) }
//   })
//   .filter((o) => fs.statSync(o.dirpath).isDirectory())

// fs.writeFileSync(
//   rootFilePath,
//   libDirPaths
//     .filter((o) => o.name !== 'wip')
//     .map((o) => {
//       return `export * from './libs/${o.name}'`
//     })
//     .join('\n'),
// )

// traverse test files
const regExportName = /\nexport ((async )?function\*?|const|class) (?<name>\w+)/g
const regTestFile = /tests\\(?<dir>.+)\.test\.ts$/
const regSourceFile = /libs\\(?<dir>.+)\\src\\(?<name>.+)\.ts$/
const tests = new Map()
walkdir.sync(testsPath, function (filepath, stat) {
  const match = filepath.match(regTestFile)
  if (match?.groups?.dir) {
    tests.set(match.groups.dir, {
      filepath,
      source: fs.readFileSync(filepath, 'utf8').toString(),
    })
  }
})

// traverse source files
function getExportNames(source: string): Array<string> {
  const results: Array<string> = []
  for (const match of rexec(regExportName, source)) {
    if (match.groups && match.groups.name) {
      results.push(match.groups.name)
    }
  }
  return results
}
let countSourceFiles = 0
const success: Array<any> = []
const failed: Array<any> = []
walkdir.sync(libPath, function (sourcePath, stat) {
  const match = sourcePath.match(regSourceFile)
  if (match?.groups?.dir && match?.groups?.name) {
    countSourceFiles++
    const sourceDir = match.groups.dir
    const sourceFileName = match.groups.name
    if (
      ignoreSources.some((a) => {
        return a[0] === sourceDir && (a[1] === '*' || a[1] === sourceFileName)
      })
    ) {
      return
    }

    const parentPath = path.join(libPath, sourceDir, 'index.ts')
    const parentSource = fs.readFileSync(parentPath).toString().trim()
    const exportLine = `export * from './src/${sourceFileName}'`
    if (!parentSource.includes(exportLine)) {
      fs.writeFileSync(parentPath, parentSource + '\n' + exportLine)
    }

    const source = fs.readFileSync(sourcePath, 'utf8').toString()
    const exports = getExportNames(source)
    const testFile = Object.assign(
      {
        filepath: 'file does not exist: ' + sourceDir + '.test.ts',
        source: '',
      },
      tests.get(testFileForEveryExport.includes(sourceDir) ? sourceFileName : sourceDir),
    )
    const testsUseDir = testFile.source.includes(sourceDir)
    const testsUseFileName = new RegExp(
      `\ndescribe\\('${sourceFileName}', |util\\.${sourceFileName}`,
    ).test(testFile.source)
    let isMissingTests = !testsUseDir || !testsUseFileName
    const testsUseExports = Object.fromEntries(
      exports.reduce((o, e) => {
        const hasExport = testFile.source.includes(e)
        if (!hasExport) isMissingTests = true
        o.set(e, hasExport)
        return o
      }, new Map<string, boolean>()),
    )
    const result = {
      sourcePath,
      sourceDir,
      sourceFileName,
      testsUseDir,
      testsUseFileName,
      testsUseExports,
      testsPath: testFile.filepath,
    }
    Object.defineProperty(result, 'source', { enumerable: false, value: source })

    if (isMissingTests) {
      failed.push(result)
      console.log(result)
    } else {
      success.push(result)
    }
  }
})

// write results
fs.writeFileSync(outPathNeedsTests, JSON.stringify(failed, null, 2))
fs.writeFileSync(outPathHasTests, JSON.stringify(success, null, 2))

// generate unit tests with OpenAI's GPT
for (let i = 0; i < failed.length; i++) {
  const result = failed[i]
  generateUnitTests(result.source, result.sourceDir, result.sourceFileName, true).catch((e) =>
    console.log(e),
  )
}

// output stats
console.log({
  sourceFiles: {
    total: countSourceFiles,
    ignored: countSourceFiles - success.length - failed.length,
    allTests: success.length,
    missingTests: failed.length,
  },
})
