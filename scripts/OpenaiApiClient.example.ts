import fs, { Stats } from 'fs'
import path from 'path'
import { asyncTasksLimit } from '../src/async/asyncTasksLimit'
import { arrFlatten } from '../src/array/arrFlatten'
import { tsBundleImportsForUnitTestGeneration } from './tsBundleImportsForUnitTestGeneration'
import { OpenaiApiClient } from '../src/api/OpenaiApiClient'
import { walkSourceFiles } from './walkSourceFiles'
import { IChatRequestOptions } from '../src/api/types/IChatRequestOptions'
import { SourceFile } from './SourceFile'
import { tsStripImports } from '../src/tscode/tsStripImports'
import { tsDocStripExample } from '../src/tsdoc/tsDocStripExample'
import { tsExtractJestTests } from '../src/tscode/tsExtractJestTests'
import { tsJestConvertExportNameString } from '../src/tscode/tsJestConvertExportNameString'
import { strRemoveFirstAndLastLine } from '../src/string/strRemoveFirstAndLastLine'
import { tsDocExtractFirstComment } from '../src/tsdoc/tsDocExtractFirstComment'
import { TsDoc } from '../src/tsdoc/TsDoc'
import { strTrimLinesRight } from '../src/string/strTrimLinesRight'
import { tsStripBlockComments } from '../src/tscode/tsStripBlockComments'
import { tsJestFixLineSpacing } from '../src/tscode/tsJestFixLineSpacing'

async function writeFunctionTsDoc(
  openai: OpenaiApiClient,
  file: SourceFile,
  options: IChatRequestOptions = {},
): Promise<TsDoc> {
  const response = await openai.chat4_8({
    temperature: 1,
    top_p: 0,
    ...options,
    instruction: [
      'For the exported TypeScript function, ' +
        file.exportName +
        ', write a TSDoc block comment that has all relevant TSDoc tags documented.',

      'Do not insert types in braces or default values ub brackets. This is TSDoc for TypeScript, so it is not needed.',

      'Always wrap @example tags in markdown ts-code blocks.',

      'Your response should be only the resulting TSDoc block comment and nothing else.',
    ].join('\n\n'),
    prompt: tsStripImports(tsStripBlockComments(file.source)),
  })
  console.log({ response })
  const newTsDocSrc = tsDocExtractFirstComment(response)?.match
  const newTsdoc = new TsDoc(newTsDocSrc)
  const example = newTsdoc.single.get('example')
  if (!example) return newTsdoc
  console.log({ newTsdoc })
  example.description = strTrimLinesRight(
    await openai.chat4_8({
      temperature: 0,
      ...options,
      instruction: [
        'Edit the TypeScript usage example code so that it never uses console.log.',
        'Instead, use "//=> result" on the following line, ' +
          'after the expression for which to indicate its expected value.',
        'Do not store the result in a variable like this: "const result = ...".',
      ].join('\n'),
      prompt: strRemoveFirstAndLastLine(example.toString()),
    }),
  ).split('\n')
  return newTsdoc
}

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
  console.log({ tokens })
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
      'You are a helpful assistant who writes unit tests for TypeScript.',
      `For for each public method in the the exported class, '${file.exportName}', follow every possible code path step-by-step ` +
        'and then write tests for every code path, edge case or scenario that you find.',
      'The public class members that need to be tested are: ' +
        parsed.public.join(', ') +
        '. Create several tests for each of these.',
      'Use the Jest testing framework, ie. "describe" and "it".',
      'Write as many tests as needed to achieve a 95% code coverage minimum. ',
      'Your response should be only the TypeScript code for the tests and nothing else.',
    ].join('\n\n'),
    prompt: code,
  }
  const tokens = openai.countTokens(code)
  console.log({ tokens })
  const response = await openai.chat3_16(options)
  const jest = tsJestConvertExportNameString(tsExtractJestTests(response), file.exportName)
  return tsJestFixLineSpacing(jest).trim() + '\n'
}

const workdir = process.cwd()
const sourceRoot = path.join(workdir, 'src')

async function generateTsDoc(
  openai: OpenaiApiClient,
  srcdir: string,
  concurrency = 1,
  filter: (filepath: string, stat: Stats) => boolean,
) {
  const tasks = walkSourceFiles(srcdir, filter).map((file, i) => async () => {
    try {
      const oldCode = file.source
      console.log('a')
      const newTsDoc = await writeFunctionTsDoc(openai, file)
      console.log('b')
      file.setTsDoc(newTsDoc)
      console.log('c')
      if (oldCode !== file.source) {
        console.log('d')
        file.writeBackupFile()
        file.writeFileSource()
        try {
          if (!require(file.filepath)) {
            throw new Error('Cannot require object')
          }
        } catch (error) {
          file.source = oldCode
          file.writeFileSource()
          console.error(error?.toString())
          return
        }
        console.log({
          task: i,
          exportName: file.exportName,
          backup: file.backupFilepath,
          filepath: file.filepath,
        })
      }
      console.log('z')
    } catch (error) {
      console.error(error?.toString())
    }
  })

  await asyncTasksLimit(concurrency, tasks)
}

async function generateUnitTests(
  openai: OpenaiApiClient,
  srcdir: string,
  concurrency = 1,
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
  await asyncTasksLimit(concurrency, tasks)
}

//example
;(async () => {
  const openai = new OpenaiApiClient({
    // logAllEvents: true,
    cacheInit: { name: 'temp' },
  })
  // await openai.cache.deleteEverything()

  const srcdir = path.join(sourceRoot, 'tsdoc')
  const concurrency = 15
  const filter = (filepath: string, stat: Stats) => {
    return filepath.endsWith('tsDocWrapAsComment.ts')
    return true
  }

  await generateTsDoc(openai, srcdir, concurrency, filter)
  await generateUnitTests(openai, srcdir, concurrency, filter)

  //
})().catch(console.error)
