import { FBMessage } from './FBMessage'
import { FBThread } from './FBThread'

const wmap: WeakMap<FBPerson, number> = new WeakMap()

/**
 * @class FBPerson
 * Represents a person having been in contact with.
 */
export class FBPerson {
  name: string
  _threads: number[] = []

  static instances: FBPerson[] = []

  static serializeInstances(): string {
    return JSON.stringify(this.instances, null, 1)
  }

  static deserializeInstances(json: string): void {
    this.instances = []
    const parsed = JSON.parse(json)
    for (let i = 0; i < parsed.length; i++) {
      const args = parsed[i]
      new FBPerson(args[0], args[1])
    }
  }

  constructor(name: string, threads: number[], i?: number) {
    if (i !== undefined) this.i = -1
    this.name = name
    Object.defineProperty(this, '_threads', { enumerable: false, value: threads })
    FBPerson.instances.push(this)
  }

  get i(): number {
    return wmap.get(this)!
  }

  set i(value: number) {
    wmap.set(this, value)
  }

  get firstName(): string {
    return this.name.substring(0, this.name.indexOf(' '))
  }

  toJSON() {
    return [this.name, this._threads]
  }

  toHumanReadable() {
    return {
      name: this.name,
      threads: this.threads.map((t) => t.participants.map((p) => p.name)),
    }
  }

  get threads(): FBThread[] {
    return this._threads.map((i) => FBThread.instances[i])
  }

  *iterateThreads(): Generator<FBThread> {
    for (const i of this._threads) {
      yield FBThread.instances[i]
    }
  }

  *iterateMessages(): Generator<FBMessage> {
    for (const thread of this.iterateThreads()) {
      for (const message of thread.iterateMessages()) {
        if (message._sender === this.i) {
          yield message
        }
      }
    }
  }

  #messagesChronologically?: FBMessage[]
  getMessagesChronologically(): Array<FBMessage> {
    if (this.#messagesChronologically === undefined) {
      this.#messagesChronologically = [...this.iterateMessages()].sort((a, b) => b.i - a.i)
    }
    return this.#messagesChronologically
  }

  #messageCount?: number
  get messageCount(): number {
    if (this.#messageCount === undefined) {
      let count = 0
      for (const index of this._threads) {
        count += FBThread.instances[index]._messages.length
      }
      this.#messageCount = count
    }
    return this.#messageCount
  }
}
