import * as util from '../src/libs/string'

describe('strWrapIn', () => {
  it('example', () => {
    expect(util.strWrapIn('input', '#')).toBe('#input#')
  })
})

describe('strWrapBetween', () => {
  it('example', () => {
    expect(util.strWrapBetween('input', '#', '&')).toBe('#input&')
  })
})

describe('strWrapInBrackets', () => {
  it('example', () => {
    expect(util.strWrapInBrackets('input')).toBe('[input]')
  })
})

describe('strWrapInAngleBrackets', () => {
  it('example', () => {
    expect(util.strWrapInAngleBrackets('input')).toBe('<input>')
  })
})

describe('strWrapInBraces', () => {
  it('example', () => {
    expect(util.strWrapInBraces('input')).toBe('{input}')
  })
})

describe('strWrapInParenthesis', () => {
  it('example', () => {
    expect(util.strWrapInParenthesis('input')).toBe('(input)')
  })
})

describe('strWrapInSingleQuotes', () => {
  it('example', () => {
    expect(util.strWrapInSingleQuotes('input')).toBe("'input'")
  })
})

describe('strWrapInDoubleQuotes', () => {
  it('example', () => {
    expect(util.strWrapInDoubleQuotes('input')).toBe('"input"')
  })
})

describe('strIsLowerCase', () => {
  it('example', () => {
    expect(util.strIsLowerCase('input')).toBe(true)
    expect(util.strIsLowerCase('Input')).toBe(false)
    expect(util.strIsLowerCase('')).toBe(true)
    expect(util.strIsLowerCase('.')).toBe(true)
  })
})

describe('strIsUpperCase', () => {
  it('example', () => {
    expect(util.strIsUpperCase('INPUT')).toBe(true)
    expect(util.strIsUpperCase('Input')).toBe(false)
    expect(util.strIsLowerCase('')).toBe(true)
    expect(util.strIsLowerCase('.')).toBe(true)
  })
})

describe('strToWords', () => {
  it('example', () => {
    expect(util.strToWords('How are you?')).toStrictEqual(['How', 'are', 'you'])
  })
})

describe('strSplitCamelCase', () => {
  it('example', () => {
    expect(util.strSplitCamelCase('someCamelCase')).toStrictEqual(['some', 'Camel', 'Case'])
  })
  it('handles numbers', () => {
    expect(util.strSplitCamelCase('camelCase18')).toStrictEqual(['camel', 'Case18'])
    expect(util.strSplitCamelCase('camel18Case')).toStrictEqual(['camel18Case'])
    expect(util.strSplitCamelCase('camel18case')).toStrictEqual(['camel18case'])
  })
  it('handles short strings', () => {
    expect(util.strSplitCamelCase('aWo')).toStrictEqual(['a', 'Wo'])
  })
})

describe('strCountCharOccurances', () => {
  it('works with empty string', () => {
    expect(util.strCountCharOccurances('', 'a')).toBe(0)
  })
  it('works with one match', () => {
    expect(util.strCountCharOccurances('hi all', 'a')).toBe(1)
  })
  it('works with multiple matches', () => {
    expect(util.strCountCharOccurances('hello world', 'l')).toBe(3)
  })
})

describe('strRepeat', () => {
  it('zero', () => {
    expect(util.strRepeat('a', 0)).toBe('')
  })
  it('single', () => {
    expect(util.strRepeat('a', 1)).toBe('a')
  })
  it('double', () => {
    expect(util.strRepeat('a', 2)).toBe('aa')
  })
  it('tripple', () => {
    expect(util.strRepeat('a', 3)).toBe('aaa')
  })
})

describe('strLinesTrimLeft', () => {
  it('trims all lines', () => {
    const str = [
      'list:',
      ' 1. some text',
      ' 2. some text',
      '   a. some text',
      '   b. some text',
    ].join('\n')
    expect(util.strLinesTrimLeft(str)).toBe(
      ['list:', '1. some text', '2. some text', 'a. some text', 'b. some text'].join('\n'),
    )
  })
})

describe('strLinesTrimRight', () => {
  it('trims all lines', () => {
    const str = [
      'list:',
      ' 1. some text  ',
      ' 2. some text\t',
      '   a. some text   ',
      '   b. some text',
    ].join('\n')
    expect(util.strLinesTrimRight(str)).toBe(
      ['list:', ' 1. some text', ' 2. some text', '   a. some text', '   b. some text'].join('\n'),
    )
  })
})

describe('strLinesRemoveEmpty', () => {
  it('removes all lines that are empty or only contain whitespace', () => {
    const str = [
      '',
      'list:',
      ' 1. some text',
      ' 2. some text',
      '',
      '\t\t ',
      '   a. some text',
      '   b. some text ',
      '',
      ' ',
    ].join('\n')
    expect(util.strLinesRemoveEmpty(str)).toBe(
      ['list:', ' 1. some text', ' 2. some text', '   a. some text', '   b. some text'].join('\n'),
    )
  })
})

