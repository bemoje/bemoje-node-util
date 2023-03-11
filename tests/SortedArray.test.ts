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

describe('toArray', () => {
  it('returns native Array instance', () => {
    expect(new util.SortedArray().toArray() instanceof Array).toBe(true);
  });
  it('works with empty array', () => {
    expect(new util.SortedArray().toArray()).toStrictEqual([]);
  });
  it('returns an array identical to data input', () => {
    const data = [2, 3, 4];
    expect(new util.SortedArray({ data }).toArray()).toStrictEqual(data);
  });
});

describe('insertionIndex', () => {
  it('works when array is empty', () => {
    const [index, foundIdentical] = new util.SortedArray().insertionIndex('a');
    expect(index).toBe(0);
    expect(foundIdentical).toBe(false);
  });
  it('works when array has 1 non-identical element - before', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('b'),
    }).insertionIndex('a');
    expect(index).toBe(0);
    expect(foundIdentical).toBe(false);
  });
  it('works when array has 1 non-identical element - after', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('a'),
    }).insertionIndex('b');
    expect(index).toBe(1);
    expect(foundIdentical).toBe(false);
  });
  it('works when identical element exists - middle index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('abcde'),
    }).insertionIndex('b');
    expect(index).toBe(1);
    expect(foundIdentical).toBe(true);
  });
  it('works when identical element exists - first index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('abcde'),
    }).insertionIndex('a');
    expect(index).toBe(0);
    expect(foundIdentical).toBe(true);
  });
  it('works when identical element exists - last index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('abcde'),
    }).insertionIndex('e');
    expect(index).toBe(4);
    expect(foundIdentical).toBe(true);
  });
  it('works when no identical element exists - middle index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('acde'),
    }).insertionIndex('b');
    expect(index).toBe(1);
    expect(foundIdentical).toBe(false);
  });
  it('works when no identical element exists - first index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('bcde'),
    }).insertionIndex('a');
    expect(index).toBe(0);
    expect(foundIdentical).toBe(false);
  });
  it('works when no identical element exists - last index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('abcd'),
    }).insertionIndex('e');
    expect(index).toBe(4);
    expect(foundIdentical).toBe(false);
  });
  it('returns any fitting index when several identical elements exist - middle', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('abcccccde'),
    }).insertionIndex('c');
    expect([2, 3, 4, 5, 6, 7].includes(index)).toBe(true);
    expect(foundIdentical).toBe(true);
  });
  it('returns any fitting index when several identical elements exist - first index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('aaaabcde'),
    }).insertionIndex('a');
    expect([0, 1, 2, 3, 4].includes(index)).toBe(true);
    expect(foundIdentical).toBe(true);
  });
  it('returns any fitting index when several identical elements exist - first index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('abcdeeee'),
    }).insertionIndex('e');
    expect([4, 5, 6, 7, 8].includes(index)).toBe(true);
    expect(foundIdentical).toBe(true);
  });
});

describe('firstInsertionIndex', () => {
  it('works when array is empty', () => {
    const [index, foundIdentical] = new util.SortedArray().firstInsertionIndex('a');
    expect(index).toBe(0);
    expect(foundIdentical).toBe(false);
  });
  it('works when array has 1 non-identical element - before', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('b'),
    }).firstInsertionIndex('a');
    expect(index).toBe(0);
    expect(foundIdentical).toBe(false);
  });
  it('works when array has 1 non-identical element - after', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('a'),
    }).firstInsertionIndex('b');
    expect(index).toBe(1);
    expect(foundIdentical).toBe(false);
  });
  it('works when identical element exists - middle index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('abcde'),
    }).firstInsertionIndex('b');
    expect(index).toBe(1);
    expect(foundIdentical).toBe(true);
  });
  it('works when identical element exists - first index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('abcde'),
    }).firstInsertionIndex('a');
    expect(index).toBe(0);
    expect(foundIdentical).toBe(true);
  });
  it('works when identical element exists - last index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('abcde'),
    }).firstInsertionIndex('e');
    expect(index).toBe(4);
    expect(foundIdentical).toBe(true);
  });
  it('works when no identical element exists - middle index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('acde'),
    }).firstInsertionIndex('b');
    expect(index).toBe(1);
    expect(foundIdentical).toBe(false);
  });
  it('works when no identical element exists - first index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('bcde'),
    }).firstInsertionIndex('a');
    expect(index).toBe(0);
    expect(foundIdentical).toBe(false);
  });
  it('works when no identical element exists - last index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('abcd'),
    }).firstInsertionIndex('e');
    expect(index).toBe(4);
    expect(foundIdentical).toBe(false);
  });
  it('returns first index when several identical elements exist - middle', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('abcccccde'),
    }).firstInsertionIndex('c');
    expect(index).toBe(2);
    expect(foundIdentical).toBe(true);
  });
  it('returns first index when several identical elements exist - first index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('aaaabcde'),
    }).firstInsertionIndex('a');
    expect(index).toBe(0);
    expect(foundIdentical).toBe(true);
  });
  it('returns first index when several identical elements exist - first index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('abcdeeee'),
    }).firstInsertionIndex('e');
    expect(index).toBe(4);
    expect(foundIdentical).toBe(true);
  });
});

