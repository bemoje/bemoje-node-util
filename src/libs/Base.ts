import { iteratePrototypeChain, setNonEnumerablePrivateProperties } from './object';

const hasCreatedFirstInstance: WeakSet<Function> = new WeakSet();

/**
 * Abstract class that other classes can inherit from to gain various handy functionality.
 */
export abstract class Base {
  constructor() {
    this.onFirstInstance();
  }

  private onFirstInstance() {
    if (!hasCreatedFirstInstance.has(this.constructor)) {
      hasCreatedFirstInstance.add(this.constructor);
      this.assertInterfaceStaticMembers('IRevivableJSON', ['toJSON'], ['fromJSON']);
    }
  }

  private assertInterfaceStaticMembers(
    interfaceName: string,
    requiredPropertyNames: Array<string>,
    requiredStaticProperties: Array<string>,
  ) {
    const found = new Set();
    for (const proto of iteratePrototypeChain(this)) {
      if (proto !== Object.prototype) {
        for (const key of requiredPropertyNames) {
          if (Object.hasOwn(proto, key)) {
            found.add(key);
          }
        }
      }
    }
    const implementsInterface = found.size === requiredPropertyNames.length;
    if (implementsInterface) {
      for (const staticMember of requiredStaticProperties) {
        if (!Object.hasOwn(this.constructor, staticMember)) {
          throw new Error(
            `Interface ${interfaceName} requires class ${this.constructor.name} to implement static member: ${staticMember}`,
          );
        }
      }
    }
  }

  /**
   * Make the properties with property names that start with an underscore non-enumerable.
   */
  protected setNonEnumerablePrivateProperties(): void {
    setNonEnumerablePrivateProperties(this);
  }

  protected assertNoAmbiguousOptions(options: Record<string, any>, optionKeyPairs: Array<[string, string]>) {
    for (const [key1, key2] of optionKeyPairs) {
      if (options[key1] !== undefined && options[key2] !== undefined) {
        throw new Error(`Cannot use the '${key1}' option and the '${key2}' option simultanously.`);
      }
    }
  }

  protected assertNoOptionsRequireMissingOptions(
    options: Record<string, any>,
    optionKeyPairs: Array<[string, string]>,
  ) {
    for (const [key1, key2] of optionKeyPairs) {
      if (options[key1] !== undefined && options[key2] === undefined) {
        throw new Error(`Cannot use the '${key1}' option without the '${key2}' option.`);
      }
    }
  }
}
