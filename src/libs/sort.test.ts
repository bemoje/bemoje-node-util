import * as util from './sort';

describe('compareArrays', () => {
  it('example', () => {
    const arr = [
      [1, 2, 3],
      [1, 2, 2],
      [3, 0, 1],
      [0, 3, 1],
    ];
    const compare = util.compareArrays(util.compareNumeric);
    expect(arr.sort(compare)).toStrictEqual([
      [0, 3, 1],
      [1, 2, 2],
      [1, 2, 3],
      [3, 0, 1],
    ]);
  });
  it('is compatible with descending sorting comparator', () => {
    const arr = [
      [1, 2, 3],
      [1, 2, 2],
      [3, 0, 1],
      [0, 3, 1],
    ];
    const compare = util.compareArrays(util.compareNumericDescending, true);
    expect(arr.sort(compare)).toStrictEqual([
      [3, 0, 1],
      [1, 2, 3],
      [1, 2, 2],
      [0, 3, 1],
    ]);
  });
  it('deep recursive compare ascending', () => {
    const arr = [
      ['repo', 'src', ['compare', 'json']],
      ['repo', 'src', ['compare', 'ts']],
      ['repo', 'src', ['compare', 'js']],
    ];
    const compare = util.compareArrays(util.compareAlphaNumeric);
    expect(arr.sort(compare)).toStrictEqual([
      ['repo', 'src', ['compare', 'js']],
      ['repo', 'src', ['compare', 'json']],
      ['repo', 'src', ['compare', 'ts']],
    ]);
  });
  it('deep recursive compare descending', () => {
    const arr = [
      ['repo', 'src', ['compare', 'json']],
      ['repo', 'src', ['compare', 'ts']],
      ['repo', 'src', ['compare', 'js']],
    ];
    const compare = util.compareArrays(
      util.compareAlphaNumericDescending,
      true,
    );
    expect(arr.sort(compare)).toStrictEqual([
      ['repo', 'src', ['compare', 'ts']],
      ['repo', 'src', ['compare', 'json']],
      ['repo', 'src', ['compare', 'js']],
    ]);
  });
});
