import { titleCase } from 'title-case'
import { OpenaiApiClientBase } from './OpenaiApiClientBase'
import type { IChatRequestOptions } from './types/IChatRequestOptions'
import type { IApiClientOptions } from './types/IApiClientOptions'

export class OpenaiApiClient extends OpenaiApiClientBase {
  /**
   * Create a new OpenAiApiClient instance.
   * @example
   * ```ts
   * const openai = new OpenaiAPIClient({ apiKey: "API_KEY" })
   * ```
   */
  constructor(options: IApiClientOptions = {}) {
    super(options)
  }

  /**
   * Proofread in a given language.
   * @param language The language of the input.
   * @param prompt The input string.
   * @example ```ts
   * await openai.proofread('english', 'I no have more money.')
   * await openai.proofread('java', `System.out.println("Hello")`)
   * ```
   */
  async proofread(
    language: string,
    prompt: string,
    options: IChatRequestOptions = {},
  ): Promise<string> {
    options.instruction =
      (options.instruction ? options.instruction + '\n\n' : '') +
      `Proofread and correct ${titleCase(language)}.\n\nRespond the corrected version.`
    return await this.chat3_8({
      temperature: 0,
      ...options,
      prompt,
    })
  }

  /**
   * Proofread in English.
   * @param prompt The input string.
   * @example ```ts
   * await openai.proofread('english', 'I no have more money.')
   * await openai.proofread('java', `System.out.println("Hello")`)
   * ```
   */
  async proofreadEnglish(prompt: string, options: IChatRequestOptions = {}): Promise<string> {
    options.instruction =
      (options.instruction ? options.instruction + '\n\n' : '') +
      'Proofread and correct English.\n\nRespond the corrected version.'
    return await this.chat3_8({
      temperature: 0,
      ...options,
      prompt,
    })
  }

  /**
   * Translate text from one language to another.
   * For short input text, use options.instruction to provide context.
   * @param prompt The text to translate.
   * @example ```ts
   * await openai.translateFrom('English', 'Spanish', 'Clear', { instruction: 'This is a color.' })
   * ```
   */
  async translateFrom(
    fromLanguage: string,
    toLanguage: string,
    prompt: string,
    options: IChatRequestOptions = {},
  ): Promise<string> {
    options.instruction =
      (options.instruction ? options.instruction + '\n\n' : '') +
      `Translate from ${titleCase(fromLanguage)} to ${titleCase(toLanguage)}.`
    return await this.chat3_8({
      temperature: 0.3,
      ...options,
      prompt,
    })
  }

  /**
   * Translate text from English to a given language.
   * For short input text, use options.instruction to provide context.
   * @example ```ts
   * await openai.translateEnglishTo('Spanish', 'Clear', { instruction: 'This is a color.' })
   * ```
   */
  async translateEnglishTo(
    language: string,
    prompt: string,
    options: IChatRequestOptions = {},
  ): Promise<string> {
    return await this.translateFrom('English', language, prompt, options)
  }

  // /**
  //  * Write unit tests for a TypeScript class.
  //  * @param code TypeScript source code.
  //  */
  // async writeTSClassUnitTests(code: string, options: IChatRequestOptions = {}): Promise<string> {
  //   options = {
  //     temperature: 0,
  //     ...options,
  //     instruction: [
  //       'You are a helpful assistant who writes unit tests for TypeScript classes.',
  //       'For for each public method in the the exported class, follow every possible code path step-by-step ' +
  //         'and then write tests for every code path, edge case or scenario that you find.',
  //       'Write as many tests as needed to achieve a 95% code coverage minimum. ' +
  //         'Do not test private or protected methods, but instead test all their code paths via the public methods.',
  //       'Use the Jest testing framework. Use "describe" and "it".',
  //       'Your response should be only the TypeScript code for the tests and nothing else.',
  //     ].join('\n\n'),
  //     prompt: tsStripImports(tsDocStripExample(code)),
  //   }
  //   const tokens = this.countTokens(code)
  //   console.log({ tokens })
  //   const response = tokens > 4000 ? await this.chat3_16(options) : await this.chat4_8(options)
  //   return strNoConsecutiveEmptyLines(tsExtractJestTests(response)).trim() + '\n'
  // }

  // /**
  //  * Write unit tests for a TypeScript function.
  //  * @param code TypeScript source code.
  //  */
  // async writeTSFunctionUnitTests(code: string, options: IChatRequestOptions = {}): Promise<string> {
  //   options = {
  //     temperature: 0,
  //     ...options,
  //     instruction: [
  //       'You are a helpful assistant who writes unit tests for TypeScript functions.',
  //       'For the exported function, follow every possible code path step-by-step ' +
  //         'and then write tests for every code path, edge case or scenario that you find.',
  //       'Write as many tests as needed to achieve a 95% code coverage minimum.',
  //       'Use the Jest testing framework. Use "describe" and "it".',
  //       'Your response should be only the TypeScript code for the tests and nothing else.',
  //     ].join('\n\n'),
  //     prompt: tsStripImports(tsDocStripExample(code)),
  //   }
  //   const tokens = this.countTokens(code)
  //   console.log({ tokens })
  //   const response = tokens > 4000 ? await this.chat3_16(options) : await this.chat4_8(options)
  //   // const re = new RegExp(/(^|\n)describe\(['"]/.source+regexEscapeString()
  //   return strNoConsecutiveEmptyLines(tsExtractJestTests(response)).trim() + '\n'
  // }

  // /**
  //  * Write a TSDoc comment for a function.
  //  * @param source TypeScript source code.
  //  */
  // async writeFunctionTsDoc(code: string, options: IChatRequestOptions = {}): Promise<TsDoc> {
  //   const response = await this.chat4_8({
  //     temperature: 0,
  //     ...options,
  //     instruction: [
  //       'For the exported TypeScript function, ' +
  //         'write a TSDoc block comment that has all relevant TSDoc tags documented.',
  //       'Always wrap @example tags in markdown ts-code blocks.',
  //       'Your response should be only the resulting TSDoc block comment and nothing else.',
  //     ].join('\n\n'),
  //     prompt: tsStripImports(tsStripBlockComments(code)),
  //   })
  //   const newTsDocSrc = tsDocExtractFirstComment(response)?.match
  //   const newTsdoc = new TsDoc(newTsDocSrc)
  //   const example = newTsdoc.single.get('example')
  //   if (!example) return newTsdoc
  //   example.description = strTrimLinesRight(
  //     await this.chat4_8({
  //       temperature: 0,
  //       ...options,
  //       instruction: [
  //         'Edit the TypeScript usage example code so that it never uses console.log.',
  //         'Instead, use "//=> result" on the following line, ' +
  //           'after the expression for which to indicate its expected value.',
  //         'Do not store the result in a variable like this: "const result = ...".',
  //       ].join('\n'),
  //       prompt: strRemoveFirstAndLastLine(example.toString()),
  //     }),
  //   ).split('\n')
  //   return newTsdoc
  // }
}
