import { inheritStaticMembers, iteratePrototypeChain, setNonEnumerablePrivateProperties } from '../../object'
import { Constructor } from '../../interfaces'
import { interfaceDefinitions } from './interfaces'

const hasSeenFirstInstance = new WeakSet<any>()
/**
 * Abstract class that other classes can inherit from to gain various handy functionality.
 */
export class Base {
  constructor(options?: Record<string, any>) {
    // this.init()
  }

  public get klass(): typeof Base {
    return Object.getPrototypeOf(this).constructor
  }

  public get proto(): Record<string, any> {
    return Object.getPrototypeOf(this)
  }

  protected init(): void {
    if (!hasSeenFirstInstance.has(this.constructor)) {
      hasSeenFirstInstance.add(this.constructor)
      this.inheritAllStatic()
      this.checkInterfaces()
    }
  }

  private inheritAllStatic(): void {
    const ctors = [...iteratePrototypeChain(this.klass)].reverse()
    for (const ctor of ctors) {
      if (typeof ctor !== 'object' && Object.hasOwn(ctor, 'prototype')) {
        inheritStaticMembers(this.klass, ctor)
      }
    }
  }

  private checkInterfaces(): void {
    for (const [interfaceName, [instanceMembers, staticMembers]] of interfaceDefinitions) {
      if (this.hasInterfaceInstanceMembers(instanceMembers)) {
        this.assertInterfaceStaticMembers(interfaceName, staticMembers)
      }
    }
  }

  private hasInterfaceInstanceMembers(instanceMembers: Array<string>): boolean {
    return instanceMembers.length === instanceMembers.filter((key) => key in this).length
  }

  private assertInterfaceStaticMembers(interfaceName: string, staticMembers: Array<string>): void {
    for (const key of staticMembers) {
      if (!Object.hasOwn(this.constructor, key)) {
        throw new Error(
          `Interface ${interfaceName} requires class ${this.constructor.name} to implement static member: ${key}`,
        )
      }
    }
  }

  /**
   * Make the properties with property names that start with an underscore non-enumerable.
   */
  protected setNonEnumerablePrivateProperties(): void {
    setNonEnumerablePrivateProperties(this)
  }

  protected assertNoAmbiguousOptions(options: Record<string, any>, optionKeyPairs: Array<[string, string]>): void {
    for (const [key1, key2] of optionKeyPairs) {
      if (options[key1] !== undefined && options[key2] !== undefined) {
        throw new Error(`Cannot use the '${key1}' option and the '${key2}' option simultanously.`)
      }
    }
  }

  protected assertNoOptionsRequireMissingOptions(
    options: Record<string, any>,
    optionKeyPairs: Array<[string, string]>,
  ): void {
    for (const [key1, key2] of optionKeyPairs) {
      if (options[key1] !== undefined && options[key2] === undefined) {
        throw new Error(`Cannot use the '${key1}' option without the '${key2}' option.`)
      }
    }
  }
}
