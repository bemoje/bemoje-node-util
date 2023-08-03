import { Time } from '../../time/Time'
import { TimeInterval } from '../../time/TimeInterval'
import { _AbstractSubtitle } from './_AbstractSubtitle'

describe(_AbstractSubtitle.name, () => {
  it('should be extensible and provide the expected properties', () => {
    class Subtitle extends _AbstractSubtitle {}
    const subtitle = new Subtitle(new TimeInterval(new Time(1254), new Time(15254)), 'text')
    expect(subtitle).toBeInstanceOf(_AbstractSubtitle)
    expect(subtitle).toBeInstanceOf(Subtitle)
    expect(subtitle.interval).toBeInstanceOf(TimeInterval)
    expect(subtitle.text).toBe('text')
  })
})
