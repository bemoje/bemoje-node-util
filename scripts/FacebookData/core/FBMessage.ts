import { IFBMessageAttachedFile } from '../models/IFBMessageAttachedFile'
import { IFBMessageGif } from '../models/IFBMessageGif'
import { IFBMessageOptions } from '../models/IFBMessageOptions'
import { IFBMessageReaction } from '../models/IFBMessageReaction'
import { IFBMessageShare } from '../models/IFBMessageShare'
import { FBPerson } from './FBPerson'
import { FBThread } from './FBThread'

const wmap: WeakMap<FBMessage, number> = new WeakMap()

/**
 * @class FBMessage
 * Represents a message in a thread.
 */
export class FBMessage implements IFBMessageOptions {
  time: number
  _sender: number = 0
  _thread: number = 0
  content: string
  photos?: IFBMessageAttachedFile[]
  share?: IFBMessageShare
  ip?: string
  sticker?: string
  call_duration?: number
  missed?: boolean
  files?: IFBMessageAttachedFile[]
  reactions?: IFBMessageReaction[]
  gifs?: IFBMessageGif[]
  is_unsent?: boolean
  users?: number[]

  static instances: FBMessage[] = []

  static serializeInstances(): string {
    return JSON.stringify(this.instances, null, 1)
  }

  static deserializeInstances(json: string): void {
    this.instances = []
    const parsed = JSON.parse(json)
    for (let i = 0; i < parsed.length; i++) {
      const args = parsed[i]
      new FBMessage(args[0], args[1], args[2], args[3], args[4])
    }
  }

  constructor(time: number, sender: number, thread: number, content = '', options?: IFBMessageOptions, i?: number) {
    if (i !== undefined) this.i = i
    this.time = time
    Object.defineProperty(this, '_sender', { enumerable: false, value: sender })
    Object.defineProperty(this, '_thread', { enumerable: false, value: thread })
    this.content = content
    Object.assign(this, options)
    FBMessage.instances.push(this)
  }

  get sender(): FBPerson {
    return FBPerson.instances[this._sender]
  }

  get thread(): FBThread {
    return FBThread.instances[this._thread]
  }

  get i(): number {
    return wmap.get(this)!
  }

  set i(value: number) {
    wmap.set(this, value)
  }

  toJSON() {
    const opt: IFBMessageOptions = {}
    if (this.photos !== undefined) opt.photos = this.photos
    if (this.share !== undefined) opt.share = this.share
    if (this.ip !== undefined) opt.ip = this.ip
    if (this.sticker !== undefined) opt.sticker = this.sticker
    if (this.call_duration !== undefined) opt.call_duration = this.call_duration
    if (this.missed !== undefined) opt.missed = this.missed
    if (this.files !== undefined) opt.files = this.files
    if (this.reactions !== undefined) opt.reactions = this.reactions
    if (this.gifs !== undefined) opt.gifs = this.gifs
    if (this.is_unsent !== undefined) opt.is_unsent = this.is_unsent
    if (this.users !== undefined) opt.users = this.users
    return [this.time, this._sender, this._thread, this.content, opt]
  }

  #toHumanReadable?: Record<string, any>
  toHumanReadable() {
    if (this.#toHumanReadable === undefined) {
      const opt: IFBMessageOptions = {}
      if (this.photos !== undefined) opt.photos = this.photos
      if (this.share !== undefined) opt.share = this.share
      if (this.ip !== undefined) opt.ip = this.ip
      if (this.sticker !== undefined) opt.sticker = this.sticker
      if (this.call_duration !== undefined) opt.call_duration = this.call_duration
      if (this.missed !== undefined) opt.missed = this.missed
      if (this.files !== undefined) opt.files = this.files
      if (this.reactions !== undefined) opt.reactions = this.reactions
      if (this.gifs !== undefined) opt.gifs = this.gifs
      if (this.is_unsent !== undefined) opt.is_unsent = this.is_unsent
      if (this.users !== undefined) opt.users = this.users
      this.#toHumanReadable = {
        time: new Date(this.time).toISOString(),
        sender: this.sender.firstName,
        content: this.content,
        ...opt,
      }
    }
    return this.#toHumanReadable
  }

  get recipients() {
    return FBThread.instances[this._thread].participants.filter((p) => p.i !== this._sender)
  }
}
