import { Stats } from 'fs'
import path from 'path'
import { absoluteToRelativePath } from '../src'
import { OpenaiApiClient } from '../src/api/OpenaiApiClient'
import { IChatRequestOptions } from '../src/api/types/IChatRequestOptions'
import { asyncTasksLimit } from '../src/async/asyncTasksLimit'
import { strRemoveFirstAndLastLine } from '../src/string/strRemoveFirstAndLastLine'
import { strTrimLinesRight } from '../src/string/strTrimLinesRight'
import { tsStripImports } from '../src/tscode/tsStripImports'
import { tsStripTsDocBlockComments } from '../src/tscode/tsStripTsDocBlockComments'
import { TsDoc } from '../src/tsdoc/TsDoc'
import { tsDocExtractFirstComment } from '../src/tsdoc/tsDocExtractFirstComment'
import { SourceFile } from './SourceFile'
import { walkSourceFiles } from './walkSourceFiles'

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

      'If using the @example tag, always wrap the example code in a markdown ts-code block.',

      'Your response should be only the resulting TSDoc block comment and nothing else.',
    ].join('\n\n'),
    prompt: tsStripImports(tsStripTsDocBlockComments(file.source)),
  })
  const newTsDocSrc = tsDocExtractFirstComment(response)?.match
  const newTsdoc = new TsDoc(newTsDocSrc)
  const example = newTsdoc.single.get('example')
  if (!example) return newTsdoc
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

async function generateTsDocs(
  openai: OpenaiApiClient,
  srcdir: string,
  concurrency = 1,
  overwriteMode = false,
  filter: (filepath: string, stat: Stats) => boolean,
) {
  const tasks = walkSourceFiles(srcdir, filter).map((file, i) => async () => {
    try {
      const oldCode = file.source
      const newTsDoc = await writeFunctionTsDoc(openai, file)
      file.setTsDoc(newTsDoc, overwriteMode)
      if (oldCode !== file.source) {
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
    } catch (error) {
      console.error(error?.toString())
    }
  })
  console.log('Generating TSDoc for ' + tasks.length + ' files...')
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
  // console.log({ searchArgument, overwriteMode })
  const sourceRoot = path.join(process.cwd(), 'src')
  const concurrency = 12
  const filter = (filepath: string) => {
    if (!searchArgument || searchArgument === '*') return true
    // console.log(absoluteToRelativePath(filepath).toLowerCase())
    return absoluteToRelativePath(filepath).toLowerCase().includes(searchArgument.toLowerCase())
  }

  await generateTsDocs(openai, sourceRoot, concurrency, overwriteMode, filter)
  //
}
main().catch(console.error)
