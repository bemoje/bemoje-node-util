import { Readable } from 'stream'

/**
 * Extension of Node's native Readable class for converting a string into a Readable stream.
 */
export class StringStream extends Readable {
  private str: string
  private ended: boolean

  constructor(str: string) {
    super()
    this.str = str
    this.ended = false
  }

  _read(): void {
    if (!this.ended) {
      process.nextTick(() => {
        this.push(Buffer.from(this.str))
        this.push(null)
      })
      this.ended = true
    }
  }
}
