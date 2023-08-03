import { IFBMessageAttachedFile } from './IFBMessageAttachedFile'
import { IFBMessageGif } from './IFBMessageGif'
import { IFBMessageReaction } from './IFBMessageReaction'
import { IFBMessageShare } from './IFBMessageShare'

export interface IFBMessageOptions {
  content?: string
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
}
