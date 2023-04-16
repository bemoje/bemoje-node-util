/**
 * Executes an async task with a timeout.
 * @param timeout The timeout in milliseconds.
 * @param task The async task to execute.
 * @param args The arguments to pass to the task.
 * @returns A promise that resolves with the task's result or rejects with an error.
 */
export function asyncWithTimeout<T>(timeout: number, task: (...args: any[]) => Promise<T>, ...args: any[]): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`Timed out after ${timeout} ms.`))
    }, timeout)
    task(...args)
      .then(
        (value: T) => {
          resolve(value)
        },
        (error: Error) => {
          reject(error)
        },
      )
      .catch((error: Error) => {
        reject(error)
      })
  })
}
