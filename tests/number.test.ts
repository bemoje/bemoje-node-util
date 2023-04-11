import * as util from '../src/libs/number';

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

describe('numApproximateLog10', () => {
  it('approximates log_10 of int input up 9.', () => {
    expect(util.numApproximateLog10(0)).toBe(0);
    expect(util.numApproximateLog10(1)).toBe(0);
    expect(util.numApproximateLog10(1e1)).toBe(1);
    expect(util.numApproximateLog10(1e2)).toBe(2);
    expect(util.numApproximateLog10(1e3)).toBe(3);
    expect(util.numApproximateLog10(1e4)).toBe(4);
    expect(util.numApproximateLog10(1e5)).toBe(5);
    expect(util.numApproximateLog10(1e6)).toBe(6);
    expect(util.numApproximateLog10(1e7)).toBe(7);
    expect(util.numApproximateLog10(1e8)).toBe(8);
    expect(util.numApproximateLog10(1e9)).toBe(9);
  });
  it('throws on invalid input.', () => {
    expect(() => util.numApproximateLog10(-1)).toThrowError(`Expected positive integer smaller than 10^10. Got -1`);
    expect(() => util.numApproximateLog10(1.1)).toThrowError(`Expected positive integer smaller than 10^10. Got 1.1`);
    expect(() => util.numApproximateLog10(1e10)).toThrowError(
      `Expected positive integer smaller than 10^10. Got ${1e10}`,
    );
  });
});

describe('randomIntBetween', () => {
  it('generates correct random integers', () => {
    for (let i = -100; i < 100; i++) {
      for (let j = i; j < 100; j++) {
        const r = util.randomIntBetween(i, j);
        expect(r >= i).toBe(true);
        expect(r <= j).toBe(true);
      }
    }
  });
  it('throws on invalid input.', () => {
    expect(() => util.randomIntBetween(2, 2.1)).toThrowError(`max must be an integer. Got 2.1`);
    expect(() => util.randomIntBetween(2.1, 3)).toThrowError(`min must be an integer. Got 2.1`);
  });
});

describe('isEven', () => {
  it('correctly determines if natural number is even', () => {
    expect(util.isEven(-22)).toBe(true);
    expect(util.isEven(-21)).toBe(false);
    expect(util.isEven(-2)).toBe(true);
    expect(util.isEven(-1)).toBe(false);
    expect(util.isEven(0)).toBe(true);
    expect(util.isEven(1)).toBe(false);
    expect(util.isEven(2)).toBe(true);
    expect(util.isEven(21)).toBe(false);
    expect(util.isEven(22)).toBe(true);
  });
  it('throws on invalid input.', () => {
    expect(() => util.isEven(2.1)).toThrowError(`Expected integer. Got 2.1`);
  });

  describe('isOdd', () => {
    it('correctly determines if natural number is even', () => {
      expect(util.isOdd(-22)).toBe(false);
      expect(util.isOdd(-21)).toBe(true);
      expect(util.isOdd(-2)).toBe(false);
      expect(util.isOdd(-1)).toBe(true);
      expect(util.isOdd(0)).toBe(false);
      expect(util.isOdd(1)).toBe(true);
      expect(util.isOdd(2)).toBe(false);
      expect(util.isOdd(21)).toBe(true);
      expect(util.isOdd(22)).toBe(false);
    });
    it('throws on invalid input.', () => {
      expect(() => util.isOdd(2.1)).toThrowError(`Expected integer. Got 2.1`);
    });
  });
});

describe('roundUp', () => {
  it('correctly rounds up number', () => {
    expect(util.roundUp(-1.1)).toBe(-1);
    expect(util.roundUp(-0.1)).toBe(0);
    expect(util.roundUp(0)).toBe(0);
    expect(util.roundUp(0.1)).toBe(1);
    expect(util.roundUp(1.9)).toBe(2);
  });
});

describe('roundDown', () => {
  it('correctly rounds down number', () => {
    expect(util.roundDown(-1.1)).toBe(-2);
    expect(util.roundDown(-0.1)).toBe(-1);
    expect(util.roundDown(0)).toBe(0);
    expect(util.roundDown(0.1)).toBe(0);
    expect(util.roundDown(1.9)).toBe(1);
  });
});

describe('round', () => {
  it('correctly rounds to nearest whole number', () => {
    expect(util.round(-1.1)).toBe(-1);
    expect(util.round(-0.1)).toBe(0);
    expect(util.round(0)).toBe(0);
    expect(util.round(0.1)).toBe(0);
    expect(util.round(0.9)).toBe(1);
  });
  it('correctly rounds with 1 decimal point', () => {
    expect(util.round(0.83, 1)).toBe(0.8);
    expect(util.round(0.87, 1)).toBe(0.9);
  });
  it('correctly rounds with 2 decimal point2', () => {
    expect(util.round(0.837, 2)).toBe(0.84);
    expect(util.round(0.833, 2)).toBe(0.83);
  });
});
