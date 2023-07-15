import { Level } from 'level'
import EventEmitter from 'events'
import hash from 'object-hash'
import { createDirectorySync } from '../filesystem/createDirectorySync'
import getAppDataPath from 'appdata-path'
import path from 'path'
import { _printEmitterEvents } from '../node/_printEmitterEvents'
import { IApiResponseCacheOptions } from './types/IApiResponseCacheOptions'

/**
 * Persistent API response cache based on level-db.
 */
export class ApiReponseCache<V> {
  /**
   * Level database instance
   */
  readonly db: Level<string, string>
  /**
   * Event emitter for cache events
   */
  readonly events: EventEmitter = new EventEmitter()
  /**
   * Max age of cached data in milliseconds. Defaults to 0 (no max age).
   */
  readonly maxAgeMs: number

  /**
   * Default options for creating new instances
   */
  static readonly optionsDefaults = {
    name: 'default',
    dirpath: getAppDataPath('ApiReponseCache'),
    maxAgeMs: 0,
    logAllEvents: false,
  }

  /**
   * Create a new instance.
   */
  constructor(options: IApiResponseCacheOptions) {
    const _options = Object.assign({}, ApiReponseCache.optionsDefaults, options)
    const { name, dirpath, maxAgeMs, logAllEvents } = _options
    if (logAllEvents) this.logAllEvents()
    this.emit('options', _options)
    this.maxAgeMs = maxAgeMs
    this.db = new Level(createDirectorySync(path.join(dirpath, name)))
  }

  /**
   * Hash any type of key.
   */
  hashKey(key: unknown): string {
    return hash(key === undefined ? 'undefined' : key, { algorithm: 'sha1', encoding: 'base64' })
  }

  /**
   * Get a value for a given hash key if it exists. Otherwise, get retrive a value with a given function and then store that value in the cache.
   * @param apiRequest - function that returns a new value for a given key if it doesn't exist in the cache.
   */
  async getOrElse(hash: string, apiRequest: () => V | Promise<V>): Promise<V> {
    try {
      const value = await this.get(hash)
      this.emit('hit', hash)
      return value
    } catch (e) {
      this.emit('miss', hash)
      const value = await apiRequest()
      return await this.put(hash, value)
    }
  }

  /**
   * Get a value for a given hash key.
   * @throws if the value does not exist for the give hash.
   */
  async get(hash: string): Promise<V> {
    return this.orThrow(async () => {
      const serialized = await this.db.get(hash)
      await this.ensureNotExpired(hash, serialized)
      this.emit('get', hash)
      return this.parseSerializedValue(serialized)
    })
  }

  /**
   * Get a value for a given hash key.
   */
  async getSafe(hash: string): Promise<V | undefined> {
    try {
      const serialized = await this.db.get(hash)
      await this.ensureNotExpired(hash, serialized)
      this.emit('get', hash)
      return this.parseSerializedValue(serialized)
    } catch (error) {
      return undefined
    }
  }

  /**
   * Returns whether a value exists for a given key.
   */
  async has(hash: string): Promise<boolean> {
    try {
      await this.db.get(hash)
      return true
    } catch (e) {
      return false
    }
  }

  /**
   * Set a given value for a given hash key.
   */
  async put(hash: string, value: V): Promise<V> {
    return this.orThrow(async () => {
      const serialized = this.serializeValue(value)
      await this.db.put(hash, serialized)
      this.emit('put', hash)
      return value
    })
  }

  /**
   * Delete a given value for a given hash key.
   * @throws if the value does not exist for the give hash.
   */
  async delete(hash: string): Promise<void> {
    return this.orThrow(async () => {
      await this.db.del(hash)
      this.emit('delete', hash)
    })
  }

  /**
   * Delete a given value for a given hash key.
   */
  async deleteSafe(hash: string): Promise<boolean> {
    try {
      await this.db.del(hash)
      this.emit('delete', hash)
      return true
    } catch (e) {
      return false
    }
  }

  /**
   * Delete all expired data.
   */
  async deleteExpired(): Promise<this> {
    for await (const _ of this.entries()) {
      // do nothing. Iterating over all entries deletes expired entries.
    }
    return this
  }

  /**
   * Delete all cached API responses.
   */
  async deleteEverything(): Promise<void> {
    this.orThrow(async () => {
      await this.db.clear()
      this.emit('delete', 'All cache data was deleted.')
    })
  }

  /**
   * Iterate over all [key, value] pairs in the cache.
   */
  async *entries(): AsyncIterableIterator<[string, V]> {
    try {
      for await (const [hash, serialized] of this.db.iterator()) {
        if (this.isExpired(serialized)) {
          this.db.del(hash).then(() => this.emit('expired', hash))
        }
        yield [hash, this.parseSerializedValue(serialized)]
      }
    } catch (error) {
      throw this.emit('error', error)
    }
  }

  /**
   * Iterate over all keys in the cache.
   */
  async *keys(): AsyncIterableIterator<string> {
    try {
      for await (const [hash] of this.entries()) {
        yield hash
      }
    } catch (error) {
      throw this.emit('error', error)
    }
  }

  /**
   * Iterate over all values in the cache.
   */
  async *values(): AsyncIterableIterator<V> {
    try {
      for await (const [_, value] of this.entries()) {
        yield value
      }
    } catch (error) {
      throw this.emit('error', error)
    }
  }

  /**
   * Get the number of entries in the cache.
   */
  async size(): Promise<number> {
    let size = 0
    for await (const _ of this.entries()) {
      size++
    }
    return size
  }

  /**
   * Output all events to the console.
   */
  protected logAllEvents(): void {
    _printEmitterEvents(this, this.events, {
      info: ['options', 'hit', 'miss', 'put', 'get'],
      warn: ['expired', 'delete'],
      error: ['error'],
    })
  }

  /**
   * Deletes a value from the cache if it is expired.
   */
  protected async ensureNotExpired(hash: string, serialized: string): Promise<void> {
    if (this.isExpired(serialized)) {
      await this.db.del(hash)
      this.emit('expired', hash)
      throw new Error('Expired')
    }
  }

  /**
   * Check if a still raw serialized value string is expired.
   */
  protected isExpired(serialized: string): boolean {
    if (!this.maxAgeMs) return false
    return Date.now() - this.parseSerializedTimestamp(serialized) > this.maxAgeMs
  }

  /**
   * Custom JSON stringify function that prepends a timestamp to the stringified object.
   */
  protected serializeValue(value: V): string {
    return Date.now() + JSON.stringify(value)
  }

  /**
   * Parse the timestamp part of a raw serialized value string from the database.
   */
  protected parseSerializedTimestamp(serialized: string): number {
    return parseInt(serialized.substring(0, 13))
  }

  /**
   * Parse the json part of a raw serialized value string from the database.
   */
  protected parseSerializedValue(serialized: string): V {
    return JSON.parse(serialized.substring(13))
  }

  /**
   * Shorthand for try/catch block with error-handling
   * Wrap a function in a try catch block and emit an error event if an error occurs.
   */
  protected orThrow<T>(fn: () => T | Promise<T>): T | Promise<T> {
    try {
      return fn()
    } catch (error) {
      throw this.emit('error', error)
    }
  }

  /**
   * Emit an event but this automatically adds 'this' as an extra argument.
   */
  protected emit<T>(eventName: string, arg: T): T {
    this.events.emit(eventName, arg, this)
    return arg
  }
}
