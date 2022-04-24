import {timeObject} from './timeObject'

/**
 * @description 时间的周几
 * @param {*} [timeValue]
 * @returns {String|Null}
 */
export const timeGetWeek = (timeValue: any = new Date()): number | null => {
  const theTime = timeValue || new timeValue()
  const theObject = timeObject(theTime)
  return theObject !== null ? theObject?.w : null
}
