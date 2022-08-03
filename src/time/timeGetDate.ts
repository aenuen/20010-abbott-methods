import { timeFormat } from './timeFormat'
import { H_DATE } from './timeText'

/**
 * @description 时间的日期
 * @param {*} [timeValue]
 * @returns {String|Null}
 */
export const timeGetDate = (timeValue: any = new Date()): string | null => {
  const theTime = timeValue || new Date()
  return timeFormat(theTime, H_DATE)
}
