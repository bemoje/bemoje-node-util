import fs, { Stats } from 'fs'
import path from 'path'
import { absoluteToRelativePath } from '../src'
import { OpenaiApiClient } from '../src/api/OpenaiApiClient'
import { IChatRequestOptions } from '../src/api/types/IChatRequestOptions'
import { arrFlatten } from '../src/array/arrFlatten'
import { asyncTasksLimit } from '../src/async/asyncTasksLimit'
import { tsExtractJestTests } from '../src/tscode/tsExtractJestTests'
import { tsJestConvertExportNameString } from '../src/tscode/tsJestConvertExportNameString'
import { tsJestFixLineSpacing } from '../src/tscode/tsJestFixLineSpacing'
import { tsStripImports } from '../src/tscode/tsStripImports'
import { tsDocStripExample } from '../src/tsdoc/tsDocStripExample'
import { SourceFile } from './SourceFile'
import { tsBundleImportsForUnitTestGeneration } from './tsBundleImportsForUnitTestGeneration'
import { walkSourceFiles } from './walkSourceFiles'

async function writeTSFunctionUnitTests(
  openai: OpenaiApiClient,
  file: SourceFile,
  options: IChatRequestOptions = {},
): Promise<string> {
  const levels = tsBundleImportsForUnitTestGeneration(file.filepath)
  const files = arrFlatten(levels, 1)
  const code = tsStripImports(tsDocStripExample(files.join('\n')))
  // fs.writeFileSync(file.testFilepath + '.bundle.ts', code, 'utf8')
  options = {
    temperature: 1,
    ...options,
    instruction: [
      'You are a helpful assistant who writes unit tests for TypeScript. ' +
        'Use the Jest testing framework, ie. "describe" and "it".',

      `For the exported function, '${file.exportName}', follow every possible code path step-by-step ` +
        'and then write tests for every code path, edge case or scenario that you find.',

      'It is important that you also write additional tests for the code paths where Errors are thrown.',

      'You should achieve a minimum of 95% code coverage. ',

      'In the test code, do not EVER use multi-line string aka. template literals in the code. ' +
        'To create multi-line strings, use instead string arrays representing each line of the string.',

      'Your response should be only the TypeScript code for the tests and nothing else.',
    ].join('\n\n'),
    prompt: code,
  }
  const tokens = openai.countTokens(file.source)
  console.log({ bundled: file.exportName, tokens })
  const response = await openai.chat3_16(options)
  const jest = tsJestConvertExportNameString(tsExtractJestTests(response), file.exportName)
  return tsJestFixLineSpacing(jest).trim() + '\n'
}

async function writeTSClassUnitTests(
  openai: OpenaiApiClient,
  file: SourceFile,
  options: IChatRequestOptions = {},
): Promise<string> {
  const levels = tsBundleImportsForUnitTestGeneration(file.filepath)
  const files = arrFlatten(levels, 1)
  const code = tsStripImports(tsDocStripExample(files.join('\n')))
  // fs.writeFileSync(file.testFilepath + '.bundle.ts', code, 'utf8')
  const parsed = file.parseClass()
  options = {
    temperature: 0.3,
    ...options,
    instruction: [
      'You are a helpful assistant who writes unit tests for TypeScript classes.',

      `For for each public method in the the exported class, '${file.exportName}', follow every possible code path step-by-step ` +
        'and then write tests for every code path, edge case or scenario that you find.',

      'The public class members that need to be tested are: ' +
        parsed.public.join(', ') +
        '. Create several tests for each of these.',

      `Only write tests for '${file.exportName}'.`,

      'Use the Jest testing framework, ie. "describe" and "it".',

      'Write as many tests as needed to achieve a 95% code coverage minimum. ',

      'Your response should be only the TypeScript code for the tests and nothing else.',
    ].join('\n\n'),
    prompt: code,
  }
  const tokens = openai.countTokens(code)
  console.log({ bundled: file.exportName, tokens })
  const response = await openai.chat3_16(options)
  const jest = tsJestConvertExportNameString(tsExtractJestTests(response), file.exportName)
  return tsJestFixLineSpacing(jest).trim() + '\n'
}

async function generateUnitTests(
  openai: OpenaiApiClient,
  srcdir: string,
  concurrency = 1,
  overwrite: boolean,
  filter: (filepath: string, stat: Stats) => boolean,
) {
  const tasks = walkSourceFiles(srcdir, filter).map((file, i) => async () => {
    try {
      if (!file.testFileExists()) {
        const isClass = file.exportType === 'class'
        console.log({ exportName: file.exportName, isClass })
        const tests = [
          `import { ${file.exportName} } from './${file.exportName}'`,
          isClass
            ? await writeTSClassUnitTests(openai, file)
            : await writeTSFunctionUnitTests(openai, file),
        ].join('\n\n')
        await fs.promises.writeFile(file.testFilepath, tests)
        console.log({ task: i, exportName: file.exportName, testFilepath: file.testFilepath })
      }
    } catch (error) {
      console.error(error?.toString())
    }
  })
  console.log('Generating unit tests for ' + tasks.length + ' files...')
  await asyncTasksLimit(concurrency, tasks)
}

// main program
async function main() {
  const openai = new OpenaiApiClient({
    // logAllEvents: true,
  })
  // await openai.cache.deleteEverything()

  const cmdLineArgs = process.argv.slice(2)
  const searchArgument = cmdLineArgs[0]
  const overwriteMode = cmdLineArgs[1] === '--overwrite'
  const sourceRoot = path.join(process.cwd(), 'src')
  const concurrency = 12
  const filter = (filepath: string) => {
    if (!searchArgument || searchArgument === '*') return true
    return absoluteToRelativePath(filepath).toLowerCase().includes(searchArgument.toLowerCase())
  }

  await generateUnitTests(openai, sourceRoot, concurrency, overwriteMode, filter)

  //
}
main().catch(console.error)
