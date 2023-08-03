import path from 'path'
import { log } from '../../src/node/logger/log'
import { FBDataView } from './FBDataView'

// log.initialize({
//   fileLogLevel: LogLevel.DEBUG,
// })

async function example() {
  const root = 'C:/Users/bemoj/Desktop/FBDATA'
  const dirpath = path.join(root, 'dest')
  const zipdir = path.join(root, 'zip')

  const view = await FBDataView.create({
    fullName: 'Benjamin Møller Jensen',
    dirpath,
    replaceNames: {
      user10213923981077849: 'Ali Dahmani',
      user10208580149085389: 'Ali Dahmani',
      user10213923981477859: 'Evi Chon',
      user10207436190247133: 'Evi Chon',
      user10207171512550356: 'Sally Hald',
      user10205800920994751: 'Stoyan Yankov',
      'Teagh Rain': 'Tanya',
    },
    wipeParsedData: false,
    wipeRawData: false,
  })

  log.logEmitterEvents(view.events, {
    eventNamePrefix: 'FBDataView',
    debug: ['start', 'status'],
    info: ['completed', 'data'],
    warn: [],
    error: ['error'],
  })

  await view.initialize(zipdir)

  view.directories()
  view.simpleStats()
  view.threadsByMessageCount(25)
  await view.humanReadableThreads()
  await view.humanReadablePersons()
  await view.humanReadableConversations()
}

example().catch((err) => console.error(err))
