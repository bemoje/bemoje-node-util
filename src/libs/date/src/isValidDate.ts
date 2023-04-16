import date from 'date-and-time'

export function isValidDate(
  year?: number | string,
  month?: number | string,
  day?: number | string,
  hour?: number | string,
  minute?: number | string,
  second?: number | string,
  millisecond?: number | string,
): boolean {
  let str = ''
  let format = ''
  if (year !== undefined) {
    format += 'YYYY'
    str += `${year.toString().padStart(4, '0')}`
  }
  if (month !== undefined) {
    format += '-MM'
    str += `-${month.toString().padStart(2, '0')}`
  }
  if (day !== undefined) {
    format += '-DD'
    str += `-${day.toString().padStart(2, '0')}`
  }
  if (hour !== undefined) {
    format += ' HH'
    str += ` ${hour.toString().padStart(2, '0')}`
  }
  if (minute !== undefined) {
    format += ':mm'
    str += `:${minute.toString().padStart(2, '0')}`
  }
  if (second !== undefined) {
    format += ':ss'
    str += `:${second.toString().padStart(2, '0')}`
  }
  if (millisecond !== undefined) {
    format += ':SSS'
    str += `:${millisecond.toString().padStart(3, '0')}`
  }
  return date.isValid(str, format)
}
