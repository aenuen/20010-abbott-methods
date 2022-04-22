import { timeObject } from './timeObject'

/**
 * @description 时间的周几
 * @param {*} [timeValue]
 * @returns {String|Null}
 */
export const timeGetWeek = (timeValue: any): number | null => {
  const theTimeValue = timeValue || new timeValue()
  const theObject = timeObject(theTimeValue)
  return theObject ? theObject?.w : null
}
