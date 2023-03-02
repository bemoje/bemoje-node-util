import * as util from './Base';
import { IRevivableJSON } from './datastructures';

describe('setNonEnumerablePrivateProperties', () => {
  it('identifies underscored property names correctly', () => {
    class C extends util.Base {
      _a = 1;
      _b = 1;
      c = 1;
      constructor() {
        super();
        this.setNonEnumerablePrivateProperties();
      }
    }
    expect([...Object.keys(new C())]).toStrictEqual(['c']);
  });
});

describe('validateAmbiguousOptions', () => {
  class C extends util.Base {
    constructor(options = {}) {
      super();
      this.assertNoAmbiguousOptions(options, [
        ['a', 'b'],
        ['c', 'd'],
      ]);
    }
  }
  it('correctly validates ambiguous options', () => {
    expect(() => {
      new C({ a: 1, b: 1, c: 1 });
    }).toThrowError("Cannot use the 'a' option and the 'b' option simultanously.");
    expect(() => {
      new C({ a: 1, c: 1, d: 1 });
    }).toThrowError("Cannot use the 'c' option and the 'd' option simultanously.");
  });
});

describe('validateOptionsRequireOtherOptions', () => {
  class C extends util.Base {
    constructor(options = {}) {
      super();
      this.assertNoOptionsRequireMissingOptions(options, [
        ['a', 'b'],
        ['c', 'd'],
      ]);
    }
  }
  it('correctly validates options that require other options to defined', () => {
    expect(() => {
      new C({ a: 1, c: 1, d: 1 });
    }).toThrowError(`Cannot use the 'a' option without the 'b' option.`);
    expect(() => {
      new C({ a: 1, b: 1, c: 1 });
    }).toThrowError(`Cannot use the 'c' option without the 'd' option.`);
  });
});

describe('IRevivableJSON', () => {
  it('correctly detects missing static method fromJSON', () => {
    expect(() => {
      class C extends util.Base implements IRevivableJSON<{}> {
        constructor() {
          super();
        }
        toJSON() {
          return this;
        }
      }
      new C();
    }).toThrowError('Interface IRevivableJSON requires class C to implement static member: fromJSON');
  });
  it('does not throw when not implementing instance methods', () => {
    expect(() => {
      class C extends util.Base {
        constructor() {
          super();
        }
      }
      new C();
    }).not.toThrowError();
  });
  it('does not throw when not implementing interface correctly', () => {
    expect(() => {
      class C extends util.Base implements IRevivableJSON<{}> {
        static fromJSON() {
          return new this();
        }
        constructor() {
          super();
        }
        toJSON() {
          return '{}';
        }
      }
      new C();
    }).not.toThrowError();
  });
});
