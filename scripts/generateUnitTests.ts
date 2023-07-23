import fs, { Stats } from 'fs'
import path from 'path'
import { OpenaiApiClient } from '../src/api/OpenaiApiClient'
import { IChatRequestOptions } from '../src/api/types/IChatRequestOptions'
import { arrFlatten } from '../src/array/arrFlatten'
import { asyncTasksLimit } from '../src/async/asyncTasksLimit'
import { absoluteToRelativePath } from '../src/filesystem/absoluteToRelativePath'
import { tsExtractJestTests } from '../src/tscode/tsExtractJestTests'
import { tsJestConvertExportNameString } from '../src/tscode/tsJestConvertExportNameString'
import { tsJestEnsureLineSpacing } from '../src/tscode/tsJestEnsureLineSpacing'
import { tsStripImports } from '../src/tscode/tsStripImports'
import { tsDocStripExample } from '../src/tsdoc/tsDocStripExample'
import { SourceFile } from './lib/SourceFile'
import { tsBundleImportsForUnitTestGeneration } from './lib/tsBundleImportsForUnitTestGeneration'
import { walkTsSourceFiles } from './lib/walkTsSourceFiles'

async function writeTSFunctionUnitTests(openai: OpenaiApiClient, file: SourceFile, options: IChatRequestOptions = {}): Promise<string> {
  const levels = tsBundleImportsForUnitTestGeneration(file.filepath)
  const files = arrFlatten(levels, 1)
  const code = tsStripImports(tsDocStripExample(files.join('\n')))
  // fs.writeFileSync(file.testFilepath + '.bundle.ts', code, 'utf8')
  options = {
    temperature: 1,
    ...options,
    instruction: [
      `You are a helpful assistant who writes unit tests for the exported TypeScript function, '${file.exportName}'. ` +
        'Use the Jest testing framework, ie. "describe" and "it".',

      `For the exported function, '${file.exportName}', follow every possible code path step-by-step ` +
        `and then write tests for every code path, edge case or scenario that you find.`,

      'It is important that you also write additional tests for the code paths where Errors are thrown.',

      'You should achieve a minimum of 95% code coverage. ',

      'In the test code, do not EVER use multi-line string aka. template literals in the code. ' +
        'To create multi-line strings, use instead string arrays representing each line of the string.',

      'Your response should be only the TypeScript code for the tests and nothing else.',
    ].join('\n\n'),
    prompt: code,
  }
  const tokens = openai.countTokens(file.readFileSync())
  console.log({ bundled: file.exportName, tokens })
  const response = await openai.chat3_16(options)
  const jest = tsJestConvertExportNameString(tsExtractJestTests(response), file.exportName)
  return tsJestEnsureLineSpacing(jest).trim() + '\n'
}

async function writeTSClassUnitTests(openai: OpenaiApiClient, file: SourceFile, options: IChatRequestOptions = {}): Promise<string> {
  const levels = tsBundleImportsForUnitTestGeneration(file.filepath)
  const files = arrFlatten(levels, 1)
  const main = tsStripImports(tsDocStripExample(files.pop() as string))
  const code =
    tsStripImports(tsDocStripExample(files.join('\n'))) + '\n\n\n---------------------------------------------------\n\n\n' + main
  // fs.writeFileSync(file.testFilepath + '.bundle.ts', code, 'utf8')
  const parsed = file.parseClass()
  options = {
    temperature: 0.3,
    ...options,
    instruction: [
      'You are a helpful assistant who writes unit tests for a specific TypeScript class.',

      `For for each public method in the the exported class, '${file.exportName}', follow every possible code path step-by-step ` +
        'and then write tests for every code path, edge case or scenario that you find.',

      'The public class members that need to be tested are: ' + parsed.public.join(', ') + '. Create several tests for each of these.',

      `I only want you to write tests for ONE class, and that is: '${file.exportName}'.`,

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
  return tsJestEnsureLineSpacing(jest).trim() + '\n'
}

async function generateUnitTests(
  openai: OpenaiApiClient,
  srcdir: string,
  concurrency = 1,
  overwrite: boolean,
  filter: (filepath: string, stat: Stats) => boolean,
) {
  const tasks = walkTsSourceFiles(srcdir, filter).map((file, i) => async () => {
    try {
      if (!file.testFileExists()) {
        const isClass = file.exportType === 'class'
        console.log({ exportName: file.exportName, isClass })
        const tests = [
          `import { ${file.exportName} } from './${file.exportName}'`,
          isClass ? await writeTSClassUnitTests(openai, file) : await writeTSFunctionUnitTests(openai, file),
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
  const searchArgument = cmdLineArgs[0].replace(/\\|\//g, '/')
  const overwriteMode = cmdLineArgs[1] === '--overwrite'
  const sourceRoot = path.join(process.cwd(), 'src')
  const concurrency = 12
  const filter = (filepath: string) => {
    if (!searchArgument || searchArgument === '*') return true
    return absoluteToRelativePath(filepath.replace(/\\|\//g, '/')).toLowerCase().includes(searchArgument.toLowerCase())
  }

  await generateUnitTests(openai, sourceRoot, concurrency, overwriteMode, filter)

  //
}
main().catch(console.error)
