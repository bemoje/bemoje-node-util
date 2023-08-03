import fs from 'fs'
import path from 'path'
import { prettyIsoDateString } from '../../src/date/prettyIsoDateString'
import { createDirectory } from '../../src/filesystem/createDirectory'
import { removeIllegalFilenameCharacters } from '../../src/filesystem/removeIllegalFilenameCharacters'
import { wipeDirectorySafe } from '../../src/filesystem/wipeDirectorySafe'
import { funAsyncAutoRateLimit } from '../../src/function/funAsyncAutoRateLimit'
import { FBDataViewBase } from './FBDataViewBase'
import { IFBDataViewOptions } from './models/IFBDataViewOptions'

const writeFileAsync = funAsyncAutoRateLimit(5000, fs.promises.writeFile)

export class FBDataView extends FBDataViewBase {
  protected static instance: FBDataView

  static create(options: IFBDataViewOptions): FBDataView {
    if (FBDataView.instance) return FBDataView.instance
    FBDataView.instance = new FBDataView(options)
    return FBDataView.instance
  }

  protected constructor(options: IFBDataViewOptions) {
    super(options)
  }

  directories() {
    return this.taskSync('directories', () => {
      return {
        dirpath: this.dirpath,
        outputdir: this.outputdir,
        datadir: this.datadir,
        parsedDataDir: this.parsedDataDir,
        rawDataDir: this.rawDataDir,
        personDataPath: this.personDataPath,
        threadDataPath: this.threadDataPath,
        messageDataPath: this.messageDataPath,
        rawInboxDataDir: this.rawInboxDataDir,
        isDataGood: this.isDataGood(),
      }
    })
  }

  simpleStats() {
    return this.taskSync('simple-stats', () => {
      return {
        persons: this.persons.length,
        threads: this.threads.length,
        messages: this.messages.length,
      }
    })
  }

  /**
   * Counts how many messages are in each thread and sorts them by the number of messages.
   */
  threadsByMessageCount(topN: number) {
    return this.taskSync('threads-by-message-count', () => {
      return this.threads
        .map((thread) => {
          return {
            count: thread._messages.length,
            thread: thread.participants
              .map((p) => p.name)
              .filter((p) => p !== this.fullName)
              .join(', '),
          }
        })
        .sort((a, b) => b.count - a.count)
        .slice(0, topN)
    })
  }

  async humanReadableThreads() {
    return await this.task('human-readable-threads', async () => {
      const threadsPath = path.join(this.outputdir, 'human-readable', 'threads')
      await wipeDirectorySafe(threadsPath)
      await Promise.all(
        this.threads.map(async (thread) => {
          const serialized = JSON.stringify(thread.toHumanReadable(), null, 1)
          let names = thread.participantsForFilename(this.fullName)
          if (!names) return
          while (fs.existsSync(path.join(threadsPath, names + '.json'))) names += '_'
          const filepath = path.join(threadsPath, names + '.json')
          await writeFileAsync(filepath, serialized, 'utf8')
        }),
      )
      return threadsPath
    })
  }
  async humanReadablePersons() {
    return await this.task('human-readable-persons', async () => {
      const personsPath = path.join(this.outputdir, 'human-readable', 'persons')
      await wipeDirectorySafe(personsPath)
      await Promise.all(
        this.persons.map(async (p) => {
          const person = p.toHumanReadable()
          if (person.name === this.fullName) return
          const filename = person.name + '.json'
          await writeFileAsync(
            path.join(personsPath, removeIllegalFilenameCharacters(filename)),
            JSON.stringify(person, null, 1),
            'utf8',
          )
        }),
      )
      return personsPath
    })
  }
  async humanReadableConversations() {
    return await this.task('human-readable-conversations', async () => {
      const conversationsPath = path.join(this.outputdir, 'human-readable', 'conversations')
      await wipeDirectorySafe(conversationsPath)
      await Promise.all(
        this.threads.map(async (thread) => {
          const conversations = thread.conversations(60 * 20, 2).map((c) => c.toHumanReadable())
          if (!conversations.length) return
          const dirname = thread.participantsForFilename(this.fullName)
          if (!dirname) return
          let dirpath = path.join(conversationsPath, dirname)
          while (fs.existsSync(dirpath)) dirpath += '_'
          await createDirectory(dirpath)
          await Promise.all(
            conversations.map(async (con) => {
              const markdown = con.messages
              const filename = prettyIsoDateString(con.start.toISOString(), '_', 'minute') + '.md'
              const filepath = path.join(dirpath, filename)
              await writeFileAsync(filepath, markdown, 'utf8')
            }),
          )
        }),
      )
      return conversationsPath
    })
  }
}
