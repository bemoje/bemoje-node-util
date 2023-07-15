import EventEmitter from 'events'
import { getConstructor } from '../object/getConstructor'
import { log } from './log'

/**
 * This function is used to print the events emitted by an EventEmitter. It takes three parameters: the instance of the class, the EventEmitter, and an object containing arrays of event names categorized by log levels (info, warn, error).
 * @remarks This function is useful for debugging purposes, as it allows you to see what events are being emitted by an EventEmitter at runtime.
 * @param self The instance of the class that the EventEmitter belongs to.
 * @param emitter The EventEmitter that is emitting the events.
 * @param eventLogLevels An object containing arrays of event names categorized by log levels (info, warn, error).
 * @typeparam T - The type of the instance of the class that the EventEmitter belongs to.
 * @returns void
 * @example ```ts
 * new EventEmitter();
 * new MyClass();
 * printEmitterEvents(new MyClass(), new EventEmitter(), {
 *   info: ['event1', 'event2'],
 *   warn: ['event3', 'event4'],
 *   error: ['event5', 'event6']
 * });;
 * //=> {result}
 * ```
 */
export function _printEmitterEvents<T>(
  self: T,
  emitter: EventEmitter,
  eventLogLevels: {
    info?: string[]
    warn?: string[]
    error?: string[]
  },
): void {
  const className = getConstructor(self as Record<string, unknown>).name
  for (const event of eventLogLevels.info || []) {
    emitter.on(event, (arg) => {
      const _event = className + '.' + event.toString() + ': '
      if (typeof arg === 'object') {
        log.info(_event)
        console.dir(arg, { depth: null })
      }
      log.info(_event + arg)
    })
  }
  for (const event of eventLogLevels.warn || []) {
    emitter.on(event, (arg) => {
      const _event = className + '.' + event.toString() + ': '
      if (typeof arg === 'object') {
        log.warn(_event)
        console.dir(arg, { depth: null })
      }
      log.warn(_event + arg)
    })
  }
  for (const event of eventLogLevels.error || ['error']) {
    emitter.on(event, (arg) => {
      log.error(arg)
    })
  }
}
