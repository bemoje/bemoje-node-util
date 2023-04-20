/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as util from '../src/libs/map'

describe('mapGetOrDefault', () => {
  let map: Map<string, number>

  beforeEach(() => {
    map = new Map<string, number>()
  })

  it('should return value if key is present', () => {
    map.set('key', 1)
    expect(util.mapGetOrDefault(map, 'key', 2)).toBe(1)
  })

  it('should set default value if key is not present', () => {
    expect(util.mapGetOrDefault(map, 'key', 2)).toBe(2)
    expect(map.get('key')).toBe(2)
  })
})

describe('mapUpdate', () => {
  let map: Map<string, number>

  beforeEach(() => {
    map = new Map<string, number>()
  })

  it('should update value if key is present', () => {
    map.set('key', 1)
    expect(util.mapUpdate(map, 'key', (value) => value! + 1)).toEqual(new Map([['key', 2]]))
  })

  it('should not update value if key is not present', () => {
    expect(util.mapUpdate(map, 'key', (value) => value! + 1)).toEqual(new Map())
  })
})

describe('mapUpdateDefault', () => {
  let map: Map<string, number>

  beforeEach(() => {
    map = new Map<string, number>()
  })

  it('should set default value if key is not present', () => {
    expect(util.mapUpdateDefault(map, 'key', 0, (value) => value + 1)).toEqual(new Map([['key', 1]]))
  })

  it('should update value if key is present', () => {
    map.set('key', 1)
    expect(util.mapUpdateDefault(map, 'key', 0, (value) => value + 1)).toEqual(new Map([['key', 2]]))
  })
})
