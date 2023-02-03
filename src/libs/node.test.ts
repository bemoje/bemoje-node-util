import * as util from './node';

describe('getMemoryUsage', () => {
  it('example', () => {
    const m = util.getMemoryUsage();
    expect(typeof m.processAllocationMB).toBe('number');
    expect(typeof m.heapAllocationMB).toBe('number');
    expect(typeof m.heapUsedMB).toBe('number');
    expect(typeof m.extenalV8).toBe('number');
  });
});

describe('getMemoryUsageFormattedEU', () => {
  it('example', () => {
    const m = util.getMemoryUsageFormattedEU();
    expect(typeof m.processAllocationMB).toBe('string');
    expect(typeof m.heapAllocationMB).toBe('string');
    expect(typeof m.heapUsedMB).toBe('string');
    expect(typeof m.extenalV8).toBe('string');
  });
});

describe('getMemoryUsageFormattedUS', () => {
  it('example', () => {
    const m = util.getMemoryUsageFormattedUS();
    expect(typeof m.processAllocationMB).toBe('string');
    expect(typeof m.heapAllocationMB).toBe('string');
    expect(typeof m.heapUsedMB).toBe('string');
    expect(typeof m.extenalV8).toBe('string');
  });
});
