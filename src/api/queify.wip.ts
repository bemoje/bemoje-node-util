import Queue from 'better-queue'
import { funSetName } from '../function/funSetName'

export function queify(func: (...args: any[]) => any, concurrency = 5): (...args: any[]) => Promise<any> {
  const queue = new Queue(func, { concurrent: concurrency })
  return funSetName(func.name, async (...args: any[]) => {
    return await queue.push(args)
  })
}
