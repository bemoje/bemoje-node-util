import { strHashToString } from '../string/strHashToString'
import { MixinBase } from './MixinBase'
import { MixinIndexed } from './MixinIndexed'

describe('MixinIndexed', () => {
  class Indexed extends MixinIndexed(MixinBase) {}

  it('should increment index for each new instance', () => {
    const instance1 = new Indexed()
    const instance2 = new Indexed()
    expect(instance1.i).toBe(0)
    expect(instance2.i).toBe(1)
  })

  it('should return unique id', () => {
    const instance = new Indexed()
    expect(instance.uid).toEqual(['Indexed', instance.i])
  })

  it('should return unique id string', () => {
    const instance = new Indexed()
    expect(instance.uidString).toBe('Indexed:' + instance.i)
  })

  it('should return unique id hash md5', () => {
    const instance = new Indexed()
    const expectedHash = strHashToString(instance.uidString, 'md5', 'base64url')
    expect(instance.uidHashMd5).toBe(expectedHash)
  })

  it('should return unique id hash sha1', () => {
    const instance = new Indexed()
    const expectedHash = strHashToString(instance.uidString, 'sha1', 'base64url')
    expect(instance.uidHashSha1).toBe(expectedHash)
  })

  it('should return unique id hash sha256', () => {
    const instance = new Indexed()
    const expectedHash = strHashToString(instance.uidString, 'sha256', 'base64url')
    expect(instance.uidHashSha256).toBe(expectedHash)
  })
})
