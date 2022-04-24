import {timeNewDate} from '../time/timeNewDate'
import {dateApart} from './dateApart'

/**
 * @description 日期的周日日期
 * @param {*} [dateValue]
 * @returns {String|Null}
 */
export const dateWeekSunday = (dateValue: any = new Date()): string | null => {
  const theNewDate = timeNewDate(dateValue)
  if (theNewDate !== null) {
    const week = theNewDate.getDay()
    const ary = [0, -1, -2, -3, -4, -5, -6]
    return dateApart(theNewDate, ary[week])
  } else {
    return null
  }
}
