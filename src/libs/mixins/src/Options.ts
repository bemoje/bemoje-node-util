import { IHandledOptions } from './interfaces'
import { Constructor } from '../../interfaces'

export function Options<TBase extends Constructor>(BaseConstructor: TBase): Constructor {
  const wmap = new WeakMap<any, Record<string, any>>()
  return class Options extends BaseConstructor implements IHandledOptions {
    constructor(...args: any[]) {
      let options = args.shift()
      super(...args)
      options = Object.assign({}, this.defaultOptions, options)
      wmap.set(this, options)
      this.handleOptions(options)
    }

    handleOptions(options: Record<string, any>) {
      Object.assign(this, options)
    }

    public get options(): Record<string, any> {
      return wmap.get(this) || {}
    }

    public get defaultOptions(): Record<string, any> {
      return this.klass.defaultOptions
    }

    public get klass() {
      return this.constructor.prototype.constructor
    }
  }
}
