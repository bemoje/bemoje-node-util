import fs from 'fs'
import path from 'path'
import { OpenaiApiClient } from '../../../src/api/openai/OpenaiApiClient'
import { EMOTIONS } from '../core/emotions'
import { normalizeEmotion } from './normalizeEmotion'
// import { waitSeconds } from '../../src/async/waitSeconds';

type EmotionIntensity = 'strong' | 'intense' | 'very intense'
interface IExpressedEmotion {
  name: string
  emotion: string
  intensity: EmotionIntensity
  messages: number[]
}
type RelationType = 'friends' | 'family' | 'romantic' | 'colleagues' | 'acquaintances'
type PleasantInteraction = 'very much' | 'yes' | 'neutral' | 'no' | 'not at all'
interface IEmotionalSupport {
  supporter: string
  receiver: string
  messages: number[]
}
type DisrespectSeverity = 'mild' | 'severe' | 'very severe'
interface IDisrespect {
  severity: DisrespectSeverity
  offender: string
  victim: string
  messages: number[]
}
interface IConversationAnalysisResult {
  topics?: string[]
  relation_type?: RelationType
  expressed_emotions?: IExpressedEmotion[]
  emotional_support?: IEmotionalSupport[]
  disrespect?: IDisrespect[]
  pleasant_interaction?: PleasantInteraction
  summary?: string
}
const relationTypeSet = new Set(['friends', 'family', 'romantic', 'colleagues', 'acquaintances'])
const pleasantInteractionSet = new Set(['very much', 'yes', 'neutral', 'no', 'not at all'])
const disrespectSeveritySet = new Set(['mild', 'severe', 'very severe'])
const emotionIntensitySet = new Set(['strong', 'intense', 'very intense'])

// example

async function analyzeConversation(
  api: OpenaiApiClient,
  filepath: string,
): Promise<IConversationAnalysisResult | undefined> {
  const markdown = (await fs.promises.readFile(filepath, 'utf8')).replace(/\r?\n/g, '\n')
  const lines = markdown.split('\n')
  const idxPresent = lines.findIndex((line) => line === '### Present')
  const idxTime = lines.findIndex((line) => line === '### Time')
  const names = lines.slice(idxPresent + 1, idxTime).filter((l) => !!l.trim())
  const firstNames = names.map((name) => name.split(' ')[0].toLowerCase())
  const nameSet = new Set([...names.map((n) => n.toLowerCase()), ...firstNames])
  const idxFirstMessage = lines.findIndex((line) => line.startsWith('####'))
  const header = lines.slice(0, idxFirstMessage).join('\n')
  const messages = lines
    .slice(idxFirstMessage)
    .join('\n')
    .split('####')
    .slice(1)
    .map((m, i) => '#### [' + i + ']' + m.replace(/\n+/g, '\n').trimEnd())
    .join('\n\n')

  const instruction = [
    'You are a highly trained psychoanalyst with deep emotional understanding, capable of Theory of Mind and empathy. You are performing an expert analysis on a transcribed conversation of numbered entries. Be sure to read the instructions carefully and follow them exactly.',
    '',
    'Here are the instructions for the what the analysis consists of:',
    `- Provide classification of the top 5 most dicussed conversation topics.`,
    '- Determine the type of relationship.',
    '- Are any very strong emotions expressed? If so, please detail the first name of who expressed it, exactly which basic emotion from the wheel of emotions (from psychology literaty) was expressed, the intensity of the emotion and also provide the exact message number(s) in which it was expressed. If no one did, just fill in an empty array. If there are multiple types of emotions being expressed ny the same person, please detail each of them.',
    '- Is someone offering emotional support? If so, please detail the first name of who is offering support, the first name of who is receiving it, and provide the exact message number(s) in which it was said. If no one did, just fill in an empty array. If there are multiple instances, please detail each of them.',
    '- Is someone being disrespectful? If so, please detail the first name of who is being disrespectful, the first name of who is being disrespected, the severity and provide the exact message number(s) in which it was said. If no one did, just fill in an empty array. If there are multiple instances, please detail each of them.',
    '- Determine to what degree this interaction was pleasant.',
    '',
    'Your response should be in JSON format in accordance with the below schema:',
    '',
    `interface schema {`,
    `  topics: Array<string>`,
    `  relation_type: 'friends'|'family'|'romantic'|'colleagues'|'acquaintances'`,
    `  expressed_emotions: Array<{name:string,emotion_name_in_english:string,intensity:'strong'|'intense'|'very intense',messages:number[]}>`,
    `  emotional_support: Array<{supporter:string,receiver:string,messages:number[]}>`,
    `  disrespect: Array<{severity:'mild'|'severe'|'very severe',offender:string,victim:string,messages:number[]}>`,
    `  pleasant_interaction: 'very much'|'yes'|'neutral'|'no'|'not at all'`,
    `}`,
    ``,
    `Respond only with valid JSON and nothing else.`,
  ].join('\n')

  const instructionTokens = api.countTokens(instruction)
  const headerTokens = api.countTokens(header)
  const messagesTokens = api.countTokens(messages)
  const totalTokens = instructionTokens + headerTokens + messagesTokens

  console.log({
    instruction: instructionTokens,
    header: headerTokens,
    messages: messagesTokens,
    total: totalTokens,
  })

  if (totalTokens > 12000) throw new Error('too many tokens')

  try {
    const json = await api.gpt3_16k({
      temperature: 0.75,
      instruction,
      prompt: header + messages,
    })

    const res: IConversationAnalysisResult = JSON.parse(
      json.toLowerCase().replace(/emotion_name_in_english/g, 'emotion'),
    )

    if (res.topics) {
      if (!Array.isArray(res.topics) || !res.topics.length) {
        delete res.topics
      } else {
        res.topics = res.topics
          .map((t: string) => t.toLowerCase())
          .filter((t: string) => !nameSet.has(t))
          .sort((a: string, b: string) => a.length - b.length)
          .slice(0, 8)
      }
    }

    if (res.relation_type) {
      if (!relationTypeSet.has(res.relation_type)) {
        delete res.relation_type
      }
    }

    if (res.expressed_emotions) {
      if (!Array.isArray(res.expressed_emotions) || !res.expressed_emotions.length) {
        delete res.expressed_emotions
      } else {
        const result: IExpressedEmotion[] = []
        for (const o of res.expressed_emotions) {
          if (!emotionIntensitySet.has(o.intensity)) continue
          if (!o.emotion) continue
          o.name = o.name.trim().split(' ')[0]
          if (!nameSet.has(o.name)) continue
          o.messages = o.messages.map((n: number | string) => parseInt(n.toString())).filter(Number.isInteger)
          if (!o.messages.length) continue
          if (!EMOTIONS.has(o.emotion)) {
            o.emotion = await normalizeEmotion(api, o.emotion)
            if (!EMOTIONS.has(o.emotion)) continue
          }
          result.push(o)
        }
        res.expressed_emotions = result
      }
    }

    if (res.emotional_support) {
      if (!Array.isArray(res.emotional_support) || !res.emotional_support.length) {
        delete res.emotional_support
      } else {
        res.emotional_support = res.emotional_support
          .map((o: IEmotionalSupport) => {
            o.supporter = o.supporter.trim().split(' ')[0]
            o.receiver = o.receiver.trim().split(' ')[0]
            if (!nameSet.has(o.supporter) || !nameSet.has(o.receiver)) return
            o.messages = o.messages.map((n: number | string) => parseInt(n.toString())).filter(Number.isInteger)
            if (!o.messages.length) return
            return o
          })
          .filter((o?: IEmotionalSupport) => !!o) as IEmotionalSupport[]
      }
    }

    if (res.disrespect) {
      if (!Array.isArray(res.disrespect) || !res.disrespect.length) {
        delete res.disrespect
      } else {
        res.disrespect = res.disrespect
          .map((o: IDisrespect) => {
            if (!disrespectSeveritySet.has(o.severity)) return
            o.offender = o.offender.trim().split(' ')[0]
            o.victim = o.victim.trim().split(' ')[0]
            if (!nameSet.has(o.offender) || !nameSet.has(o.victim)) return
            o.messages = o.messages.map((n: number | string) => parseInt(n.toString())).filter(Number.isInteger)
            if (!o.messages.length) return
            return o
          })
          .filter((o?: IDisrespect) => !!o) as IDisrespect[]
      }
    }

    if (res.pleasant_interaction) {
      if (!pleasantInteractionSet.has(res.pleasant_interaction)) {
        res.pleasant_interaction = undefined
      }
    }

    return res as IConversationAnalysisResult
  } catch (error: any) {
    console.error(error.message)
    return
  }
}

