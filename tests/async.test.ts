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

describe('asyncSerial', () => {
  it('should run async tasks serially', async () => {
    const tasks = [
      async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(1)
          }, 200)
        })
      },
      async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(2)
          }, 100)
        })
      },
      async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(3)
          }, 10)
        })
      },
    ]
    const results = await util.asyncSerial(tasks)
    expect(results).toEqual([1, 2, 3])
  })
})

describe('asyncParallel', () => {
  it('should run async tasks in parallel', async () => {
    const resultsInOrder: Array<number> = []
    const tasks = [
      async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resultsInOrder.push(1)
            resolve(1)
          }, 200)
        })
      },
      async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resultsInOrder.push(2)
            resolve(2)
          }, 100)
        })
      },
      async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resultsInOrder.push(3)
            resolve(3)
          }, 10)
        })
      },
    ]
    const results = await util.asyncParallel(tasks)
    expect(results).toEqual([1, 2, 3])
    expect(resultsInOrder).toEqual([3, 2, 1])
  })
})
