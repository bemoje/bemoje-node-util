import { OpenaiApiClient } from '../../../src/api/openai/OpenaiApiClient'
import { EMOTIONS } from './emotions'

export async function normalizeEmotion(api: OpenaiApiClient, emotion: string) {
  const res = await api.gpt3_8k({
    temperature: 0,
    instruction:
      'You will be given an emotion. Select the emotions that is most similar to or synonymous with one of the following emotions:\n' +
      Array.from(EMOTIONS.values()).join(', ') +
      '\n\nYour response should be an emotion from the list and nothing else.',
    prompt: emotion,
  })

  return res.toLowerCase().replace(/[^a-z]/g, '')
}
