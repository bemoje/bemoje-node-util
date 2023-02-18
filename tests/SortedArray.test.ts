import * as util from '../src/libs/datastructures';

describe('constrcutor', () => {
  it('created new instance', () => {
    const a = new util.SortedArray();
    expect(a instanceof util.SortedArray).toBe(true);
  });
  it('can initialize from an Iterable', () => {
    const a = new util.SortedArray({ data: Array.from('adbec') });
    expect(a.toArray()).toStrictEqual(Array.from('abcde'));
  });
  it('correctly handles allowDuplicates options', () => {
    let a;

    a = new util.SortedArray({ data: Array.from('adbeccc') });
    expect(a.toArray()).toStrictEqual(Array.from('abcccde'));

    a = new util.SortedArray({
      data: Array.from('adabeccc'),
      allowDuplicates: false,
    });
    expect(a.toArray()).toStrictEqual(Array.from('abcde'));
  });
});

describe('insertionIndex', () => {
  it('example', () => {
    expect(
      new util.SortedArray({
        data: Array.from('abcde'),
      }).insertionIndex('b'),
    ).toBe(1);
    expect(
      new util.SortedArray({
        data: Array.from('abcde'),
      }).insertionIndex('a'),
    ).toBe(0);
    expect(
      new util.SortedArray({
        data: Array.from('acde'),
      }).insertionIndex('b'),
    ).toBe(1);
    expect(
      new util.SortedArray({
        data: Array.from('abcde'),
      }).insertionIndex('f'),
    ).toBe(5);
    expect(
      new util.SortedArray({
        data: Array.from('bcde'),
      }).insertionIndex('a'),
    ).toBe(0);
  });
});

// TODO do remaining tests
