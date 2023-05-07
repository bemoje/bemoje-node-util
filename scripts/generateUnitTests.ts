import { Configuration, OpenAIApi, CreateChatCompletionResponse } from 'openai'
import fs from 'fs'
import path from 'path'
import { config } from 'dotenv'
config()

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  }),
)

// type t = { data: CreateChatCompletionResponse; text: string }
function gptHttpRequester(
  temperature = 0,
  instructions: string,
): (prompt: string) => Promise<{ data: CreateChatCompletionResponse; text: string }> {
  return async function (
    prompt: string,
  ): Promise<{ data: CreateChatCompletionResponse; text: string }> {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature,
      // top_p: 0.1,
      messages: [
        {
          role: 'system',
          content: instructions,
        },
        { role: 'user', content: prompt },
      ],
    })
    const data: CreateChatCompletionResponse = response.data
    const text = data?.choices[0]?.message?.content?.toString() || ''
    return { data, text }
  }
}

const generateUnitTestsGPT = gptHttpRequester(
  0,
  [
    'You are a helpful assistant who will help write tests for TypeScript code.',
    'The tests need to be written using the Jest testing framwork.',
    'Use the Jest framework methods called "describe" and "it".',
    'Your reply should only be the code. No comments or other text.',
  ].join('\n'),
)

export async function generateUnitTests(
  sourceCode: string,
  dirname: string,
  exportName: string,
  append = true,
): Promise<{ data: CreateChatCompletionResponse; text: string } | void> {
  const testFilepath = path.join(process.cwd(), 'tests', dirname + '.test.ts')
  const testFileExists = fs.existsSync(testFilepath)
  if (!append && testFileExists) return console.log('test already exists: ' + testFilepath)
  if (append && !testFileExists) append = false
  let testFileCurrentCode = ''
  if (append) {
    testFileCurrentCode = fs.readFileSync(testFilepath).toString()
    if (testFileCurrentCode.includes(exportName)) {
      return console.log('tests already exists in the file: ' + testFilepath)
    }
  }
  const result = await generateUnitTestsGPT(sourceCode.replace(/import .+\n/gm, '').trim())
  const data = result.data
  const text =
    (append ? '' : `import * as util from '../src/libs/${dirname}'\n\n`) +
    result.text
      .trim()
      .replace(/^```(\w+)?/, '')
      .replace(/```$/, '')
      .replace(/import .+\n/gm, '')
      .split(exportName)
      .join('util.' + exportName)
      .replace(`describe('util.`, `describe('`)
      .replace(`describe("util.`, `describe("`)
      .trim()

  await fs.promises.writeFile(testFilepath, append ? testFileCurrentCode + '\n\n' + text : text)
  return { data, text }
}

const code1 = `
/**
 * Iterate the prototype chain of a given object.
 */
export function* iteratePrototypeChain(object: Record<string, any>): Generator<Record<string, any>> {
  if (object == null) return
  if (
    // if the below false, then object must be an instance
    !isPrototype(object) &&
    !isConstructor(object) &&
    // the two above depend on checking that typeof object is 'object',
    // so this last check is in case of arrow functions and generator functions
    object !== Function.prototype
  ) {
    yield object
    object = object.constructor.prototype
  }
  let objectOrNull: Record<string, any> | null = object
  while (objectOrNull) {
    yield objectOrNull
    objectOrNull = Reflect.getPrototypeOf(objectOrNull)
  }
}
`

const code2 = `
/**
 * Takes a list of file extensions and returns a filter function that returns true if a filepath/filename passed to it contains one of the given file extensions.
 * @param fileExtensions file extensions
 */
export function createFileExtensionFilter(...fileExtensions: Array<string>): (filepath: string) => boolean {
  if (!fileExtensions.length) return () => true
  return (filepath: string) => {
    for (const ext of fileExtensions.map(normalizeFileExtension)) {
      if (path.extname(filepath) === ext) {
        return true
      }
    }
    return false
  }
}
`

const code3 = `
/**
 * Easily perform regex 'exec' on a string. An iterable is returned which steps through the exec process and yields all the details you might need.
 * @param regex - The regular expression object
 * @param string - The string to perform the operation on
 */
export function* rexec(regex: RegExp, string: string): Generator<{
  index: number
  match: string
  groups: Record<string, string>
  lastIndex: number
}> {
  let match
  while ((match = regex.exec(string)) !== null) {
    yield {
      index: match.index,
      match: match[0],
      groups: Object.assign({}, match.groups),
      lastIndex: regex.lastIndex,
    }
  }
}
`

// generateUnitTests(code1, 'object', 'iteratePrototypeChain')
// generateUnitTests(code2, 'node', 'createFileExtensionFilter', true)
// generateUnitTests(code3, 'regex', 'rexec')
