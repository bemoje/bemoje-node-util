import * as util from './string';

describe('strWrapIn', () => {
  it('example', () => {
    expect(util.strWrapIn('input', '#')).toBe('#input#');
  });
});

describe('strWrapBetween', () => {
  it('example', () => {
    expect(util.strWrapBetween('input', '#', '&')).toBe('#input&');
  });
});

describe('strWrapInBrackets', () => {
  it('example', () => {
    expect(util.strWrapInBrackets('input')).toBe('[input]');
  });
});

describe('strWrapInAngleBrackets', () => {
  it('example', () => {
    expect(util.strWrapInAngleBrackets('input')).toBe('<input>');
  });
});

describe('strWrapInBraces', () => {
  it('example', () => {
    expect(util.strWrapInBraces('input')).toBe('{input}');
  });
});

describe('strWrapInParenthesis', () => {
  it('example', () => {
    expect(util.strWrapInParenthesis('input')).toBe('(input)');
  });
});

describe('strWrapInSingleQuotes', () => {
  it('example', () => {
    expect(util.strWrapInSingleQuotes('input')).toBe("'input'");
  });
});

describe('strWrapInDoubleQuotes', () => {
  it('example', () => {
    expect(util.strWrapInDoubleQuotes('input')).toBe('"input"');
  });
});

describe('strIsLowerCase', () => {
  it('example', () => {
    expect(util.strIsLowerCase('input')).toBe(true);
    expect(util.strIsLowerCase('Input')).toBe(false);
    expect(util.strIsLowerCase('')).toBe(true);
    expect(util.strIsLowerCase('.')).toBe(true);
  });
});

describe('strIsUpperCase', () => {
  it('example', () => {
    expect(util.strIsUpperCase('INPUT')).toBe(true);
    expect(util.strIsUpperCase('Input')).toBe(false);
    expect(util.strIsLowerCase('')).toBe(true);
    expect(util.strIsLowerCase('.')).toBe(true);
  });
});

describe('strToWords', () => {
  it('example', () => {
    expect(util.strToWords('How are you?')).toStrictEqual([
      'How',
      'are',
      'you',
    ]);
  });
});

describe('strSplitWordByCamelCase', () => {
  it('example', () => {
    expect(util.strSplitWordByCamelCase('someCamelCase')).toStrictEqual([
      'some',
      'Camel',
      'Case',
    ]);
  });
  it('handles numbers', () => {
    expect(util.strSplitWordByCamelCase('camelCase18')).toStrictEqual([
      'camel',
      'Case18',
    ]);
    expect(util.strSplitWordByCamelCase('camel18Case')).toStrictEqual([
      'camel18',
      'Case',
    ]);
    expect(util.strSplitWordByCamelCase('camel18case')).toStrictEqual([
      'camel18case',
    ]);
  });
  it('handles short strings', () => {
    expect(util.strSplitWordByCamelCase('aWo')).toStrictEqual(['a', 'Wo']);
  });
});

describe('strCountCharOccurances', () => {
  it('works with empty string', () => {
    expect(util.strCountCharOccurances('', 'a')).toBe(0);
  });
  it('works with one match', () => {
    expect(util.strCountCharOccurances('hi all', 'a')).toBe(1);
  });
  it('works with multiple matches', () => {
    expect(util.strCountCharOccurances('hello world', 'l')).toBe(3);
  });
});

describe('strRepeat', () => {
  it('zero', () => {
    expect(util.strRepeat('a', 0)).toBe('');
  });
  it('single', () => {
    expect(util.strRepeat('a', 1)).toBe('a');
  });
  it('double', () => {
    expect(util.strRepeat('a', 2)).toBe('aa');
  });
  it('tripple', () => {
    expect(util.strRepeat('a', 3)).toBe('aaa');
  });
});

describe('strLinesTrimLeft', () => {
  it('trims all lines', () => {
    const str = [
      'list:',
      ' 1. some text',
      ' 2. some text',
      '   a. some text',
      '   b. some text',
    ].join('\n');
    expect(util.strLinesTrimLeft(str)).toBe(
      [
        'list:',
        '1. some text',
        '2. some text',
        'a. some text',
        'b. some text',
      ].join('\n'),
    );
  });
});

describe('strLinesTrimRight', () => {
  it('trims all lines', () => {
    const str = [
      'list:',
      ' 1. some text  ',
      ' 2. some text\t',
      '   a. some text   ',
      '   b. some text',
    ].join('\n');
    expect(util.strLinesTrimRight(str)).toBe(
      [
        'list:',
        ' 1. some text',
        ' 2. some text',
        '   a. some text',
        '   b. some text',
      ].join('\n'),
    );
  });
});

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
    ].join('\n');
    expect(util.strLinesRemoveEmpty(str)).toBe(
      [
        'list:',
        ' 1. some text',
        ' 2. some text',
        '   a. some text',
        '   b. some text',
      ].join('\n'),
    );
  });
});

describe('strPrettifyMinifiedCode', () => {
  it('minifies code', () => {
    const src = `object Outer {object ExampleVarDecAndAssin {   def main(args: Array[String]) {var (name: String, age: Int) = Pair("Mike",21);println("Name: "+name);  println("Age: "+age);if(true) {if(false){println("no way")}}var (address,mobile)=Pair("New Delhi, India",1234567890);  println("Address: "+address);println("Mobile: "+mobile);}}  }`;
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
    );
  });
});

describe('strReplaceAll', () => {
  it('replaces original string when nothing matches', () => {
    expect(util.strReplaceAll('wow', 'i', 'o')).toBe('wow');
  });
  it('replaces single occurance', () => {
    expect(util.strReplaceAll('wow', 'o', 'oo')).toBe('woow');
  });
  it('replaces multiple occurances', () => {
    expect(util.strReplaceAll('this, is, some, text', ', ', ';')).toBe(
      'this;is;some;text',
    );
  });
  it('accepts regex flags', () => {
    expect(util.strReplaceAll('wow', 'O', 'oo', 'gi')).toBe('woow');
  });
  it('regex-escapes input string', () => {
    expect(util.strReplaceAll('func(3)', '(3)', '(4)')).toBe('func(4)');
  });
});
