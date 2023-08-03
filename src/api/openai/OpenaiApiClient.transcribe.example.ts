import { cwdpath } from '../../filesystem/cwdpath'
import { log } from '../../node/logger/log'
import { LogLevel } from '../../node/logger/types/LogLevel'
import { VTTSubtitles } from '../../parse/subtitles/VTTSubtitles'
import { OpenaiApiClientExtended } from './OpenaiApiClientExtended'

//
;(async () => {
  log.initialize({
    consoleLogLevel: LogLevel.INFO,
  })

  const openai = new OpenaiApiClientExtended({
    cache: { enable: true },
    logAllEvents: true,
  })

  const subtitles = await openai.transcribe({
    request: {
      filepath: cwdpath('notes', 'test-openai-transcribe2.mp3'),
      language: 'en',
      format: 'vtt',
    },
    // cache: { overwrite: true },
  })

  const vtt = new VTTSubtitles(subtitles)
  vtt.subtitles = await Promise.all(
    vtt.subtitles.map(async (sub) => {
      sub.text = await openai.proofreadEnglish(sub.text)
      return sub
    }),
  )

  console.log('-----------------------')
  console.log(vtt)
  console.log('-----------------------')
  console.log(vtt.toString())
  console.log('-----------------------')
})().catch(console.error)