describe('strPrettifyMinifiedCode', () => {
  it('minifies code', () => {
    const src = `object Outer {object ExampleVarDecAndAssin {   def main(args: Array[String]) {var (name: String, age: Int) = Pair("Mike",21);println("Name: "+name);  println("Age: "+age);if(true) {if(false){println("no way")}}var (address,mobile)=Pair("New Delhi, India",1234567890);  println("Address: "+address);println("Mobile: "+mobile);}}  }`
    expect(util.strPrettifyMinifiedCode(src)).toBe(
      [
        'object Outer {',
        '  object ExampleVarDecAndAssin {',
        '    def main(args: Array[String]) {',
        '      var (name: String, age: Int) = Pair("Mike",21);',
        '      println("Name: "+name);',
        '      println("Age: "+age);',
        '      if(true) {',
        '        if(false){',
        '          println("no way")',
        '        }',
        '      }',
        '      var (address,mobile)=Pair("New Delhi, India",1234567890);',
        '      println("Address: "+address);',
        '      println("Mobile: "+mobile);',
        '    }',
        '  }',
        '}',
      ].join('\n'),
    )
  })
})

describe('strReplaceAll', () => {
  it('replaces original string when nothing matches', () => {
    expect(util.strReplaceAll('wow', 'i', 'o')).toBe('wow')
  })
  it('replaces single occurance', () => {
    expect(util.strReplaceAll('wow', 'o', 'oo')).toBe('woow')
  })
  it('replaces multiple occurances', () => {
    expect(util.strReplaceAll('this, is, some, text', ', ', ';')).toBe('this;is;some;text')
  })
  it('accepts regex flags', () => {
    expect(util.strReplaceAll('wow', 'O', 'oo', 'gi')).toBe('woow')
  })
  it('regex-escapes input string', () => {
    expect(util.strReplaceAll('func(3)', '(3)', '(4)')).toBe('func(4)')
  })
})

describe('strUnwrap', () => {
  it('should remove the left and right strings from the input string', () => {
    expect(util.strUnwrap('Hello, world!', 'Hello, ', '!')).toBe('world')
    expect(util.strUnwrap('Hello, world!', 'Hello, ', '!', 'g')).toBe('world')
    expect(util.strUnwrap('Hello, world!', 'Goodbye, ', '!')).toBe('Hello, world')
    expect(util.strUnwrap('Hello, world!', 'Goodbye, ', '!', 'g')).toBe('Hello, world')
  })

  it('should remove the left and right strings from the input string with special characters', () => {
    expect(util.strUnwrap('<p>Hello, world!</p>', '<p>', '</p>')).toBe('Hello, world!')
    expect(util.strUnwrap('<p>Hello, world!</p>', '<P>', '</P>', 'i')).toBe('Hello, world!')
    expect(util.strUnwrap('<p>Hello, world!</p>', '<div>', '</div>')).toBe('<p>Hello, world!</p>')
  })
})

describe('strSortChars', () => {
  it('should sort the characters in a string', () => {
    expect(util.strSortChars('hello')).toBe('ehllo')
    expect(util.strSortChars('world')).toBe('dlorw')
    expect(util.strSortChars('')).toBe('')
  })
})

describe('strToCharCodes', () => {
  it('should convert a string to an array of char codes', () => {
    expect(util.strToCharCodes('hello')).toEqual([104, 101, 108, 108, 111])
    expect(util.strToCharCodes('world')).toEqual([119, 111, 114, 108, 100])
    expect(util.strToCharCodes('')).toEqual([])
  })
})

describe('strToCharSet', () => {
  it('should return a string containing the set of all unique characters in a string', () => {
    expect(util.strToCharSet('hello')).toBe('ehlo')
    expect(util.strToCharSet('world')).toBe('dlorw')
    expect(util.strToCharSet('')).toBe('')
  })
})

describe('strToSentences', () => {
  it('should split a string into sentences', () => {
    expect(util.strToSentences('Hello world. How are you?')).toEqual([
      'Hello world.',
      'How are you?',
    ])
    expect(
      util.strToSentences('Well, this is a sentence! And this - is another sentence.'),
    ).toEqual(['Well, this is a sentence!', 'And this - is another sentence.'])
    expect(util.strToSentences('')).toEqual([])
  })
})

describe('strRemoveDuplicateChars', () => {
  it('should remove duplicate characters from a string', () => {
    expect(util.strRemoveDuplicateChars('Hello world!')).toEqual('Helo wrd!')
    expect(util.strRemoveDuplicateChars('Hello')).toEqual('Helo')
    expect(util.strRemoveDuplicateChars('')).toEqual('')
  })
})

