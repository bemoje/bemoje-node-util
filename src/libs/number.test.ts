import * as util from './number';

describe('numFormatEU', () => {
  it('example', () => {
    expect(util.numFormatEU(5)).toBe('5');
    expect(util.numFormatEU(5.3)).toBe('5');
    expect(util.numFormatEU(5000)).toBe('5.000');
    expect(util.numFormatEU(25000)).toBe('25.000');
    expect(util.numFormatEU(5000000)).toBe('5.000.000');
    expect(util.numFormatEU(-5000)).toBe('-5.000');
    expect(util.numFormatEU(5000.512)).toBe('5.000');
    expect(util.numFormatEU(5000.512, 1)).toBe('5.000,5');
    expect(util.numFormatEU(5000.512, 3)).toBe('5.000,512');
    expect(util.numFormatEU(5000.512, 5)).toBe('5.000,51200');
  });
});

describe('numFormatUS', () => {
  it('example', () => {
    expect(util.numFormatUS(5)).toBe('5');
    expect(util.numFormatUS(5.3)).toBe('5');
    expect(util.numFormatUS(5000)).toBe('5,000');
    expect(util.numFormatUS(25000)).toBe('25,000');
    expect(util.numFormatUS(5000000)).toBe('5,000,000');
    expect(util.numFormatUS(-5000)).toBe('-5,000');
    expect(util.numFormatUS(5000.512)).toBe('5,000');
    expect(util.numFormatUS(5000.512, 1)).toBe('5,000.5');
    expect(util.numFormatUS(5000.512, 3)).toBe('5,000.512');
    expect(util.numFormatUS(5000.512, 5)).toBe('5,000.51200');
  });
});
