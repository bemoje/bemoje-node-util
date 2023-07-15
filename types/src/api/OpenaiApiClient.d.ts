import { OpenaiApiClientBase } from './OpenaiApiClientBase';
import type { IChatRequestOptions } from './types/IChatRequestOptions';
import type { IApiClientOptions } from './types/IApiClientOptions';
export declare class OpenaiApiClient extends OpenaiApiClientBase {
    /**
     * Create a new OpenAiApiClient instance.
     * @example
     * ```ts
     * const openai = new OpenaiAPIClient({ apiKey: "API_KEY" })
     * ```
     */
    constructor(options?: IApiClientOptions);
    /**
     * Proofread in a given language.
     * @param language The language of the input.
     * @param prompt The input string.
     * @example ```ts
     * await openai.proofread('english', 'I no have more money.')
     * await openai.proofread('java', `System.out.println("Hello")`)
     * ```
     */
    proofread(language: string, prompt: string, options?: IChatRequestOptions): Promise<string>;
    /**
     * Proofread in English.
     * @param prompt The input string.
     * @example ```ts
     * await openai.proofread('english', 'I no have more money.')
     * await openai.proofread('java', `System.out.println("Hello")`)
     * ```
     */
    proofreadEnglish(prompt: string, options?: IChatRequestOptions): Promise<string>;
    /**
     * Translate text from one language to another.
     * For short input text, use options.instruction to provide context.
     * @param prompt The text to translate.
     * @example ```ts
     * await openai.translateFrom('English', 'Spanish', 'Clear', { instruction: 'This is a color.' })
     * ```
     */
    translateFrom(fromLanguage: string, toLanguage: string, prompt: string, options?: IChatRequestOptions): Promise<string>;
    /**
     * Translate text from English to a given language.
     * For short input text, use options.instruction to provide context.
     * @example ```ts
     * await openai.translateEnglishTo('Spanish', 'Clear', { instruction: 'This is a color.' })
     * ```
     */
    translateEnglishTo(language: string, prompt: string, options?: IChatRequestOptions): Promise<string>;
}
//# sourceMappingURL=OpenaiApiClient.d.ts.map