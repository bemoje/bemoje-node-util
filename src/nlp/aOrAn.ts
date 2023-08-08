import path from 'path'
import { readJsonFileSync } from '../filesystem/readJsonFileSync'
import { lancasterStemmer } from './stem/lancasterStemmer'

export function aOrAn(string: string): 'a' | 'an' {
  if (!data) {
    data = new Set(readJsonFileSync(path.join(__dirname, 'data', 'an.json')) as string[])
  }
  return data.has(lancasterStemmer(string)) ? 'an' : 'a'
}

let data: Set<string>
