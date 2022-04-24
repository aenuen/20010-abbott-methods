import {timeObject} from './timeObject'

/**
 * @description 时间的日份
 * @param {*} [timeValue]
 * @returns {String|Null}
 */
export const timeGetDay = (timeValue: any = new Date()): string | null => {
  const theTime = timeValue || new Date()
  const theObject = timeObject(theTime)
  return theObject !== null ? String(theObject.d).padStart(2, '0') : null
}
