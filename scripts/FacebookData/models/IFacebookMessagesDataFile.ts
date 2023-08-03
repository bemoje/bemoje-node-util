import { IFBMessage } from './IFBMessage'
import { IFBMessageAttachedFile } from './IFBMessageAttachedFile'
import { IFBMessageAudioFile } from './IFBMessageAudioFile'
import { IFBThreadJoinableMode } from './IFBThreadJoinableMode'
import { IFBUser } from './IFBUser'

export interface IFacebookMessagesDataFile {
  participants: IFBUser[]
  messages: IFBMessage[]
  title?: string
  is_still_participant?: boolean
  thread_path?: string
  magic_words?: string[]
  audio_files?: IFBMessageAudioFile[]
  joinable_mode?: IFBThreadJoinableMode
  image?: IFBMessageAttachedFile
}
