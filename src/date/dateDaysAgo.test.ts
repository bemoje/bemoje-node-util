import { dateDaysAgo } from './dateDaysAgo'

describe('dateDaysAgo', () => {
  it('should return a date that is the given number of days ago', () => {
    const today = new Date()
    const yesterday = dateDaysAgo(1)
    expect(yesterday.getDate()).toBe(today.getDate() - 1)
  })

  it('should return a Date object', () => {
    expect(dateDaysAgo(5)).toBeInstanceOf(Date)
  })

  it('should return a date that is the specified number of days in the past', () => {
    const daysAgo = 5
    const date = dateDaysAgo(daysAgo)
    const now = new Date()

    expect(now.getDate() - date.getDate()).toEqual(daysAgo)
  })

  it('should handle 0 days ago correctly', () => {
    const date = dateDaysAgo(0)
    const now = new Date()

    expect(now.getDate()).toEqual(date.getDate())
  })

  it('should handle negative numbers by returning a date in the future', () => {
    const daysAgo = -5
    const date = dateDaysAgo(daysAgo)
    const now = new Date()

    expect(date.getDate() - now.getDate()).toEqual(Math.abs(daysAgo))
  })
})
