/**
 * Run async tasks serially, each task waiting for the previous one to complete.
 */
export async function asyncSerial<T>(tasks: Array<() => Promise<T>>): Promise<Array<T>> {
  const results: Array<T> = []
  for (const task of tasks) {
    results.push(await task())
  }
  return results
}