describe('lastInsertionIndex', () => {
  it('works when array is empty', () => {
    const [index, foundIdentical] = new util.SortedArray().lastInsertionIndex('a');
    expect(index).toBe(0);
    expect(foundIdentical).toBe(false);
  });
  it('works when array has 1 non-identical element - before', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('b'),
    }).lastInsertionIndex('a');
    expect(index).toBe(0);
    expect(foundIdentical).toBe(false);
  });
  it('works when array has 1 non-identical element - after', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('a'),
    }).lastInsertionIndex('b');
    expect(index).toBe(1);
    expect(foundIdentical).toBe(false);
  });
  it('works when identical element exists - middle index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('abcde'),
    }).lastInsertionIndex('b');
    expect(index).toBe(2);
    expect(foundIdentical).toBe(true);
  });
  it('works when identical element exists - first index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('abcde'),
    }).lastInsertionIndex('a');
    expect(index).toBe(1);
    expect(foundIdentical).toBe(true);
  });
  it('works when identical element exists - last index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('abcde'),
    }).lastInsertionIndex('e');
    expect(index).toBe(5);
    expect(foundIdentical).toBe(true);
  });
  it('works when no identical element exists - middle index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('acde'),
    }).lastInsertionIndex('b');
    expect(index).toBe(1);
    expect(foundIdentical).toBe(false);
  });
  it('works when no identical element exists - first index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('bcde'),
    }).lastInsertionIndex('a');
    expect(index).toBe(0);
    expect(foundIdentical).toBe(false);
  });
  it('works when no identical element exists - last index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('abcd'),
    }).lastInsertionIndex('e');
    expect(index).toBe(4);
    expect(foundIdentical).toBe(false);
  });
  it('returns last index when several identical elements exist - middle', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('abcccccde'),
    }).lastInsertionIndex('c');
    expect(index).toBe(7);
    expect(foundIdentical).toBe(true);
  });
  it('returns last index when several identical elements exist - first index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('aaaabcde'),
    }).lastInsertionIndex('a');
    expect(index).toBe(4);
    expect(foundIdentical).toBe(true);
  });
  it('returns last index when several identical elements exist - first index', () => {
    const [index, foundIdentical] = new util.SortedArray({
      data: Array.from('abcdeeee'),
    }).lastInsertionIndex('e');
    expect(index).toBe(8);
    expect(foundIdentical).toBe(true);
  });
});

