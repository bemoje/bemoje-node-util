import EventEmitter from 'events'
import type {
  CreateChatCompletionResponse,
  CreateCompletionResponse,
  CreateEditResponse,
  CreateCompletionResponseUsage,
} from 'openai'
import { round } from '../number/round'

/**
 * For monitoring openai api token usage.
 */
export class OpenaiTokenUsage {
  static readonly prices = {
    completion: { in: 0.00002, out: 0.00002 },
    chat: { in: 0.0000015, out: 0.000002 },
    chat16k: { in: 0.000003, out: 0.000004 },
    editText: { in: 0, out: 0 },
    editCode: { in: 0, out: 0 },
  }

  readonly events = new EventEmitter()

  readonly usage = {
    completion: { in: { tokens: 0, USD: 0 }, out: { tokens: 0, USD: 0 } },
    chat: { in: { tokens: 0, USD: 0 }, out: { tokens: 0, USD: 0 } },
    chat16k: { in: { tokens: 0, USD: 0 }, out: { tokens: 0, USD: 0 } },
    editText: { in: { tokens: 0, USD: 0 }, out: { tokens: 0, USD: 0 } },
    editCode: { in: { tokens: 0, USD: 0 }, out: { tokens: 0, USD: 0 } },
  }

  readonly total = { total_tokens: 0, total_USD: 0 }

  /**
   * Submit usage data from an openai api response.
   */
  submit(
    endpoint: 'completion' | 'chat' | 'chat16k' | 'editText' | 'editCode',
    data: CreateCompletionResponse | CreateChatCompletionResponse | CreateEditResponse,
  ): void {
    const usage = data.usage as CreateCompletionResponseUsage
    const { prompt_tokens, completion_tokens } = usage
    const prices = OpenaiTokenUsage.prices[endpoint]
    const stats = this.usage[endpoint]
    const total = this.total

    stats.in.tokens += prompt_tokens
    stats.out.tokens += completion_tokens

    stats.in.USD = round(stats.in.USD + prompt_tokens * prices.in, 7)
    stats.out.USD = round(stats.out.USD + completion_tokens * prices.out, 7)

    total.total_tokens += prompt_tokens + completion_tokens
    total.total_USD = round(
      total.total_USD + (prompt_tokens * prices.in + completion_tokens * prices.out),
      7,
    )

    this.events.emit('usage', usage, this)
    this.events.emit('total', this.total, this)
  }
}
