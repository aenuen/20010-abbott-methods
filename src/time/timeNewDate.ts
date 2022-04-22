import { typeDate } from '../type/typeDate'
import { typeNumber } from '../type/typeNumber'
import { typeString } from '../type/typeString'
import { formatAllNumber } from '../format/formatAllNumber'

/**
 * @description 获取时间对象
 * @param {*} timeValue
 * @returns {Date|Null}
 */
export const timeNewDate = (timeValue: any): Date => {
  let theTimeValue = timeValue
  if (theTimeValue) {
    let theNewDate
    if (typeDate(theTimeValue)) {
      theNewDate = theTimeValue
    } else {
      if (typeString(theTimeValue)) {
        theTimeValue = formatAllNumber(String(theTimeValue))
          ? theTimeValue
          : String(theTimeValue).replace(/[.|-]/gm, '/')
      }
      if (typeNumber(theTimeValue) && String(theTimeValue).length === 10) {
        theTimeValue *= 1000
      }
      theNewDate = typeNumber(theTimeValue) ? new Date(+theTimeValue) : new Date(String(theTimeValue))
    }
    return typeDate(theNewDate) ? theNewDate : null
  } else {
    return new Date()
  }
}
