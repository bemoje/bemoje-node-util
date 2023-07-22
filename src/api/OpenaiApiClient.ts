import { titleCase } from 'title-case'
import { OpenaiApiClientBase } from './OpenaiApiClientBase'
import type { IApiClientOptions } from './types/IApiClientOptions'
import type { IChatRequestOptions } from './types/IChatRequestOptions'

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
  async proofread(language: string, prompt: string, options: IChatRequestOptions = {}): Promise<string> {
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
      (options.instruction ? options.instruction + '\n\n' : '') + 'Proofread and correct English.\n\nRespond the corrected version.'
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
  async translateFromTo(fromLanguage: string, toLanguage: string, prompt: string, options: IChatRequestOptions = {}): Promise<string> {
    options.instruction =
      (options.instruction ? options.instruction + '\n\n' : '') + `Translate from ${titleCase(fromLanguage)} to ${titleCase(toLanguage)}.`
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
  async translateEnglishTo(language: string, prompt: string, options: IChatRequestOptions = {}): Promise<string> {
    return await this.translateFromTo('English', language, prompt, options)
  }
}
