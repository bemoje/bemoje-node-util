import extract from 'extract-zip'
import fs from 'fs'
import jschardet from 'jschardet'
import path from 'path'
import { createDirectory } from '../../src/filesystem/createDirectory'
import { createDirectorySync } from '../../src/filesystem/createDirectorySync'
import { deleteDirectorySafe } from '../../src/filesystem/deleteDirectorySafe'
import { deleteDirectorySafeSync } from '../../src/filesystem/deleteDirectorySafeSync'
import { MixinBase } from '../../src/mixins/MixinBase'
import { MixinEventEmitter } from '../../src/mixins/MixinEventEmitter'
import { round } from '../../src/number/round'
import { setNonEnumerable } from '../../src/object/setNonEnumerable'
import { FBMessage } from './core/FBMessage'
import { FBPerson } from './core/FBPerson'
import { FBThread } from './core/FBThread'
import { parseRawInboxData } from './core/parseRawInboxData'
import { fixRawDataEncoding } from './encoding/fixRawDataEncoding'
import { IFBDataViewOptions } from './models/IFBDataViewOptions'

export abstract class FBDataViewBase extends MixinEventEmitter(MixinBase) {
  readonly outputs: Set<string> = new Set()
  persons: FBPerson[] = FBPerson.instances
  threads: FBThread[] = FBThread.instances
  messages: FBMessage[] = FBMessage.instances

  fullName: string
  dirpath: string
  replaceNames?: Record<string, string>

  protected constructor(options: IFBDataViewOptions) {
    const { fullName, dirpath, replaceNames, wipeParsedData, wipeRawData } = options
    super()
    this.fullName = fullName
    this.dirpath = dirpath
    this.replaceNames = replaceNames
    createDirectorySync(this.outputdir)
    createDirectorySync(this.datadir)
    if (wipeParsedData) deleteDirectorySafeSync(this.parsedDataDir)
    if (wipeRawData) deleteDirectorySafeSync(this.rawDataDir)
  }

  get outputdir(): string {
    return path.join(this.dirpath, 'output')
  }
  get datadir(): string {
    return path.join(this.dirpath, 'data')
  }
  protected get parsedDataDir(): string {
    return path.join(this.dirpath, 'data', 'parsed')
  }
  protected get rawDataDir(): string {
    return path.join(this.dirpath, 'data', 'raw')
  }
  protected get personDataPath(): string {
    return path.join(this.dirpath, 'data', 'parsed', 'Person.json')
  }
  protected get threadDataPath(): string {
    return path.join(this.dirpath, 'data', 'parsed', 'Thread.json')
  }
  protected get messageDataPath(): string {
    return path.join(this.dirpath, 'data', 'parsed', 'Message.json')
  }
  protected get rawInboxDataDir(): string {
    return path.join(this.dirpath, 'data', 'raw', 'messages', 'inbox')
  }
  protected isDataGood(): boolean {
    return (
      fs.existsSync(this.personDataPath) && fs.existsSync(this.threadDataPath) && fs.existsSync(this.messageDataPath)
    )
  }

  async initialize(zipdir?: string): Promise<void> {
    if (!this.isDataGood()) {
      if (!fs.existsSync(this.rawInboxDataDir)) {
        if (!zipdir) {
          return this.emit('error', new Error('No parsed data found and no zip-file directory provided.'))
        }
        await this.initUnzip(zipdir)
        this.initFixEncoding()
      }
      await this.initParseData()
      if (!this.isCorrectEncoding())
        this.emit('error', new Error('Encoding failed to be fixed. Proceeding with incorrect encoding.'))
      this.loadDataFiles()
      if (!this.isDataGood()) {
        return this.emit('error', new Error('No parsed data found. Initialization cancelled.'))
      }
    }
    return this.loadDataFiles()
  }

  protected async initUnzip(zipdir: string): Promise<void> {
    await this.task('unzip', async () => {
      this.taskStatus('unzip', 'source: ' + zipdir)
      this.taskStatus('unzip', 'taget: ' + this.rawDataDir)
      await deleteDirectorySafe(this.rawDataDir)
      await createDirectory(this.rawDataDir)
      const filenames = fs.readdirSync(zipdir)
      for (const filename of filenames) {
        const t0 = Date.now()
        const filepath = path.join(zipdir, filename)
        const stat = await fs.promises.stat(filepath)
        if (stat.isDirectory()) continue
        if (!filename.endsWith('.zip')) continue
        this.taskStatus('unzip', 'Unzipping ' + filename + ' (' + round(stat.size / 1024 / 1024, 0) + ' MB)')
        await extract(filepath, { dir: this.rawDataDir })
        const elapsed = round((Date.now() - t0) / 1000, 4) + ' sec'
        this.taskStatus('unzip', 'Unzip completed in ' + elapsed + ': ' + filename)
      }
    })
  }

  protected initFixEncoding(): void {
    this.taskSync('fix-encoding', () => {
      fixRawDataEncoding(this.rawInboxDataDir)
    })
  }

  protected async initParseData(): Promise<void> {
    await this.task('parse-messages', async () => {
      parseRawInboxData(this.rawInboxDataDir, this.replaceNames)

      // write parsed message data to disk
      const parseddir = path.join(this.dirpath, 'data', 'parsed')
      await createDirectory(parseddir)

      await fs.promises.writeFile(this.personDataPath, FBPerson.serializeInstances(), 'utf8')
      this.taskStatus('parse-messages', 'person data: ' + this.personDataPath)

      await fs.promises.writeFile(this.threadDataPath, FBThread.serializeInstances(), 'utf8')
      this.taskStatus('parse-messages', 'thread data: ' + this.threadDataPath)

      await fs.promises.writeFile(this.messageDataPath, FBMessage.serializeInstances(), 'utf8')
      this.taskStatus('parse-messages', 'message data: ' + this.messageDataPath)
    })
  }

  protected loadDataFiles(): void {
    this.taskSync('load-data', () => {
      FBPerson.deserializeInstances(fs.readFileSync(this.personDataPath, 'utf8'))
      FBThread.deserializeInstances(fs.readFileSync(this.threadDataPath, 'utf8'))
      FBMessage.deserializeInstances(fs.readFileSync(this.messageDataPath, 'utf8'))
      this.persons = FBPerson.instances
      this.threads = FBThread.instances
      this.messages = FBMessage.instances
      setNonEnumerable(this, 'persons', 'threads', 'messages')
    })
  }

  protected isCorrectEncoding() {
    return true
    const data = JSON.parse(fs.readFileSync(this.messageDataPath, 'utf8').toString())
    let str = ''
    for (const arr of data) {
      str += arr[3] || ''
      if (str.length > 50000) break
    }
    const result = jschardet.detect(str)
    return result.encoding === 'ISO-8859-2'
  }
}