describe('strCountChars', () => {
  it('should count the number of occurrences of each character in a string', () => {
    expect(util.strCountChars('Hello world!')).toEqual(
      new Map([
        ['H', 1],
        ['e', 1],
        ['l', 3],
        ['o', 2],
        [' ', 1],
        ['w', 1],
        ['r', 1],
        ['d', 1],
        ['!', 1],
      ]),
    )
    expect(util.strCountChars('Hello')).toEqual(
      new Map([
        ['H', 1],
        ['e', 1],
        ['l', 2],
        ['o', 1],
      ]),
    )
    expect(util.strCountChars('')).toEqual(new Map())
  })
})

describe('strHash', () => {
  describe('toBuffer', () => {
    it('should hash a string into a buffer with a given algorithm', () => {
      const string = 'hello'
      const algorithm = 'sha256'
      const result = util.strHash.toBuffer(string, algorithm)
      expect(Array.from(result)).toEqual([
        44, 242, 77, 186, 95, 176, 163, 14, 38, 232, 59, 42, 197, 185, 226, 158, 27, 22, 30, 92, 31,
        167, 66, 94, 115, 4, 51, 98, 147, 139, 152, 36,
      ])
    })
  })

  describe('toUint32Array', () => {
    it('should hash a string into an array of unsigned 32-bit integers', () => {
      const string = 'hello'
      const algorithm = 'sha256'
      const result = util.strHash.toUint32Array(string, algorithm)
      const expected = new Uint32Array([
        3125670444, 245608543, 708569126, 2665658821, 1545475611, 1581426463, 1647510643, 613976979,
      ])
      expect(result).toEqual(expected)
    })
  })

  describe('toString', () => {
    it('should hash a string into a buffer with a given algorithm and encoding', () => {
      const string = 'hello'
      const algorithm = 'sha256'
      const encoding = 'hex'
      const result = util.strHash.toString(string, algorithm, encoding)
      const expected = '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'
      expect(result).toEqual(expected)
    })
  })

  describe('listAlgorithms', () => {
    it('should list all available hash algorithms', () => {
      const result = util.strHash.listAlgorithms()
      expect(result.includes('sha1')).toBe(true)
      expect(result.includes('sha256')).toBe(true)
      expect(result.includes('sha512')).toBe(true)
      expect(result.includes('md5')).toBe(true)
      expect(result.includes('')).toBe(false)
    })
  })
})

describe('strParseBoolean', () => {
  it('should return true when given "true"', () => {
    expect(util.strParseBoolean('true')).toBe(true)
  })

  it('should return false when given "false"', () => {
    expect(util.strParseBoolean('false')).toBe(false)
  })

  it('should return false when given any other string', () => {
    expect(util.strParseBoolean('hello')).toBe(false)
    expect(util.strParseBoolean('123')).toBe(false)
    expect(util.strParseBoolean('')).toBe(false)
  })
})

describe('strFirstCharToUpperCase', () => {
  it('should capitalize the first character of a string', () => {
    expect(util.strFirstCharToUpperCase('hello')).toBe('Hello')
    expect(util.strFirstCharToUpperCase('world')).toBe('World')
  })
  it('should return an empty string if an empty string is passed', () => {
    expect(util.strFirstCharToUpperCase('')).toBe('')
  })
})

describe('strSplitAndTrim', () => {
  it('removeEmptyLines=false | should split and trim a string by a delimiter', () => {
    const result = util.strSplitAndTrim('\n  hello, world,  ', ',', false)
    expect(result).toEqual(['hello', 'world', ''])
  })

  it('removeEmptyLines=true | should split and trim a string by a delimiter and clean up empty lines', () => {
    const result = util.strSplitAndTrim('\n  hello, world,  ', ',', true)
    expect(result).toEqual(['hello', 'world'])
  })

  it('should return an array with one element if no delimiter is found', () => {
    const result = util.strSplitAndTrim('hello world', ',')
    expect(result).toEqual(['hello world'])
  })
})

describe('strRemoveNewLines', () => {
  it('should remove line breaks from string', () => {
    const input = 'Hello\nWorld\n'
    const expectedOutput = 'HelloWorld'
    expect(util.strRemoveNewLines(input)).toEqual(expectedOutput)
  })

  it('should replace line breaks with custom string', () => {
    const input = 'Hello\nWorld\n'
    const expectedOutput = 'Hello, World, '
    expect(util.strRemoveNewLines(input, ', ')).toEqual(expectedOutput)
  })
})

describe('strIsMultiLine', () => {
  it('should return true if the string has line breaks', () => {
    const result = util.strIsMultiLine('Hello\nWorld')
    expect(result).toBe(true)
  })

  it('should return false if the string has no line breaks', () => {
    const result = util.strIsMultiLine('Hello World')
    expect(result).toBe(false)
  })
})
