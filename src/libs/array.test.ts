import * as util from './array';

describe('arrMapMutable', () => {
  it('example', () => {
    expect(
      util.arrMapMutable([1, 2, 3, 4, 5], (value: number) => {
        return value + 1;
      }),
    ).toStrictEqual([2, 3, 4, 5, 6]);
  });
});
