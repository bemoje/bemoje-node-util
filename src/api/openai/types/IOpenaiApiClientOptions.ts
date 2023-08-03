import { IAbstractApiClientOptions } from '../../types/IAbstractApiClientOptions'

export interface IOpenaiApiClientOptions extends IAbstractApiClientOptions {
  /**
   * OpenAI API key
   */
  apiKey?: string
}
