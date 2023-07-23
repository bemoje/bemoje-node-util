import fs from 'fs'
import { VTTSubtitles } from '../parse/subtitles/VTTSubtitles'
import { OpenaiApiClient } from './OpenaiApiClient'
;(async () => {
  const openai = new OpenaiApiClient({ apiKey: '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' })
  // for (let i = 0; i < 2000; i++) {
  //   openai
  //     .chat3_16({
  //       instruction: 'Your response should be just a number.',
  //       prompt: 'What is 1 plus ' + i + '?',
  //       cache: { overwrite: true },
  //     })
  //     .then((res) => console.log(res))
  // }
  // console.log('all are now in queue.')

  const filePath = 'G:/My Drive/share/digtoplæsning.mp3'

  const { data } = await openai.client.createTranscription(
    fs.createReadStream(filePath) as any,
    'whisper-1',
    undefined,
    'vtt',
    undefined,
    'DA',
  )
  const str = data.toString()
  console.log('-----------------------')
  console.log(str)
  console.log('-----------------------')
  const ins = new VTTSubtitles(str)
  const res = ins.toString()
  console.log(res)
  console.log('-----------------------')
  console.log(res === str)
  console.log('-----------------------')
})().catch(console.error)
