import TrieMap from '@bemoje/trie-map'
import fs from 'fs'
import path from 'path'
import { OpenaiApiClient } from '../../../src/api/openai/OpenaiApiClient'
import { readJsonFileSync } from '../../../src/filesystem/readJsonFileSync'
import { objFilter } from '../../../src/object/objFilter'
import { response1, response2 } from './responses'

const dirpath = 'C:/Users/bemoj/Desktop/FBDATA/analyses/Lauritz Andersen'

const topics = Array.from(
  new Set(
    fs
      .readdirSync(dirpath)
      .map((filename) => {
        const filepath = path.join(dirpath, filename)
        const o: any = readJsonFileSync(filepath)
        return o.topics
      })
      .flat(),
  ),
)
console.log({ numTopics: topics.length })
const prompt = topics.slice(1200, 1500).join(', ')

const instruction = `
Conversational topics or categories can be thought of as a hierarchy - a kind of tree structure. Some categories are sub-categories of other categories. For example, the categories of 'calculus' is a sub-category of 'mathematics' and 'mathematics' itself is a sub-category of 'natural sciences'.

You will be given a list of categories. For each categories, try to determine if any of the other categories are sub-categories of it.

Do not include categories that have no children or parent.
A category may only appear once in the table.
Respond with a JSON table like the example below.

example:

[
  ["category ", ["sub-categories", "..."]],
  // ["...", ["...", "..."]],
  // ["...", ["...", "..."]],
]

You can sort as many sub-categories as you want under the same category.
The parent categories on the left must all be from the list as well.
`

// example
async function main() {
  const api = new OpenaiApiClient({
    logAllEvents: false,
    cache: { enable: true },
  })

  console.log(api.countTokens(prompt))

  const json = await api.gpt4_8k({
    temperature: 0.5,
    instruction,
    prompt,
  })

  console.log(json)

  const parsed = JSON.parse(json)

  console.log(parsed)
}

const map = new Map()
for (const topic of topics) {
  map.set(topic, new Set())
}

for (const [cat, sub] of response1) {
  if (!map.has(cat)) continue
  for (const s of sub) {
    if (!map.has(s)) continue
    map.get(cat).add(s)
  }
}

const sorted = Array.from(map.entries()).sort((a, b) => b[1].size - a[1].size)

const top = sorted.filter((e) => e[1].size > 0)

console.log(top)
console.log({ cnt: top.length })

const cats = top
  .map((arr) => {
    return `  ["${arr[0]}", []],`
  })
  .join('\n')

const instruction2 = `
Conversational topics or categories can be thought of as a hierarchy - a kind of tree structure. Some categories are sub-categories of other categories. For example, the categories of 'calculus' is a sub-category of 'mathematics' and 'mathematics' itself is a sub-category of 'natural sciences'.

You will be given a list of topics. For each topic, determine which of the 88 categories it belongs to. It can belong to multiple categories.

Respond by filling the topics into to the JSON below:

[
${cats}
]
`

console.log(instruction2)

async function main2() {
  const api = new OpenaiApiClient({
    logAllEvents: false,
    cache: { enable: true },
  })

  console.log(api.countTokens(prompt))

  const json = await api.gpt4_8k({
    temperature: 0.5,
    instruction,
    prompt,
  })

  console.log(json)

  const parsed = JSON.parse(json)

  console.log(parsed)
}
// main2().catch((err) => console.error(err))

for (const [cat, sub] of response2) {
  if (!map.has(cat)) continue
  for (const s of sub) {
    if (!map.has(s)) continue
    map.get(cat).add(s)
  }
}

const newobj: any = {}
const obj = Object.fromEntries(map.entries()) as Record<string, Set<string>>
for (const entry of Object.entries(obj)) {
  const cat: string = entry[0]
  const set: Set<string> = entry[1]
  if (!newobj[cat]) newobj[cat] = {}
  for (const s of set) {
    if (!newobj[s]) newobj[s] = {}
    newobj[cat][s] = newobj[s]
  }
}
const filtered = objFilter(newobj, (value: Record<string, any>) => {
  return Object.keys(value).length > 0
})
console.log(filtered)

const trie = new TrieMap()

// for (const [cat, sub] of map.entries()) {
//   for (const s of sub) {
//     trie.set([cat], s)
//     const sChildren = map.get(s)
//     for (const child of sChildren) {
//       trie.set([cat, s], child)
//     }
//   }
// }
