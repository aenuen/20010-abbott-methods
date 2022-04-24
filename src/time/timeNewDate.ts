import {typeDate} from '../type/typeDate'
import {typeNumber} from '../type/typeNumber'
import {typeString} from '../type/typeString'
import {formatAllNumber} from '../format/formatAllNumber'

/**
 * @description 获取时间对象
 * @param {*} timeValue
 * @returns {Date|Null}
 */
export const timeNewDate = (timeValue: any = new Date()): Date => {
  if (timeValue) {
    let theNewDate
    if (typeDate(timeValue)) {
      theNewDate = timeValue
    } else {
      let theTime = timeValue
      if (typeString(theTime)) {
        theTime = formatAllNumber(String(theTime))
          ? theTime
          : String(theTime).replace(/[.|-]/gm, '/')
      }
      if (typeNumber(theTime) && String(theTime).length === 10) {
        theTime *= 1000
      }
      theNewDate = typeNumber(theTime) ? new Date(+theTime) : new Date(String(theTime))
    }
    return typeDate(theNewDate) ? theNewDate : null
  } else {
    return new Date()
  }
}
