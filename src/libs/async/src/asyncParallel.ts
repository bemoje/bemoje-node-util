/**
 * Run async tasks in parallel.
 */
export async function asyncParallel<T>(tasks: Array<() => Promise<T>>): Promise<Array<T>> {
  return await Promise.all(tasks.map((task) => task()))
}
