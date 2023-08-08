import EventEmitter from 'events'
import { round } from '../number/round'
import { Constructor } from '../types/Constructor'

/**
 * @typeparam TBase - The type of the base constructor.
 * @param BaseConstructor The base constructor to extend.
 * @returns A constructor for a class that extends the base constructor and includes an index and methods for getting unique identifiers.
 * @example ```ts
 * //
 * ```
 */
export function MixinEventEmitter<TBase extends Constructor>(BaseConstructor: TBase): Constructor {
  return class Emitter extends BaseConstructor {
    public events: EventEmitter

    constructor(...args: any[]) {
      super(...args)
      this.events = new EventEmitter()
    }

    protected taskSync<T>(task: string, func: () => T): T | void {
      try {
        this.emit('start', task, { task: 'started' })
        const t0 = Date.now()
        const returned = func()
        if (returned !== undefined && returned !== '') this.emit('data', task, { data: returned })
        const elapsed = round((Date.now() - t0) / 1000, 4) + ' sec'
        this.emit('completed', task, { task: 'completed', elapsed })
        return returned
      } catch (error: any) {
        this.emit('error', error)
      }
    }

    protected async task<T>(task: string, func: () => Promise<T>): Promise<T | void> {
      try {
        this.emit('start', task, { task: 'started' })
        const t0 = Date.now()
        const returned = await func()
        if (returned !== undefined && returned !== '') this.emit('data', task, { data: returned })
        const elapsed = round((Date.now() - t0) / 1000, 4) + ' sec'
        this.emit('completed', task, { task: 'completed', elapsed })
        return returned
      } catch (error: any) {
        this.emit('error', error)
      }
    }

    protected taskStatus(task: string, message: string) {
      this.emit('status', task, { task: 'status', message })
    }

    protected emit(event: string, message: string | Error, data?: any): void {
      if (message instanceof Error) {
        this.events.emit(event, message.stack, message, this)
      } else {
        this.events.emit(event, message, data, this)
      }
    }
  }
}