// example
;(async () => {
  const api = new OpenaiApiClient({
    logAllEvents: false,
    cache: { enable: true },
    concurrency: { concurrency: 2 },
  })

  const exportdir = 'C:/Users/bemoj/Desktop/FBDATA'
  const conversations = path.join(exportdir, 'dest/output/human-readable/conversations')

  const persons = await fs.promises.readdir(conversations)
  const files = persons
    .map((name) => {
      return fs.readdirSync(path.join(conversations, name)).map((filename) => {
        return [name, filename]
      })
    })
    .flat(1)
    .sort((a, b) => b[1].localeCompare(a[1]))
  console.log(files)
  process.exit()
  // const persons = [
  //   'Anja Thomassen',
  //   'Josephine Møller Jensen',
  //   'Lauritz Andersen',
  //   'Thomas Siggaard',
  //   'Jens Nicolai Ladekær Gräs',
  //   'Maja Partsch',
  //   'Anna Kristensen',
  //   'Viv Jensen',
  //   'Steffen Kallestrup Kruse Nielsen',
  //   'Didde Nielsen Elbæk',
  //   'Tanya',
  //   'Emma Petersen',
  //   'Jesper Ladekær Gräs',
  //   'Sally Hald',
  //   'Ali Dahmani',
  //   'Thomas Emmanuel Felbo',
  //   'Lasse Pedersen',
  //   'Alice Gonnet',
  // ]

  // for (const person of persons) {
  //   const personinputdir = path.join(conversations, person)
  //   const filenames = await fs.promises.readdir(personinputdir)

  //   await Promise.all(
  //     filenames.map(async (filename) => {
  //       const inputfile = path.join(personinputdir, filename)
  //       const analysesDir = path.join(exportdir, 'analyses')
  //       const persondir = path.join(analysesDir, person)
  //       const outfile = path.join(persondir, filename.replace(/\.md$/i, '.json'))

  //       try {
  //         if (fs.existsSync(outfile)) return
  //         console.log('\n\n\n------------------------------------------------------------')
  //         log.info(outfile.replace(analysesDir, '').replace(/\/|\\/g, ' ').trim())
  //         const analysisResult = await analyzeConversation(api, inputfile)
  //         console.dir(analysisResult, { depth: null })
  //         await createDirectory(persondir)
  //         await fs.promises.writeFile(outfile, JSON.stringify(analysisResult, null, 1), 'utf8')
  //       } catch (error) {
  //         return
  //       }
  //     }),
  //   )
  // }
})().catch(console.error)
