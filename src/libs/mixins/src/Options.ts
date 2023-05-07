import type { IHandledOptions } from './interfaces'
import type { Constructor } from '../../interfaces'
import type { Obj, GenericArgs } from '../../interfaces'

export function Options<TBase extends Constructor>(BaseConstructor: TBase): Constructor {
  const wmap = new WeakMap<Obj, Obj>()
  return class Options extends BaseConstructor implements IHandledOptions {
    constructor(...args: GenericArgs) {
      let options = args.shift()
      super(...args)
      options = Object.assign({}, this.defaultOptions, options)
      wmap.set(this, options)
      this.handleOptions(options)
    }

    handleOptions(options: Obj) {
      Object.assign(this, options)
    }

    public get options(): Obj {
      return wmap.get(this) || {}
    }

    public get defaultOptions(): Obj {
      return this.klass.defaultOptions
    }

    public get klass() {
      return this.constructor.prototype.constructor
    }
  }
}
