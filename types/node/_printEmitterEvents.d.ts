/// <reference types="node" />
import EventEmitter from 'events';
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
 * //=> result
 * ```
 */
export declare function _printEmitterEvents<T>(self: T, emitter: EventEmitter, eventLogLevels: {
    info?: string[];
    warn?: string[];
    error?: string[];
}): void;
//# sourceMappingURL=_printEmitterEvents.d.ts.map