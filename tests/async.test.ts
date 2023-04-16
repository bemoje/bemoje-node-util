import * as util from '../src/libs/async'

function wait(ms: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Waited ' + ms + 'ms')
    }, ms)
  })
}

describe('asyncWithTimeout', () => {
  it('timeouts when the function has not resolved before the given time in ms', async () => {
    await expect(
      util.asyncWithTimeout<string>(10, async () => {
        return await wait(20)
      }),
    ).rejects.toThrowError(`Timed out after ${10} ms.`)
  })
  it('does not timeout when the function resolves in time', async () => {
    await expect(
      util.asyncWithTimeout<string>(20, async () => {
        return await wait(10)
      }),
    ).resolves.toBe('Waited ' + 10 + 'ms')
  })
})
