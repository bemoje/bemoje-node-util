import { Constructor } from '../../interfaces'
import { Base } from './Base'
import { strHash } from '../../string'

const allIndexedInstances: Array<Array<Base>> = []
const allIndexedClasses: Array<Constructor> = []

let nextClassIndex = -1

export function Indexed<TBase extends Constructor>(BaseConstructor: TBase): Constructor {
  const classIndex = ++nextClassIndex
  allIndexedInstances[classIndex] = []
  let nextInstanceIndex = -1

  const Class = class Indexed extends BaseConstructor {
    public static instances = allIndexedInstances[classIndex]
    public static clsId = classIndex

    public id: [number, number]

    constructor(...args: any[]) {
      super(...args)
      this.id = [classIndex, ++nextInstanceIndex]
      this.klass.instances[this.insId] = this
    }

    public get clsId(): number {
      return this.id[0]
    }
    public get insId(): number {
      return this.id[1]
    }
    public get uidString(): string {
      return this.clsId.toString(16) + '-' + this.insId.toString(16)
    }
    public get guidHashMd5(): string {
      return strHash.toString(this.uidString, 'md5', 'base64url')
    }
    public get guidHashSha256(): string {
      return strHash.toString(this.uidString, 'sha256', 'base64url')
    }
    public get klass() {
      return this.constructor.prototype.constructor
    }
  }

  allIndexedClasses[classIndex] = Class
  return Class
}

export function IndexedGetClass(classIndex: number): Constructor {
  return allIndexedClasses[classIndex]
}

export function IndexedGetInstance(classIndex: number, instanceIndex: number): Base {
  return allIndexedInstances[classIndex][instanceIndex]
}