describe('indexOfCompare', () => {
  it('works when array is empty', () => {
    const index = new util.SortedArray().indexOfCompare('a');
    expect(index).toBe(-1);
  });
  it('works when array has 1 non-identical element - before', () => {
    const index = new util.SortedArray({
      data: Array.from('b'),
    }).indexOfCompare('a');
    expect(index).toBe(-1);
  });
  it('works when array has 1 non-identical element - after', () => {
    const index = new util.SortedArray({
      data: Array.from('a'),
    }).indexOfCompare('b');
    expect(index).toBe(-1);
  });
  it('works when identical element exists - middle index', () => {
    const index = new util.SortedArray({
      data: Array.from('abcde'),
    }).indexOfCompare('b');
    expect(index).toBe(1);
  });
  it('works when identical element exists - first index', () => {
    const index = new util.SortedArray({
      data: Array.from('abcde'),
    }).indexOfCompare('a');
    expect(index).toBe(0);
  });
  it('works when identical element exists - last index', () => {
    const index = new util.SortedArray({
      data: Array.from('abcde'),
    }).indexOfCompare('e');
    expect(index).toBe(4);
  });
  it('works when no identical element exists - middle index', () => {
    const index = new util.SortedArray({
      data: Array.from('acde'),
    }).indexOfCompare('b');
    expect(index).toBe(-1);
  });
  it('works when no identical element exists - first index', () => {
    const index = new util.SortedArray({
      data: Array.from('bcde'),
    }).indexOfCompare('a');
    expect(index).toBe(-1);
  });
  it('works when no identical element exists - last index', () => {
    const index = new util.SortedArray({
      data: Array.from('abcd'),
    }).indexOfCompare('e');
    expect(index).toBe(-1);
  });
  it('returns any fitting index when several identical elements exist - middle', () => {
    const index = new util.SortedArray({
      data: Array.from('abcccccde'),
    }).indexOfCompare('c');
    expect([2, 3, 4, 5, 6].includes(index)).toBe(true);
  });
  it('returns any fitting index when several identical elements exist - first index', () => {
    const index = new util.SortedArray({
      data: Array.from('aaaabcde'),
    }).indexOfCompare('a');
    expect([0, 1, 2, 3].includes(index)).toBe(true);
  });
  it('returns any fitting index when several identical elements exist - first index', () => {
    const index = new util.SortedArray({
      data: Array.from('abcdeeee'),
    }).indexOfCompare('e');
    expect([4, 5, 6, 7].includes(index)).toBe(true);
  });
});

describe('firstIndexOfCompare', () => {
  it('works when array is empty', () => {
    const index = new util.SortedArray().firstIndexOfCompare('a');
    expect(index).toBe(-1);
  });
  it('works when array has 1 non-identical element - before', () => {
    const index = new util.SortedArray({
      data: Array.from('b'),
    }).firstIndexOfCompare('a');
    expect(index).toBe(-1);
  });
  it('works when array has 1 non-identical element - after', () => {
    const index = new util.SortedArray({
      data: Array.from('a'),
    }).firstIndexOfCompare('b');
    expect(index).toBe(-1);
  });
  it('works when identical element exists - middle index', () => {
    const index = new util.SortedArray({
      data: Array.from('abcde'),
    }).firstIndexOfCompare('b');
    expect(index).toBe(1);
  });
  it('works when identical element exists - first index', () => {
    const index = new util.SortedArray({
      data: Array.from('abcde'),
    }).firstIndexOfCompare('a');
    expect(index).toBe(0);
  });
  it('works when identical element exists - last index', () => {
    const index = new util.SortedArray({
      data: Array.from('abcde'),
    }).firstIndexOfCompare('e');
    expect(index).toBe(4);
  });
  it('works when no identical element exists - middle index', () => {
    const index = new util.SortedArray({
      data: Array.from('acde'),
    }).firstIndexOfCompare('b');
    expect(index).toBe(-1);
  });
  it('works when no identical element exists - first index', () => {
    const index = new util.SortedArray({
      data: Array.from('bcde'),
    }).firstIndexOfCompare('a');
    expect(index).toBe(-1);
  });
  it('works when no identical element exists - last index', () => {
    const index = new util.SortedArray({
      data: Array.from('abcd'),
    }).firstIndexOfCompare('e');
    expect(index).toBe(-1);
  });
  it('returns first index when several identical elements exist - middle', () => {
    const index = new util.SortedArray({
      data: Array.from('abcccccde'),
    }).firstIndexOfCompare('c');
    expect(index).toBe(2);
  });
  it('returns first index when several identical elements exist - first index', () => {
    const index = new util.SortedArray({
      data: Array.from('aaaabcde'),
    }).firstIndexOfCompare('a');
    expect(index).toBe(0);
  });
  it('returns first index when several identical elements exist - first index', () => {
    const index = new util.SortedArray({
      data: Array.from('abcdeeee'),
    }).firstIndexOfCompare('e');
    expect(index).toBe(4);
  });
});

