import { timeObject } from './timeObject'

/**
 * @description 时间的周几
 * @param {*} [timeValue]
 * @returns {String|Null}
 */
export const timeGetWeek = (timeValue: any): number | null => {
  timeValue = timeValue || new timeValue()
  const theObject = timeObject(timeValue)
  return theObject ? theObject?.w : null
}
