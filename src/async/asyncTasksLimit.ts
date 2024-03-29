/**
 * Run async tasks in parallel with a limit on the number of concurrent tasks.
 * @param concurrency number of tasks to run concurrently
 * @param tasks array of functions that return a promise
 * @param callback callback is invoked in order of completion
 * @typeparam T - The type of the return value of the tasks.
 * @throws Will throw an error if any of the tasks fail.
 * @returns array of return values which are ordered with indices identical to their respective tasks in the input array.
 * @example ```ts
 * const tasks = [
 *   () => new Promise((resolve) => setTimeout(() => resolve('Task A complete'), 2000)),
 *   () => new Promise((resolve) => setTimeout(() => resolve('Task B complete'), 1000)),
 *   () => new Promise((resolve) => setTimeout(() => resolve('Task C complete'), 3000)),
 *   () => new Promise((resolve) => setTimeout(() => resolve('Task D complete'), 4000)),
 *   () => new Promise((resolve) => setTimeout(() => resolve('Task E complete'), 5000)),
 * ]
 * const results2 = await asyncTasksLimit(2, tasks, (value, index) => {
 *   console.log(`Task ${index} completed with value ${value}`)
 * })
 * console.log(results2)
 * ```
 */
export async function asyncTasksLimit<T>(
  concurrency: number,
  tasks: Array<() => Promise<any>>,
  callback?: (value: T, index: number) => void,
): Promise<T[]> {
  const promises = new Set()
  const returnValues: T[] = []
  let nextIndex = 0
  for (const task of tasks) {
    const index = nextIndex++
    if (promises.size === concurrency) {
      await Promise.race(promises)
    }
    const promise = task()
    promises.add(promise)
    promise.then((retval) => {
      returnValues[index] = retval
      if (callback) callback(retval, index)
      promises.delete(promise)
    })
  }
  await Promise.all(promises)
  return returnValues
}

// import { setTimeout } from 'node:timers/promises'
// async function example() {
//   const returnAfter = async (value: number, ms: number) => {
//     console.log('Task started')
//     await setTimeout(ms)
//     return value
//   }
//   const arr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
//   const random = () => Math.floor(Math.random() * (1500 - 200 + 1)) + 200
//   const tasks = arr.map((n) => () => returnAfter(n, random()))
//   // callback will be called in order of completion
//   const callback = (value: number, i: number) => console.log(`${i}. ${value}`)
//   // return values are ordered by input tasks array
//   const returnValuesOrder = await asyncTasksLimit(3, tasks, callback)
//   console.log(returnValuesOrder)
// }
// example()
