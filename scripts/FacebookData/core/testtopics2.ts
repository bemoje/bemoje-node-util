import TrieMap from '@bemoje/trie-map'
import fs from 'fs'
import path from 'path'
import { OpenaiApiClient } from '../../../src/api/openai/OpenaiApiClient'
import { readJsonFileSync } from '../../../src/filesystem/readJsonFileSync'

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
const prompt = topics.slice(800).join(', ')

const instruction = `
Conversational topics can be thought of as a hierarchy - a kind of tree structure. Some topics are under the same category. For example, the topic of 'calculus' is a sub-category of 'mathematics' and 'mathematics' itself is a sub-category of 'natural sciences'.

You will be given a list of topics. Your are to divide them all into groups of 5 topics in each group. The topics that are the most related should be grouped together under a single parent category. So think about what these topics have in common and what their parent category should be.

Respond with a JSON object like the example below.

example:

{
  "Music Events": ["music festival", "music rehearsal", "hangout invitation", "concert", "live performances"],
  "Leisure Activities": ["pizza", "rehearsing", "hanging out", "gaming", "listening to music"],
  // etc
}

Each topic may only appear once.
`

const trie = new TrieMap()

// example
;(async () => {
  const api = new OpenaiApiClient({
    logAllEvents: true,
    cache: { enable: true },
  })

  api.events.on('error', (error: any) => console.error(error.toJson()))
  api.events.on('retry', () => console.log('retrying'))

  console.log(api.countTokens(prompt))

  const json = await api.gpt3_16k({
    temperature: 0.7,
    instruction,
    prompt,
  })

  console.log(json)

  const parsed = JSON.parse(json)

  console.log(parsed)
})().catch(console.error)

