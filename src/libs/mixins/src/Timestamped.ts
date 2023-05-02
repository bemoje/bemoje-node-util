import { Constructor } from '../../interfaces'

export function Timestamped<TBase extends Constructor>(BaseConstructor: TBase): Constructor {
  const t0 = Date.now()
  return class Timestamped extends BaseConstructor {
    public static timestamp = t0
    public timestamp = Date.now()
  }
}
