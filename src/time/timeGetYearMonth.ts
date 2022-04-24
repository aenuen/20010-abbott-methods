import {timeObject} from './timeObject'

/**
 * @description 时间的年份
 * @param {*} [timeValue]
 * @param {boolean} isArray
 * @returns {string|null|string[]}
 */
export const timeGetYearMonth = (timeValue: any = new Date(), isArray: boolean = false): null | any[] | string => {
  const theTime = timeValue || new timeValue()
  const theObject = timeObject(theTime)
  return theObject == null ?
    null : isArray ?
      [theObject.y, theObject.m] : `${String(theObject.y).padStart(4, '0')}-${String(theObject.m).padStart(2, '0')}`
}
