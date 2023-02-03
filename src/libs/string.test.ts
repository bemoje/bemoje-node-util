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
