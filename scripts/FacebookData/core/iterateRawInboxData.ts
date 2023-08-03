import fs from 'fs'
import path from 'path'
import { IFacebookMessagesDataFile } from '../models/IFacebookMessagesDataFile'

export function* iterateRawInboxData(
  inboxpath: string,
): Generator<{ data: IFacebookMessagesDataFile; filepath: string }> {
  for (const fileid of fs.readdirSync(inboxpath)) {
    const threadpath = path.join(inboxpath, fileid)
    for (const filename of fs.readdirSync(threadpath)) {
      const filepath = path.join(threadpath, filename)
      if (!filepath.endsWith('.json')) continue
      let data: IFacebookMessagesDataFile
      try {
        data = JSON.parse(fs.readFileSync(filepath, 'utf8'))
      } catch (error) {
        console.error({ errorfilepath: filepath })
        throw error
      }
      yield { data, filepath }
    }
  }
}
