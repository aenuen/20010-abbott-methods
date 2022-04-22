import { timeObject } from './timeObject'

/**
 * @description 时间的年份
 * @param {*} [timeValue]
 * @returns {String|Null}
 */
export const timeGetYear = (timeValue: any): string | null => {
  const theTimeValue = timeValue || new timeValue()
  const theObject = timeObject(theTimeValue)
  return theObject ? String(theObject.y).padStart(4, '0') : null
}
