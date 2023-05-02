import { Base } from './Base'
import { Timestamped } from './Timestamped'
import { Indexed, IndexedGetInstance, IndexedGetClass } from './Indexed'
import { Options } from './Options'
import { Revivable } from './Revivable'

type UserOptions = {
  wow?: string
  dam?: number
}

class User extends Revivable(Options(Timestamped(Indexed(Base)))) {
  static defaultOptions = {
    wow: 'cool',
    dam: 2,
  }

  constructor(options: UserOptions) {
    super(options)
    this.init()
  }
}

// new User({ wow: 'yeah' })
// new User({ dam: 6 })
// console.log(Reflect.ownKeys(User))
// console.log(Reflect.ownKeys(User.prototype))
// console.log(User)