describe('lastIndexOfCompare', () => {
  it('works when array is empty', () => {
    const index = new util.SortedArray().lastIndexOfCompare('a');
    expect(index).toBe(-1);
  });
  it('works when array has 1 non-identical element - before', () => {
    const index = new util.SortedArray({
      data: Array.from('b'),
    }).lastIndexOfCompare('a');
    expect(index).toBe(-1);
  });
  it('works when array has 1 non-identical element - after', () => {
    const index = new util.SortedArray({
      data: Array.from('a'),
    }).lastIndexOfCompare('b');
    expect(index).toBe(-1);
  });
  it('works when identical element exists - middle index', () => {
    const index = new util.SortedArray({
      data: Array.from('abcde'),
    }).lastIndexOfCompare('b');
    expect(index).toBe(1);
  });
  it('works when identical element exists - first index', () => {
    const index = new util.SortedArray({
      data: Array.from('abcde'),
    }).lastIndexOfCompare('a');
    expect(index).toBe(0);
  });
  it('works when identical element exists - last index', () => {
    const index = new util.SortedArray({
      data: Array.from('abcde'),
    }).lastIndexOfCompare('e');
    expect(index).toBe(4);
  });
  it('works when no identical element exists - middle index', () => {
    const index = new util.SortedArray({
      data: Array.from('acde'),
    }).lastIndexOfCompare('b');
    expect(index).toBe(-1);
  });
  it('works when no identical element exists - first index', () => {
    const index = new util.SortedArray({
      data: Array.from('bcde'),
    }).lastIndexOfCompare('a');
    expect(index).toBe(-1);
  });
  it('works when no identical element exists - last index', () => {
    const index = new util.SortedArray({
      data: Array.from('abcd'),
    }).lastIndexOfCompare('e');
    expect(index).toBe(-1);
  });
  it('returns last index when several identical elements exist - middle', () => {
    const index = new util.SortedArray({
      data: Array.from('abcccccde'),
    }).lastIndexOfCompare('c');
    expect(index).toBe(6);
  });
  it('returns last index when several identical elements exist - first index', () => {
    const index = new util.SortedArray({
      data: Array.from('aaaabcde'),
    }).lastIndexOfCompare('a');
    expect(index).toBe(3);
  });
  it('returns last index when several identical elements exist - first index', () => {
    const index = new util.SortedArray({
      data: Array.from('abcdeeee'),
    }).lastIndexOfCompare('e');
    expect(index).toBe(7);
  });
});

describe('indicesOfCompare', () => {
  it('works when array is empty', () => {
    const indices = new util.SortedArray().indicesOfCompare('a');
    expect(indices).toStrictEqual([]);
  });
  it('works when array has 1 non-identical element - before', () => {
    const indices = new util.SortedArray({
      data: Array.from('b'),
    }).indicesOfCompare('a');
    expect(indices).toStrictEqual([]);
  });
  it('works when array has 1 non-identical element - after', () => {
    const indices = new util.SortedArray({
      data: Array.from('a'),
    }).indicesOfCompare('b');
    expect(indices).toStrictEqual([]);
  });
  it('works when identical element exists - middle index', () => {
    const indices = new util.SortedArray({
      data: Array.from('abcde'),
    }).indicesOfCompare('b');
    expect(indices).toStrictEqual([1]);
  });
  it('works when identical element exists - first index', () => {
    const indices = new util.SortedArray({
      data: Array.from('abcde'),
    }).indicesOfCompare('a');
    expect(indices).toStrictEqual([0]);
  });
  it('works when identical element exists - last index', () => {
    const indices = new util.SortedArray({
      data: Array.from('abcde'),
    }).indicesOfCompare('e');
    expect(indices).toStrictEqual([4]);
  });
  it('works when no identical element exists - middle index', () => {
    const indices = new util.SortedArray({
      data: Array.from('acde'),
    }).indicesOfCompare('b');
    expect(indices).toStrictEqual([]);
  });
  it('works when no identical element exists - first index', () => {
    const indices = new util.SortedArray({
      data: Array.from('bcde'),
    }).indicesOfCompare('a');
    expect(indices).toStrictEqual([]);
  });
  it('works when no identical element exists - last index', () => {
    const indices = new util.SortedArray({
      data: Array.from('abcd'),
    }).indicesOfCompare('e');
    expect(indices).toStrictEqual([]);
  });
  it('returns all fitting indices when several identical elements exist - middle', () => {
    const indices = new util.SortedArray({
      data: Array.from('abcccccde'),
    }).indicesOfCompare('c');
    expect(indices).toStrictEqual([2, 3, 4, 5, 6]);
  });
  it('returns all fitting indices when several identical elements exist - first index', () => {
    const indices = new util.SortedArray({
      data: Array.from('aaaabcde'),
    }).indicesOfCompare('a');
    expect(indices).toStrictEqual([0, 1, 2, 3]);
  });
  it('returns all fitting indices when several identical elements exist - first index', () => {
    const indices = new util.SortedArray({
      data: Array.from('abcdeeee'),
    }).indicesOfCompare('e');
    expect(indices).toStrictEqual([4, 5, 6, 7]);
  });
});

