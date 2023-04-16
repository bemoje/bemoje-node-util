import { Readable } from 'stream'

/**
 * Drain a Readable into a string.
 * @param stream - a Readable of string chunks
 */
export async function streamToString(stream: Readable): Promise<string> {
  const chunks: string[] = []
  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk).toString())
  }
  return chunks.join('')
}
