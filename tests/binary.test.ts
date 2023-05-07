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
      expect(() => util.bytesToInt([252, 252])).toThrowError(
        `Invalid first byte. Got length: 2, and bytes: [252, 252]`,
      )
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

describe('trimArrayBytesRight', () => {
  it('should return the same array if the last byte is not 0', () => {
    const input = [1, 2, 3, 4]
    const output = util.trimArrayBytesRight(input)
    expect(output).toEqual(input)
  })

  it('should return an array without the last byte if it is 0', () => {
    const input = [1, 2, 3, 0]
    const output = util.trimArrayBytesRight(input)
    expect(output).toEqual([1, 2, 3])
  })

  it('should return an array without the last two bytes if they are 0', () => {
    const input = [1, 2, 0, 0]
    const output = util.trimArrayBytesRight(input)
    expect(output).toEqual([1, 2])
  })

  it('should return an array with only the first byte if all other bytes are 0', () => {
    const input = [1, 0, 0, 0]
    const output = util.trimArrayBytesRight(input)
    expect(output).toEqual([1])
  })
})

describe('intToArrayBytes', () => {
  it('should return an array with one element if the input is less than 256', () => {
    expect(util.intToArrayBytes(100)).toEqual([100])
  })

  it('should return an array with two elements if the input is less than 65536', () => {
    expect(util.intToArrayBytes(50000)).toEqual([80, 195])
  })

  it('should return an array with three elements if the input is less than 16777216', () => {
    expect(util.intToArrayBytes(1000000)).toEqual([64, 66, 15])
  })

  it('should return an array with four elements if the input is less than 4294967296', () => {
    expect(util.intToArrayBytes(4000000000)).toEqual([0, 40, 107, 238])
  })

  it('should return an array with four elements if the input is greater than or equal to 4294967296', () => {
    expect(util.intToArrayBytes(4294967296)).toEqual([256, 256, 256, 256])
  })
})

describe('trimArrayBytesLeft', () => {
  it('should return the same array if the first byte is not 0', () => {
    const input = [1, 2, 3, 4]
    const output = util.trimArrayBytesLeft(input)
    expect(output).toEqual(input)
  })

  it('should return an array with the first byte removed if the first byte is 0 and the second byte is not 0', () => {
    const input = [0, 1, 2, 3]
    const output = util.trimArrayBytesLeft(input)
    expect(output).toEqual([1, 2, 3])
  })

  it('should return an array with the first two bytes removed if the first two bytes are 0 and the third byte is not 0', () => {
    const input = [0, 0, 1, 2]
    const output = util.trimArrayBytesLeft(input)
    expect(output).toEqual([1, 2])
  })

  it('should return an array with the first three bytes removed if the first three bytes are 0', () => {
    const input = [0, 0, 0, 1]
    const output = util.trimArrayBytesLeft(input)
    expect(output).toEqual([1])
  })
})

describe('padArrayBytesLeft', () => {
  it('should pad an array of bytes on the left', () => {
    expect(util.padArrayBytesLeft([1])).toEqual([0, 0, 0, 1])
    expect(util.padArrayBytesLeft([1, 2])).toEqual([0, 0, 1, 2])
    expect(util.padArrayBytesLeft([1, 2, 3])).toEqual([0, 1, 2, 3])
    expect(util.padArrayBytesLeft([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  })
})

describe('intToBuffer', () => {
  it('should convert an integer to a buffer', () => {
    const int = 123
    const buffer = util.intToBuffer(int)
    expect(buffer).toBeInstanceOf(Buffer)
    expect(buffer).toEqual(Buffer.from([123]))
  })
})

describe('padArrayBytesRight', () => {
  it('should pad an array of bytes on the right', () => {
    expect(util.padArrayBytesRight([1])).toEqual([1, 0, 0, 0])
    expect(util.padArrayBytesRight([1, 2])).toEqual([1, 2, 0, 0])
    expect(util.padArrayBytesRight([1, 2, 3])).toEqual([1, 2, 3, 0])
    expect(util.padArrayBytesRight([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  })
})

describe('btoa', () => {
  it('should convert a buffer to a base64 string', () => {
    const buf = Buffer.from('hello world')
    const result = util.btoa(buf)
    expect(result).toEqual('aGVsbG8gd29ybGQ=')
  })
})

describe('atob', () => {
  it('should convert a base64 buffer to a string', () => {
    const result = util.atob('SGVsbG8gV29ybGQh')
    expect(result).toEqual(Buffer.from('Hello World!'))
  })
})
