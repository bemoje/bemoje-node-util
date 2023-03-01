import * as util from './object';

describe('setEnumerable', () => {
  it('should set the enumerable property to true.', () => {
    const o = { a: 1 };
    Object.defineProperty(o, 'a', { enumerable: false });
    expect(Object.keys(o).includes('a')).toBe(false);
    util.setEnumerable(o, 'a');
    expect(Object.keys(o).includes('a')).toBe(true);
  });
});

describe('setNonEnumerable', () => {
  it('should set the enumerable property to true.', () => {
    const o = { a: 1 };
    expect(Object.keys(o).includes('a')).toBe(true);
    util.setNonEnumerable(o, 'a');
    expect(Object.keys(o).includes('a')).toBe(false);
  });
});

describe('setWritable', () => {
  it('should set the writable property to true.', () => {
    const o = { a: 1 };
    Object.defineProperty(o, 'a', { writable: false });
    expect(() => (o.a = 2)).toThrowError();
    expect(o.a).toBe(1);
    util.setWritable(o, 'a');
    o.a = 2;
    expect(o.a).toBe(2);
  });
});

describe('setNonWritable', () => {
  it('should set the writable property to true.', () => {
    const o = { a: 1 };
    util.setNonWritable(o, 'a');
    expect(() => (o.a = 2)).toThrowError();
    expect(o.a).toBe(1);
  });
});

describe('setNonConfigurable', () => {
  it('should set the configurable property to true.', () => {
    const o = { a: 1 };
    util.setNonConfigurable(o, 'a');
    expect(() => {
      Object.defineProperty(o, 'a', { enumerable: false });
    }).toThrowError();
  });
});

describe('setNonEnumerablePrivateProperties', () => {
  it('should set the enumerable property to false for all property names starting with an underscore.', () => {
    const o = { _a: 1, _b: 2, c: 3 };
    util.setNonEnumerablePrivateProperties(o);
    expect(Object.keys(o)).toStrictEqual(['c']);
  });
});
