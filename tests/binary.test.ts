import * as util from '../src/libs/binary'
import { randomIntBetween } from '../src/libs/number'

describe('Conversion between ints and bytes', () => {
  describe('intToBytes', () => {
    it('throws when passed non-integer floating point number', () => {
      expect(() => util.intToBytes(1.1)).toThrowError(`input must be a positive integer. Got 1.1`)
    })
    it('throws when passed NaN', () => {
      expect(() => util.intToBytes(NaN)).toThrowError(`input must be a positive integer. Got NaN`)
    })
    it('throws when passed a negative value', () => {
      expect(() => util.intToBytes(-2)).toThrowError(`input must be a positive integer. Got -2`)
    })
    it('throws when passed an int larger than 256^5', () => {
      expect(() => util.intToBytes(256 ** 5 + 1)).toThrowError(
        `input must be less than or equal to 256^5. Got ${256 ** 5 + 1}`,
      )
    })
    it('does not throw when passed an int of exactly 256^5', () => {
      expect(() => util.intToBytes(256 ** 5)).not.toThrowError()
    })
  })
  describe('bytesToInt', () => {
    it('throws when passed an invalid byte-array', () => {
      expect(() => util.bytesToInt([252, 252])).toThrowError(`Invalid first byte. Got length: 2, and bytes: [252, 252]`)
      expect(() => util.bytesToInt([253, 5, 1])).toThrowError(
        `Invalid first byte. Got length: 3, and bytes: [253, 5, 1]`,
      )
      expect(() => util.bytesToInt([255, 7, 15, 255, 255, 255, 240, 81])).toThrowError(
        `Invalid bytes. Got [255, 7, 15, 255, 255, 255, 240, 81] = 1099511627776.0625`,
      )
    })
    it('throws when passed byte array corresponding to an int larger than 256^5', () => {
      expect(() => util.bytesToInt([255, 7, 15, 255, 255, 255, 240, 96])).toThrowError(
        `Bytes must correspond to an integer less than or equal to 256^5. Got [255, 7, 15, 255, 255, 255, 240, 96] = 1099511627777`,
      )
    })
    it('does not throws when passed byte array corresponding to an int larger exactly 256^5', () => {
      expect(() => util.bytesToInt([255, 7, 15, 255, 255, 255, 240, 80])).not.toThrowError(
        `Bytes must correspond to an integer less than or equal to 256^5. Got [255, 7, 15, 255, 255, 255, 240, 80] = 1099511627776`,
      )
    })
  })
  it('correctly converts randomly generated integers from various intervals', () => {
    const nums = [0, 256, 256 ** 2, 256 ** 3, 256 ** 4, 256 ** 5]
    const set = new Set(nums.slice().concat(0, 1, 250, 251, 252, 253, 254, 255, 256, 257))
    nums.forEach((n, i) => {
      set.add(n)
      if (i < nums.length - 1) {
        for (let j = 0; j < 1000; j++) {
          const r = randomIntBetween(n, nums[i + 1])
          if (Number.isInteger(r)) {
            set.add(r)
          }
        }
      }
    })
    const acc = Array.from(set)
    for (const n of acc) {
      const bytes = util.intToBytes(n)
      const int = util.bytesToInt(bytes)
      expect(n).toBe(int)
    }
  })
})
