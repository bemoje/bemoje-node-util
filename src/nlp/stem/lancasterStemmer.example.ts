import { lancasterStemmer } from './lancasterStemmer'

console.log(lancasterStemmer('considerations')) // => 'consid'

console.log(lancasterStemmer('detestable')) // => 'detest'

console.log(lancasterStemmer('vileness')) // => 'vil'

console.log(lancasterStemmer('giggling')) // => 'giggl'

console.log(lancasterStemmer('anxious')) // => 'anxy'
