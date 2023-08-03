import { arrLast } from '../../../src/array/arrLast'
import { dateWeekDayName } from '../../../src/date/dateWeekDayName'
import { prettyIsoDateString } from '../../../src/date/prettyIsoDateString'
import { round } from '../../../src/number/round'
import { roundUp } from '../../../src/number/roundUp'
import { setNonEnumerable } from '../../../src/object/setNonEnumerable'
import { FBMessage } from './FBMessage'
import { FBThread } from './FBThread'

function dateToTime(date: Date) {
  return date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0')
}

export class FBConversation {
  thread: FBThread
  messages: FBMessage[]
  constructor(thread: FBThread, messages: FBMessage[]) {
    this.thread = thread
    this.messages = messages
    setNonEnumerable(this, 'thread')
    if (this.messages.length === 0) {
      console.error(this)
      throw new Error('No messages in conversation')
    }
  }
  get end(): Date {
    return new Date(arrLast(this.messages).time)
  }
  get start(): Date {
    return new Date(this.messages[0].time)
  }
  get durationMinutes() {
    return round((this.end.getTime() - this.start.getTime()) / 1000 / 60, 0)
  }
  toHumanReadable() {
    const result = {
      start: this.start,
      messages: this.toMarkdown(),
    }
    return result
  }

  protected toMarkdown() {
    return [
      `# Conversation\n\n### Present\n${this.thread.participantsNames().join('\n')}`,
      [
        '### Time',
        `Start: ${prettyIsoDateString(this.start.toISOString(), '_', 'day')} (${dateWeekDayName(this.start)})`,
        `End: ${prettyIsoDateString(this.end.toISOString(), '_', 'day')} (${dateWeekDayName(this.end)})`,
        `Duration: ${roundUp(this.durationMinutes / 60, 1)} hours`,
        `Messages: ${this.messages.length}`,
      ].join('\n'),
      '\n## Messages',
      this.mergeMessages().join('\n\n'),
    ].join('\n\n')
  }

  protected mergeMessages() {
    const merged: string[] = []
    let accum: FBMessage[] = [this.messages[0]]
    const merge = () => {
      const time = dateToTime(new Date(accum[0].time))
      const name = accum[0].sender.firstName
      const text = accum.map((m) => m.content).join('\n')
      merged.push('#### ' + time + ' ' + name + '\n' + text)
      accum = []
    }
    const isMoreThan15minApart = (m1: FBMessage, m2: FBMessage) => {
      return Math.abs(m1.time - m2.time) > 1000 * 60 * 15
    }
    for (const message of this.messages.slice(1)) {
      if (accum[0].sender !== message.sender || isMoreThan15minApart(accum[0], message)) {
        merge()
      }
      accum.push(message)
    }
    merge()
    return merged
  }
}
