import buffer from 'buffer'

export function fixRawDataStringEncoding(string: string): string {
  if (!string) return ''
  return buffer.transcode(Buffer.from(string), 'utf8', 'latin1').toString('utf8')
}
