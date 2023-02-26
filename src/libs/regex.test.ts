import * as util from './regex';

describe('rexec', () => {
  it('example', () => {
    const re = /(?<g1>a)|(?<g2>d)/g;
    const str = 'Anthony wants a girlfriend.';
    const result = [...util.rexec(re, str)];
    expect(result).toStrictEqual([
      {
        index: 9,
        match: 'a',
        groups: { g1: 'a', g2: undefined },
        lastIndex: 10,
      },
      {
        index: 14,
        match: 'a',
        groups: { g1: 'a', g2: undefined },
        lastIndex: 15,
      },
      {
        index: 25,
        match: 'd',
        groups: { g1: undefined, g2: 'd' },
        lastIndex: 26,
      },
    ]);
  });
});

describe('regexGetGroupNames', () => {
  it('returns empty array when no groups defined', () => {
    const re = /hello (\w+) are you (\w+)/g;
    expect(util.regexGetGroupNames(re)).toStrictEqual([]);
  });
  it('gets group names', () => {
    const re = /hello (?<group1>\w+) are you (?<group2>\w+)/g;
    expect(util.regexGetGroupNames(re)).toStrictEqual(['group1', 'group2']);
  });
});

describe('regexEscapeString', () => {
  it('escapes correctly', () => {
    expect(util.regexEscapeString('[click](google.com)')).toBe(
      '\\[click\\]\\(google\\.com\\)',
    );
  });
  it('works when creating RegExp object', () => {
    expect(() => {
      new RegExp(util.regexEscapeString('[.^$()]*(wow)+'), 'g');
    }).not.toThrowError();
  });
});
