import { Stats } from 'fs'
import path from 'path'
import { OpenaiApiClient } from '../src/api/OpenaiApiClient'
import { IChatRequestOptions } from '../src/api/types/IChatRequestOptions'
import { asyncTasksLimit } from '../src/async/asyncTasksLimit'
import { absoluteToRelativePath } from '../src/filesystem/absoluteToRelativePath'
import { tsStripBlockComments } from '../src/tscode/tsStripBlockComments'
import { tsStripImports } from '../src/tscode/tsStripImports'
import { TsDoc } from '../src/tsdoc/TsDoc'
import { tsDocExtractFirstComment } from '../src/tsdoc/tsDocExtractFirstComment'
import { SourceFile } from './lib/SourceFile'
import { walkTsSourceFiles } from './lib/walkTsSourceFiles'

async function writeFunctionTsDoc(openai: OpenaiApiClient, file: SourceFile, options: IChatRequestOptions = {}): Promise<TsDoc> {
  const response = await openai.chat4_8({
    temperature: 1,
    top_p: 0,
    ...options,
    instruction: [
      `For the exported TypeScript function, ${file.exportName}, write a TSDoc block comment that has all relevant TSDoc tags documented.`,

      'Do not insert types in braces or default values in brackets. This is TSDoc for TypeScript, so it is not needed.',

      'If using the @example tag, always wrap the example code in a markdown ts-code block.',

      'Your response should be only the resulting TSDoc block comment and nothing else.',
    ].join('\n\n'),
    prompt: tsStripImports(tsStripBlockComments(file.readFileSync())),
  })
  const newTsDocSrc = tsDocExtractFirstComment(response)?.match
  const newTsdoc = new TsDoc(newTsDocSrc)
  // const curExample = newTsdoc.single.get('example')
  // if (!curExample) return newTsdoc
  // const description = strTrimLinesRight(
  //   await openai.chat4_8({
  //     temperature: 0,
  //     ...options,
  //     instruction: [
  //       'Edit the TypeScript usage example code so that it never uses console.log.',

  //       'Instead, use "//=> result" on the following line, ' + 'after the expression for which to indicate its expected value.',

  //       'Do not store the result in a variable like this: "const result = ...".',
  //     ].join('\n'),
  //     prompt: strRemoveFirstAndLastLine(curExample.toString()),
  //   }),
  // ).split('\n')
  // const newExample = new TsDocTag('example', '', description)
  // newTsdoc.single.set('example', newExample)
  return newTsdoc
}

async function generateTsDocs(
  openai: OpenaiApiClient,
  srcdir: string,
  concurrency = 1,
  overwriteMode = false,
  filter: (filepath: string, stat: Stats) => boolean,
) {
  const tasks = walkTsSourceFiles(srcdir, filter).map((file, i) => async () => {
    try {
      const curCode = file.readFileSync()
      const isClass = file.exportType === 'class'
      console.log({ exportName: file.exportName, isClass })
      if (isClass) return
      const newTsDoc = await writeFunctionTsDoc(openai, file)
      const newCode = file.setTsDoc(newTsDoc, overwriteMode)
      if (curCode !== newCode) {
        file.writeFileSync(newCode)
        try {
          if (!require(file.filepath)) {
            console.log(curCode)
            throw new Error('Cannot require object')
          }
        } catch (error) {
          file.writeFileSync(curCode)
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
  const search = cmdLineArgs[0]
  const overwriteMode = cmdLineArgs[1] === '--overwrite'
  // console.log({ searchArgument, overwriteMode })
  const sourceRoot = path.join(process.cwd(), 'src')
  const concurrency = 12
  const filter = (filepath: string) => {
    // if (!search || search === '*') return true
    // console.log(absoluteToRelativePath(filepath).toLowerCase())
    return absoluteToRelativePath(filepath).toLowerCase().includes(search.toLowerCase())
  }

  await generateTsDocs(openai, sourceRoot, concurrency, overwriteMode, filter)
  //
}
main().catch(console.error)
