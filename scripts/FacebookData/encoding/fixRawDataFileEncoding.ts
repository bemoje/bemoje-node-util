import { IFBMessage } from '../models/IFBMessage'
import { IFacebookMessagesDataFile } from '../models/IFacebookMessagesDataFile'
import { fixRawDataStringEncoding } from './fixRawDataStringEncoding'

export function fixRawDataFileEncoding(data: IFacebookMessagesDataFile): IFacebookMessagesDataFile {
  data.participants = data.participants.map((o) => {
    o.name = fixRawDataStringEncoding(o.name)
    return o
  })
  data.messages = data.messages.map((m: IFBMessage) => {
    m.sender_name = fixRawDataStringEncoding(m.sender_name)
    if (m.content) m.content = fixRawDataStringEncoding(m.content)
    if (m.share) m.share.share_text = fixRawDataStringEncoding(m.share.share_text)
    if (m.reactions?.length) {
      m.reactions = m.reactions.map((o) => ({
        reaction: fixRawDataStringEncoding(o.reaction),
        actor: fixRawDataStringEncoding(o.actor),
      }))
    }
    if (m.users)
      m.users = m.users.map((o) => {
        o.name = fixRawDataStringEncoding(o.name)
        return o
      })
    return m
  })
  if (data.title) data.title = fixRawDataStringEncoding(data.title)
  if (data.magic_words?.length) {
    data.magic_words = data.magic_words.map((s) => (typeof s === 'string' ? fixRawDataStringEncoding(s) : s))
  }
  return data
}
