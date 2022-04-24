import {timeNewDate} from '../time/timeNewDate'
import {timeFormat} from '../time/timeFormat'
import {H_MH} from '../time/timeText'

/**
 * @description 获取日期的月头日期
 * @param {*} [dateValue]
 * @returns {String|Null}
 */
export const dateMonthHead = (dateValue: any = new Date()): string | null => {
  const theObject = timeNewDate(dateValue)
  return theObject ? timeFormat(theObject, H_MH, true) : null
}
