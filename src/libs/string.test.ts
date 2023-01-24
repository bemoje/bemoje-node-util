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
