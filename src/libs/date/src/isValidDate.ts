export function isValidDate(
  year?: number | string,
  month?: number | string,
  day?: number | string,
  hour?: number | string,
  minute?: number | string,
  second?: number | string,
  millisecond?: number | string,
): boolean {
  year = year ? Number(year) : 0
  month = month ? Number(month) : 0
  day = day ? Number(day) : 0
  hour = hour ? Number(hour) : 0
  minute = minute ? Number(minute) : 0
  second = second ? Number(second) : 0
  millisecond = millisecond ? Number(millisecond) : 0
  const d = new Date(year, month - 1, day, hour, minute, second, millisecond)
  return (
    d.getFullYear() === year &&
    d.getMonth() + 1 === month &&
    d.getDate() === day &&
    d.getHours() === hour &&
    d.getMinutes() === minute &&
    d.getSeconds() === second &&
    d.getMilliseconds() === millisecond
  )
}

// import date from 'date-and-time'

// export function isValidDate(
//   year?: number | string,
//   month?: number | string,
//   day?: number | string,
//   hour?: number | string,
//   minute?: number | string,
//   second?: number | string,
//   millisecond?: number | string,
// ): boolean {
//   let str = ''
//   let format = ''
//   if (year !== undefined) {
//     format += 'YYYY'
//     str += `${year.toString().padStart(4, '0')}`
//   }
//   if (month !== undefined) {
//     format += '-MM'
//     str += `-${month.toString().padStart(2, '0')}`
//   }
//   if (day !== undefined) {
//     format += '-DD'
//     str += `-${day.toString().padStart(2, '0')}`
//   }
//   if (hour !== undefined) {
//     format += ' HH'
//     str += ` ${hour.toString().padStart(2, '0')}`
//   }
//   if (minute !== undefined) {
//     format += ':mm'
//     str += `:${minute.toString().padStart(2, '0')}`
//   }
//   if (second !== undefined) {
//     format += ':ss'
//     str += `:${second.toString().padStart(2, '0')}`
//   }
//   if (millisecond !== undefined) {
//     format += ':SSS'
//     str += `:${millisecond.toString().padStart(3, '0')}`
//   }
//   return date.isValid(str, format)
// }
