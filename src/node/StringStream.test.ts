import { StringStream } from './StringStream'
import { streamToString } from './streamToString'

describe('StringStream', () => {
  it('example', async () => {
    const str = 'this is a string'
    const stream = new StringStream(str)
    expect(await streamToString(stream)).toBe(str)
  })
})
