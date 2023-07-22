import { IQueueAddOptions } from '../../async/types/IQueueAddOptions'

export interface IPriorityQueueOptions extends IQueueAddOptions {
  priority?: number
}
