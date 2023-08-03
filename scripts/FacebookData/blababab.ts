import fs from 'fs'
import path from 'path'
import { OpenaiApiClient } from '../../src/api/openai/OpenaiApiClient'
import { waitSeconds } from '../../src/async/waitSeconds'
import { createDirectory } from '../../src/filesystem/createDirectory'

function arrDivideIntoNChunks(arr: any[], n: number) {
  const result: any[][] = []
  const chunkSize = Math.ceil(arr.length / n)
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize))
  }
  return result
}

interface IConversationAnalysisResult {
  primary_subjects: string[]
  relation_type: 'friends' | 'family' | 'romantic' | 'colleagues' | 'acquaintances'
  strong_emotion: { name: string; expressed_emotion: string; reason: string }
  pleasant_interaction: 'very much' | 'yes' | 'neutral' | 'no' | 'not at all'
  respectfulness: Record<string, 'very much' | 'yes' | 'neutral' | 'no' | 'not at all'>
  summary: string
}

// example

async function analyzeConversation(api: OpenaiApiClient, filepath: string): Promise<IConversationAnalysisResult[]> {
  const instructionTokens = 273
  const _str = await fs.promises.readFile(filepath, 'utf8')
  const obj = JSON.parse(_str)
  const names = obj.participants.map((name: string) => name.split(' ')[0])
  let chunks = [obj.conversation.messages]
  let jsonChunks = [JSON.stringify(chunks[0])]
  const tokens = api.countTokens(jsonChunks[0] + instructionTokens)
  console.log({ stringLength: jsonChunks[0].length, tokens })
  const factor = Math.ceil(tokens / 2000) + 1
  if (tokens > 2000) {
    chunks = arrDivideIntoNChunks(chunks[0] as string[], factor)
    jsonChunks = chunks.map((chunk) => JSON.stringify(chunk))
    const _tokens = jsonChunks.map((chunk) => api.countTokens(chunk) + instructionTokens)
    console.log({ tokens: _tokens })
  }

  const instruction = [
    'Please analyze the following conversation:',
    `- Classify the 3 primary tops being discussed in the conversation. Answer with a list of 5 strings, each string being a topic.`,
    '- What type of relation do they have? Answer either friends/family/romantic/colleagues/acquaintances.',
    '- Determine if the anyone expresses strong emotions, and if so, who is it (answer with just a name), and in what way and why? If no one did, just reply that.',
    `- Does ${names[0].toLowerCase()} keep a good tone and are respectful? Answer either "very much"/"yes"/"neutral"/"no"/"not at all".`,
    `- Does ${names[1].toLowerCase()} keep a good tone and are respectful? Answer either "very much"/"yes"/"neutral"/"no"/"not at all".`,
    '- Was this a pleasant interaction? Answer either "very much"/"yes"/"neutral"/"no"/"not at all"',
    '- Give a short summary of the conversation in 5 sentences.',
    '',
    'PLease respond in a JSON format in the schema below.',
    '',
    `interface schema {`,
    `  primary_subjects: string[]`,
    `  relation_type: 'friends'|'family'|'romantic'|'colleagues'|'acquaintances'`,
    `  strong_emotion: {name:string,expressed_emotion:string,reason:string}`,
    `  pleasant_interaction: string`,
    `  respectfulness: {${names[0].toLowerCase()}:string,${names[1].toLowerCase()}:string}`,
    `  summary: string`,
    `}`,
  ].join('\n')

  // console.log(instruction)

  const result: string[] = []
  for (const chunk of jsonChunks) {
    try {
      const r = await api.gpt3_16k({
        instruction,
        prompt: chunk,
      })
      result.push(r)
      console.log('done')
      await waitSeconds(1)
    } catch (error: any) {
      console.error(error.message)
      continue
    }
  }

  // const result = (

  // ).filter((res) => !!res)

  // console.log('result')
  // console.log(result)

  const parsed = result
    .map((json: any) => {
      try {
        return JSON.parse(json)
      } catch (error) {
        return null
      }
    })
    .filter((res) => !!res)

  // console.log('parsed')
  // console.log(parsed)
  const validated = parsed.map((obj) => {
    return obj
    if (
      obj.primary_subjects &&
      Array.isArray(obj.primary_subjects) &&
      obj.relation_type &&
      ['friends', 'family', 'romantic', 'colleagues', 'acquaintances'].includes(obj.relation_type) &&
      obj.strong_emotion &&
      typeof obj.strong_emotion.name === 'string' &&
      typeof obj.strong_emotion.expressed_emotion === 'string' &&
      typeof obj.strong_emotion.reason === 'string' &&
      obj.pleasant_interaction &&
      ['very much', 'yes', 'neutral', 'no', 'not at all'].includes(obj.pleasant_interaction) &&
      obj.respectfulness &&
      typeof obj.respectfulness[names[0].toLowerCase()] === 'string' &&
      typeof obj.respectfulness[names[1].toLowerCase()] === 'string'
    ) {
      return obj
    }
    return null
  })

  // console.log('validated')
  // console.log(validated)

  return validated.filter((res) => !!res)
}

const api = new OpenaiApiClient({
  logAllEvents: false,
  cache: { enable: true },
  apiKey: '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',
})

// example
;(async () => {
  const exportdir = 'C:/Users/bemoj/Desktop/FBDATA'
  const conversations = path.join(exportdir, 'dest/output/threads-human-readable-json/conversations')
  const persons = [
    'Anja Thomassen',
    'Josephine Møller Jensen',
    'Thomas Siggaard',
    'Jens Nicolai Ladekær Gräs',
    'Maja Partsch',
    'Viv Jensen',
    'Steffen Kallestrup Kruse Nielsen',
    'Didde Nielsen Elbæk',
    'Tanya',
    'Emma Petersen',
    'Jesper Ladekær Gräs',
    'Sally Hald',
    'Ali Dahmani',
    'Anna Kristensen',
    'Thomas Emmanuel Felbo',
    'Lasse Pedersen',
    'Alice Gonnet',
  ]
  for (const person of persons) {
    const personinputdir = path.join(conversations, person)

    const filenames = await fs.promises.readdir(personinputdir)
    for (const filename of filenames) {
      const inputfile = path.join(personinputdir, filename)

      const analysesDir = path.join(exportdir, 'analyses')
      const persondir = path.join(analysesDir, person)
      const outfile = path.join(persondir, filename)
      console.log({ inputfile, outfile })

      if (fs.existsSync(outfile)) continue
      try {
        const analysisResult = await analyzeConversation(api, inputfile)
        console.log(analysisResult)

        // const filepath = path.join(conversations, person, file + '.json')
        // const analysisResult = await analyzeConversation(api, filepath)
        // console.log(analysisResult)

        await createDirectory(persondir)
        await fs.promises.writeFile(outfile, JSON.stringify(analysisResult, null, 1), 'utf8')
      } catch (error) {
        continue
      }
    }
  }
})().catch(console.error)
