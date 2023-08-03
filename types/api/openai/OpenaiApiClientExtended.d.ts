import { OpenaiApiClient } from './OpenaiApiClient';
import { IOpenaiApiClientOptions } from './types/IOpenaiApiClientOptions';
import type { IOpenaiChatRequestOptions } from './types/IOpenaiChatRequestOptions';
/**
 * A class representing an OpenAI API client but with already prompt-egineered utilities.
 */
export declare class OpenaiApiClientExtended extends OpenaiApiClient {
    /**
     * Create a new OpenAiApiClient instance.
     * @example
     * ```ts
     * const openai = new OpenaiAPIClient({ apiKey: "API_KEY" })
     * ```
     */
    constructor(options?: IOpenaiApiClientOptions);
    /**
     * Proofread in a given language.
     * @param language The language of the input.
     * @param prompt The input string.
     * @example ```ts
     * await openai.proofread('english', 'I no have more money.')
     * await openai.proofread('java', `System.out.println("Hello")`)
     * ```
     */
    proofread(language: string, prompt: string, options?: IOpenaiChatRequestOptions): Promise<string>;
    /**
     * Proofread in English.
     * @param prompt The input string.
     * @example ```ts
     * await openai.proofread('english', 'I no have more money.')
     * await openai.proofread('java', `System.out.println("Hello")`)
     * ```
     */
    proofreadEnglish(prompt: string, options?: IOpenaiChatRequestOptions): Promise<string>;
    /**
     * Translate text from one language to another.
     * For short input text, use options.instruction to provide context.
     * @param prompt The text to translate.
     * @example ```ts
     * await openai.translateFrom('English', 'Spanish', 'Clear', { instruction: 'This is a color.' })
     * ```
     */
    translateFromTo(fromLanguage: string, toLanguage: string, prompt: string, options?: IOpenaiChatRequestOptions): Promise<string>;
    /**
     * Translate text from English to a given language.
     * For short input text, use options.instruction to provide context.
     * @example ```ts
     * await openai.translateEnglishTo('Spanish', 'Clear', { instruction: 'This is a color.' })
     * ```
     */
    translateEnglishTo(language: string, prompt: string, options?: IOpenaiChatRequestOptions): Promise<string>;
}
//# sourceMappingURL=OpenaiApiClientExtended.d.ts.map