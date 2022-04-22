import { timeObject } from './timeObject'

/**
 * @description 时间的月份
 * @param {*} [timeValue]
 * @returns {String|Null}
 */
export const timeGetMonth = (timeValue: any): string | null => {
  timeValue = timeValue || new timeValue()
  const theObject = timeObject(timeValue)
  return theObject ? String(theObject.m).padStart(2, '0') : null
}
