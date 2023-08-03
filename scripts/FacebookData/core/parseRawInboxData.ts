import path from 'path'
import { arrRemoveDuplicates } from '../../../src/array/arrRemoveDuplicates'
import { mapGetOrElse } from '../../../src/map/mapGetOrElse'
import { compareNumber } from '../../../src/sort/compareNumber'
import { strHashToStringDJB2 } from '../../../src/string/strHashToStringDJB2'
import { IFBMessageOptions } from '../models/IFBMessageOptions'
import { FBMessage } from './FBMessage'
import { FBPerson } from './FBPerson'
import { FBThread } from './FBThread'
import { iterateRawInboxData } from './iterateRawInboxData'

export function parseRawInboxData(dirpath: string, replaceNames?: Record<string, string>): void {
  function ensureName(name: string, filepath: string): string {
    if (!name.trim() || name.toLowerCase() === 'facebook user' || /^\W+$/.test(name)) {
      const dir = path.basename(path.dirname(filepath))
      name = 'user' + dir.replace(/\D/g, '')
    }
    if (replaceNames && replaceNames[name]) name = replaceNames[name]
    return name
  }

  // temporary map of instances to do fast hash lookups during raw import.
  const Persons = new Map<number, FBPerson>()
  const Threads = new Map<number, FBThread>()
  const Messages = new Map<number, FBMessage>()

  // iterate each file in the inbox directory
  for (const { data, filepath } of iterateRawInboxData(dirpath)) {
    const { participants, messages } = data
    participants.forEach((p) => (p.name = ensureName(p.name, filepath)))
    const participantHashes = participants.map((p) => strHashToStringDJB2(p.name)).sort(compareNumber)
    const threadHash = strHashToStringDJB2(participantHashes.join(','))
    for (const { name } of participants) {
      const personHash = strHashToStringDJB2(name)
      const person = mapGetOrElse(Persons, personHash, () => {
        const p = new FBPerson(name, [], -1)
        Persons.set(personHash, p)
        return p
      })
      person._threads.push(threadHash)
    }
    const thread = mapGetOrElse(Threads, threadHash, () => {
      const t = new FBThread(participantHashes, [], -1)
      Threads.set(threadHash, t)
      return t
    })
    for (const msg of messages) {
      const timestamp = msg.timestamp_ms
      thread._messages.push(timestamp)
      const options: IFBMessageOptions = {}
      if (msg.photos) options.photos = msg.photos
      if (msg.share) options.share = msg.share
      if (msg.ip) options.ip = msg.ip
      if (msg.sticker) options.sticker = msg.sticker
      if (msg.call_duration) options.call_duration = msg.call_duration
      if (msg.missed) options.missed = msg.missed
      if (msg.files) options.files = msg.files
      if (msg.reactions) options.reactions = msg.reactions
      if (msg.gifs) options.gifs = msg.gifs
      if (msg.is_unsent) options.is_unsent = msg.is_unsent
      if (msg.users) options.users = msg.users.map((o) => strHashToStringDJB2(ensureName(o.name, filepath)))
      msg.sender_name = ensureName(msg.sender_name, filepath)
      const ins = new FBMessage(timestamp, strHashToStringDJB2(msg.sender_name), threadHash, msg.content, options, -1)
      Messages.set(timestamp, ins)
      mapGetOrElse(Persons, strHashToStringDJB2(msg.sender_name), () => {
        const p = new FBPerson(msg.sender_name, [threadHash], -1)
        Persons.set(strHashToStringDJB2(msg.sender_name), p)
        return p
      })
    }
  }

  // remove duplicates
  FBPerson.instances.forEach((p) => {
    p._threads = arrRemoveDuplicates(p._threads)
  })
  FBThread.instances.forEach((t) => {
    t._messages = arrRemoveDuplicates(t._messages)
  })
  FBThread.instances.forEach((t) => {
    t._participants = arrRemoveDuplicates(t._participants)
  })
  // finally, since these data are 100% static, we can sort them all chronologically and assign them index values based on their sort order.
  // The indices can now be used for even faster array lookups to retrieve the instances that it refers to.
  // MESSAGES: Sort messages chronologically and then assign new index values to them.
  FBMessage.instances.sort((a, b) => a.time - b.time)
  // MESSAGES: update index simply to its current array index.
  FBMessage.instances.forEach((m, i) => (m.i = i))

  // MESSAGE INDICES NOW CORRECT
  // Sort persons by who has sent the most messages, which will make them more likely to be looked for later.
  FBPerson.instances.sort((a, b) => b._threads.length - a._threads.length)
  // assign new index values to them.
  FBPerson.instances.forEach((p, i) => (p.i = i))
  // PERSON INDICES NOW CORRECT
  // THREADS:for each thread:
  FBThread.instances.forEach((t) => {
    // sort them by message index (chronological).
    t._messages.sort((a: number, b: number) => a - b)
    // replace message timestamps with the message index
    t._messages = t._messages.map((timestamp) => Messages.get(timestamp)!.i)
  })
  // THREADS: Sort threads.messages so that the first message is the most recent one.
  FBThread.instances.sort((a, b) => a._messages[0] - b._messages[0])
  // THREADS: update index simply to its current array index.
  FBThread.instances.forEach((t, i) => (t.i = i))
  // THREAD INDICES NOW CORRECT
  // MESSAGES: replace sender hashes with index values.
  FBMessage.instances.forEach((m) => {
    m._sender = (Persons.get(m._sender) as FBPerson).i
  })
  // MESSAGES: replace thread hashes with index values.
  FBMessage.instances.forEach((m) => {
    m._thread = (Threads.get(m._thread) as FBThread).i
  })
  // PERSONS: for each person:
  FBPerson.instances.forEach((p) => {
    // replace thread hashes with their indices
    p._threads = p._threads.map((hash) => (Threads.get(hash) as FBThread).i)
    // sorted them by thread index (most recent first)
    p._threads.sort((a, b) => a - b)
  })
  // THREADS:for each thread:
  FBThread.instances.forEach((t) => {
    // replace participant hashes with their indices
    t._participants = t._participants.map((hash) => Persons.get(hash)!.i)
    // sort them by message index
    t._participants.sort((a, b) => a - b)
  })
}
