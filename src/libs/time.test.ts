import * as util from './time';

describe('Timer', () => {
  it('example', () => {
    const t = new util.Timer();
    const n = t.stop();
    expect(n >= 0).toBe(true);
  });
});
