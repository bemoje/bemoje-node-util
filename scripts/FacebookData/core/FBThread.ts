import { arrLast } from '../../../src/array/arrLast'
import { prettyIsoDateString } from '../../../src/date/prettyIsoDateString'
import { removeIllegalFilenameCharacters } from '../../../src/filesystem/removeIllegalFilenameCharacters'
import { assertNonZeroPositiveInteger } from '../../../src/validation/assertNonZeroPositiveInteger'
import { FBConversation } from './FBConversation'
import { FBMessage } from './FBMessage'
import { FBPerson } from './FBPerson'

const wmap: WeakMap<FBThread, number> = new WeakMap()

/**
 * @class FBThread
 * Represents a facebook messenger thread.
 */
export class FBThread {
  _participants: number[] = []
  _messages: number[] = []

  static instances: FBThread[] = []

  static serializeInstances(): string {
    return JSON.stringify(this.instances, null, 1)
  }

  static deserializeInstances(json: string): void {
    this.instances = []
    const parsed = JSON.parse(json)
    for (let i = 0; i < parsed.length; i++) {
      const args = parsed[i]
      new FBThread(args[0], args[1])
    }
  }

  constructor(participants: number[], messages: number[], i?: number) {
    if (i !== undefined) this.i = i
    Object.defineProperty(this, '_participants', { enumerable: false, value: participants })
    Object.defineProperty(this, '_messages', { enumerable: false, value: messages })
    FBThread.instances.push(this)
  }

  get i(): number {
    return wmap.get(this)!
  }

  set i(value: number) {
    wmap.set(this, value)
  }

  toJSON() {
    return [this._participants, this._messages]
  }

  toHumanReadable() {
    const participants = this.participants.map((p) => p.name)
    const messages = this.messages.map((message) => message.toHumanReadable())
    messages.forEach((m) => (m.time = prettyIsoDateString(m.time, ' ', 'minute')))
    return { participants, messages }
  }

  get participants(): FBPerson[] {
    return this._participants.map((i) => FBPerson.instances[i])
  }

  participantsWithout(omitPersonName?: string): FBPerson[] {
    if (!omitPersonName) return this.participants
    return this.participants.filter((p) => p.name !== omitPersonName)
  }

  participantsNames(omitPersonName?: string): string[] {
    return this.participantsWithout(omitPersonName).map((p) => p.name)
  }

  participantsFirstNames(omitPersonName?: string): string[] {
    const participants = this.participantsWithout(omitPersonName)
    let names = participants.map((p) => p.firstName)
    if (new Set(names).size !== participants.length) {
      names = participants.map((p, i) => p.firstName + this.participantsInitials(omitPersonName)[i])
    }
    return names
  }

  participantsInitials(omitPersonName?: string): string[] {
    const participants = this.participantsWithout(omitPersonName)
    let initials = participants.map((p) =>
      p.name
        .split(' ')
        .map((s) => s[0].toUpperCase())
        .join(''),
    )
    if (new Set(initials).size !== initials.length) {
      initials = participants.map((p) =>
        p.name
          .split(' ')
          .map((s) => s[0].toUpperCase() + s[1])
          .join(''),
      )
    }
    return initials
  }

  #participantsForFilename?: string
  participantsForFilename(omitPersonName: string): string {
    if (this.#participantsForFilename) return this.#participantsForFilename
    const part =
      this.participants.length <= 2
        ? this.participantsNames(omitPersonName)
        : this.participants.length <= 5
        ? this.participantsFirstNames(omitPersonName)
        : this.participantsInitials(omitPersonName)
    return (this.#participantsForFilename = removeIllegalFilenameCharacters(part.join(' ').trim()))
  }

  *iterateParticipants(): Generator<FBPerson> {
    for (const i of this._participants) {
      yield FBPerson.instances[i]
    }
  }

  get messages(): FBMessage[] {
    return this._messages.map((i) => FBMessage.instances[i])
  }

  *iterateMessages(): Generator<FBMessage> {
    for (const i of this._messages) {
      yield FBMessage.instances[i]
    }
  }

  *iterateConversations(maxMessageSpacingMinutes: number = 60 * 20, minMessageCount = 2): Generator<FBConversation> {
    assertNonZeroPositiveInteger(maxMessageSpacingMinutes)
    assertNonZeroPositiveInteger(minMessageCount)

    const maxSpacing = 1000 * 60 * maxMessageSpacingMinutes
    let accum: FBMessage[] = []
    for (const message of this.iterateMessages()) {
      if (!accum.length) {
        accum.push(message)
        continue
      }
      const prevMessage = arrLast(accum)
      const spacing = Math.abs(prevMessage.time - message.time)
      const _maxSpacing = accum.length < 20 ? maxSpacing : accum.length < 50 ? maxSpacing / 5 : maxSpacing / 10
      if (spacing <= _maxSpacing) {
        accum.push(message)
        continue
      }
      if (accum.length >= minMessageCount) {
        if (new Set(accum.map((m) => m._sender)).size >= 2) {
          yield new FBConversation(this, accum)
        }
      }
      accum = [message]
    }
    if (accum.length >= minMessageCount) {
      if (new Set(accum.map((m) => m._sender)).size >= 2) {
        yield new FBConversation(this, accum)
      }
    }
  }

  conversations(maxMessageSpacingMinutes: number = 60 * 10, minMessageCount = 2): FBConversation[] {
    return Array.from(this.iterateConversations(maxMessageSpacingMinutes, minMessageCount))
  }
}