const responses = {
  'Music Production': [
    'gig',
    'music',
    'arrangement',
    'underground venues',
    'bands',
    'writing',
    'audition',
    'mastering',
    'audio editing',
    'song selection',
    'live singing',
    'pitch correction',
    'performance requirements',
    'technical requirements',
    'live performance',
  ],
  'Sound Engineering': ['bass', 'sound quality', 'live shows', 'performance', 'wireless equipment'],
  'Personal Life': [
    'sofa',
    'weather',
    'mattress',
    'cancelling plans',
    'sleeping arrangements',
    'depression',
    'loneliness',
    'substance use',
    'living situation',
    'hospitalization',
    'life',
    'destiny',
    'disabilities',
    'sex',
    'veganism',
  ],
  'Music Events': ['music festival', 'music rehearsal', 'hangout invitation', 'concert', 'live performances'],
  'Music Creation': ['gear', 'album', 'recording', 'solo project', 'music production'],
  'Relationships': ['dating', 'breakup', 'meeting up', 'relationship', 'weekend plans'],
  'Music Equipment': [
    'guitar rig',
    'installation',
    'vocal microphone',
    'drum programming software',
    'computer drums',
    'rmc (rytmisk konservatorium)',
    'talent fund',
    'rme',
    'audio equipment',
    'basics of music',
    'focusrite scarlett',
    'drumming',
    'concert video',
    'riffs',
    'microphone',
  ],
  'Meetings and Plans': ['meeting', 'drinking', 'busy schedule', 'address', 'plans'],
  'Leisure Activities': ['pizza', 'rehearsing', 'hanging out', 'gaming', 'listening to music'],
  'Travel and Transportation': ['transportation', 'beer', 'games', 'metro', 'travel'],
  'Music Appreciation': ['listening to songs', 'love', 'songs', 'emotions', 'jamming'],
  'Music Recommendations': [
    'david firth',
    'spoilsbury toast boy 2',
    'music recommendations',
    'rock music',
    'pink floyd',
  ],
  'Music Instruments': ['guitar strings', 'guitar', 'microphones', 'guitar equipment', 'direct box'],
  'Music Genres': ['metal', 'band', 'genre', 'copenhell', 'digidi'],
  'Music Recording': ['music recording', 'vocal recording', 'mixing', 'editing', 'audio recording'],
  'Music Techniques': ['rhythm', 'practice', 'technique', 'plugins', 'guitar playing'],
  'Music Composition': ['lyrics', 'notes', 'chords', 'playing', 'music composition'],
  'Gaming': ['cs (counter-strike)', 'playing games', 'cs', 'games', 'gaming'],
  'Life Events': ['birthdays', 'teenage problems', 'age discrimination', 'birthday celebration', 'family conflict'],
  'Social Issues': [
    '#metoo',
    'news',
    'terrorism',
    'controversial jokes',
    'triggers',
    'coronavirus',
    'polarization',
    'conspiracy theories',
    'sexual preferences',
    'relationship preferences',
    'social media',
    'internet',
    'cyber security',
    'ai',
    'discounts',
  ],
  'Personal Development': [
    'self-doubt',
    'pain',
    'broken glasses',
    'reconstruction',
    'teasing',
    'career',
    'empathy',
    'paranoia',
    'anxiety',
    'asking for help',
    'improvements',
    'job applications',
    'education',
    'career options',
    'datalogi (computer science)',
  ],
  'Religion and Spirituality': ['religion', 'buddhism', 'meditation', 'luck', 'attachment'],
  'Food and Drinks': ['food', 'drinks', 'groceries', 'alcohol', 'food and drinks'],
  'Miscellaneous': ['humor', 'discord', 'emojis', 'emoticons', 'fashion'],
  'MusicProduction': [
    'making songs',
    'sharing music',
    'song lyrics',
    'concerts',
    'counting music beats',
    'album production',
    'song production',
    'future music projects',
    'music equipment',
    'music theory',
  ],
  'Coding': [
    'debugging',
    'compiler error',
    'master project',
    'json serializer/deserializer',
    'technical issues',
    'coding',
    'online course',
  ],
  'PersonalWellbeing': [
    'sleeping well',
    'eating',
    'health',
    'physical health',
    'mental health',
    'optimal life',
    'personal struggles',
  ],
  'SocialLife': ['coming home', 'sharing', 'activities', 'relationships', 'conversation', 'isolation', 'flirting'],
  'MusicLearning': [
    'artwork',
    'remixing and remastering',
    'voice technique',
    'guitars',
    'harley benton',
    'hearing training',
    'instrument recommendations',
    'musicians',
    'music styles',
    'guitar techniques',
  ],
  'PersonalLife': [
    'boredom',
    'behavior',
    'gratitude',
    'well wishes',
    'age',
    'birthday',
    'family',
    'plans for holidays',
    'identity',
  ],
  'Challenges': [
    'opiates',
    'job titles',
    'narkoluder',
    'rip-benssteg',
    'physical injury',
    'adhd diagnosis',
    'car theft',
    'debt',
    'crime',
    'death',
  ],
  'DocumentManagement': ['texts', 'document', 'google drive links', 'attendance'],
  'HousingAndMoving': ['moving', 'storage', 'valby', 'ex', 'accommodation'],
  'PsychologyAndMentalHealth': ['feeling down', 'support', 'existence', 'psychology', 'relationship issues'],
  'Entertainment': [
    'spongebob',
    'film',
    'hobby',
    'sociale tilbud (social offers)',
    'toilet humor',
    'psychedelic experiences',
    'cs:go',
    "queen's gambit",
    'nirvana',
    'ozzy osbourne',
    'devin townsend',
    'neil peart',
    'joe rogan',
    'netflix',
    'comedy',
    'video games',
    'jokes',
  ],
  'Dating': ['matches', 'tinder profile', 'speaking style', 'mundbind on tinder photos'],
  'NewYearResolutions': ['quitting', 'tests', 'new year', 'life coaching'],
  'LanguageAndCommunication': ['language', 'performances', 'speaking style'],
  'IdentityAndSecurity': ['identity theft', 'identity'],
  'Environment': ['environment'],
  'Finance': ['loans'],
  'MusicPlatforms': ['youtube'],
  'JobAndCareer': ['job'],
  'Space': ['space'],
  'Digital Media': [
    'photoshop',
    'video production',
    'quality of content',
    'youtube videos',
    'feedback',
    'video editing',
    'software',
    'computer coding',
    'file sharing',
    'downloading',
  ],
  'Band Dynamics': [
    'rumors',
    'band name ideas',
    'band names',
    'band dynamics',
    'performance anxiety',
    'supporting each other',
    'waiting for a response',
    'progress in the selection process',
    'unpleasant experiences and memories',
  ],
  'Lifestyle': [
    'outdoor activities',
    'hobbies',
    'eating habits',
    'sleep',
    'hair loss',
    'family history',
    'having children',
    'holding children',
    'cooking',
    'running',
  ],
  'Technical Issues': [
    'computer virus',
    'car trouble',
    'sinking boat',
    'technical details',
    'backup solutions',
    'laptop',
    'file sizes',
    'video rendering',
    'computer programs',
    'it',
  ],
}
