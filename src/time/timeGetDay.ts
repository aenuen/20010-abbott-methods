import { timeObject } from './timeObject'

/**
 * @description 时间的日份
 * @param {*} [timeValue]
 * @returns {String|Null}
 */
export const timeGetDay = (timeValue: any): string | null => {
  timeValue = timeValue || new timeValue()
  const theObject = timeObject(timeValue)
  return theObject ? String(theObject.d).padStart(2, '0') : null
}
