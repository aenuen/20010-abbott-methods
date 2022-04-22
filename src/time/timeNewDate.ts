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
  if (timeValue) {
    let theNewDate
    if (typeDate(timeValue)) {
      theNewDate = timeValue
    } else {
      if (typeString(timeValue)) {
        timeValue = formatAllNumber(String(timeValue))
          ? timeValue
          : String(timeValue).replace(/[.|-]/gm, '/')
      }
      if (typeNumber(timeValue) && String(timeValue).length === 10) {
        timeValue *= 1000
      }
      theNewDate = typeNumber(timeValue) ? new Date(+timeValue) : new Date(String(timeValue))
    }
    return typeDate(theNewDate) ? theNewDate : null
  } else {
    return new Date()
  }
}
