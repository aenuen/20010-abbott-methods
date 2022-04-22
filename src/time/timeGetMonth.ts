import { timeObject } from './timeObject'

/**
 * @description 时间的月份
 * @param {*} [timeValue]
 * @returns {String|Null}
 */
export const timeGetMonth = (timeValue: any): string | null => {
  const theTimeValue = timeValue || new timeValue()
  const theObject = timeObject(theTimeValue)
  return theObject ? String(theObject.m).padStart(2, '0') : null
}