describe('add', () => {
  it('adds to empty array', () => {
    expect(new util.SortedArray().add(0).toArray()).toStrictEqual([0]);
  });
  it('stays sorted - first', () => {
    const a = new util.SortedArray({ data: [1, 3, 5] });
    expect(a.add(0).toArray()).toStrictEqual([0, 1, 3, 5]);
  });
  it('stays sorted - middle', () => {
    const a = new util.SortedArray({ data: [1, 3, 5] });
    expect(a.add(2).toArray()).toStrictEqual([1, 2, 3, 5]);
    expect(a.add(4).toArray()).toStrictEqual([1, 2, 3, 4, 5]);
  });
  it('stays sorted - end', () => {
    const a = new util.SortedArray({ data: [1, 3, 5] });
    expect(a.add(6).toArray()).toStrictEqual([1, 3, 5, 6]);
  });
  it('stays sorted - identical element exists - first', () => {
    const a = new util.SortedArray({ data: [1, 3, 5] });
    expect(a.add(1).toArray()).toStrictEqual([1, 1, 3, 5]);
  });
  it('stays sorted - identical element exists - middle', () => {
    const a = new util.SortedArray({ data: [1, 3, 5] });
    expect(a.add(3).toArray()).toStrictEqual([1, 3, 3, 5]);
  });
  it('stays sorted - identical element exists - end', () => {
    const a = new util.SortedArray({ data: [1, 3, 5] });
    expect(a.add(5).toArray()).toStrictEqual([1, 3, 5, 5]);
  });
  it('stays sorted - identical element exists - no duplicates - first', () => {
    const a = new util.SortedArray({ data: [1, 3, 5], allowDuplicates: false });
    expect(a.add(1).toArray()).toStrictEqual([1, 3, 5]);
  });
  it('stays sorted - identical element exists - no duplicates - middle', () => {
    const a = new util.SortedArray({ data: [1, 3, 5], allowDuplicates: false });
    expect(a.add(3).toArray()).toStrictEqual([1, 3, 5]);
  });
  it('stays sorted - identical element exists - no duplicates - end', () => {
    const a = new util.SortedArray({ data: [1, 3, 5], allowDuplicates: false });
    expect(a.add(5).toArray()).toStrictEqual([1, 3, 5]);
  });
  it('stays sorted - multiple identical elements - first', () => {
    const a = new util.SortedArray({ data: [1, 1, 1, 3, 3, 3, 5, 5, 5] });
    expect(a.add(1).toArray()).toStrictEqual([1, 1, 1, 1, 3, 3, 3, 5, 5, 5]);
  });
  it('stays sorted - multiple identical elements - middle', () => {
    const a = new util.SortedArray({ data: [1, 1, 1, 3, 3, 3, 5, 5, 5] });
    expect(a.add(3).toArray()).toStrictEqual([1, 1, 1, 3, 3, 3, 3, 5, 5, 5]);
  });
  it('stays sorted - multiple identical elements - end', () => {
    const a = new util.SortedArray({ data: [1, 1, 1, 3, 3, 3, 5, 5, 5] });
    expect(a.add(5).toArray()).toStrictEqual([1, 1, 1, 3, 3, 3, 5, 5, 5, 5]);
  });
  it('automatically switches to numeric comparator if first added element is not a string', () => {
    expect(() => {
      new util.SortedArray().add(0).add(1).add(2);
    }).not.toThrowError();
  });
});

describe('addMany', () => {
  it('adds nothing', () => {
    const a = new util.SortedArray();
    expect(a.addMany().toArray()).toStrictEqual([]);
  });
  it('adds one element', () => {
    const a = new util.SortedArray();
    expect(a.addMany(0).toArray()).toStrictEqual([0]);
  });
  it('adds multiple elements', () => {
    const a = new util.SortedArray({ data: [0] });
    expect(a.addMany(2, 1, 3).toArray()).toStrictEqual([0, 1, 2, 3]);
  });
});
