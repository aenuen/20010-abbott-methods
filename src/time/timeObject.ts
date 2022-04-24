import {timeNewDate} from './timeNewDate'

/**
 * @description 获取时间对象
 * @param {*} [timeValue]
 * @returns {{s: Number, d: Number, w: Number, h: Number, y: Number, i: Number, m: Number}|Null}
 */
export const timeObject = (
  timeValue: any = new Date()
): Record<string | number | symbol, any> | null => {
  const theNewDate = timeNewDate(timeValue)
  return theNewDate !== null
    ? {
      y: theNewDate.getFullYear(),
      m: theNewDate.getMonth() + 1,
      d: theNewDate.getDate(),
      h: theNewDate.getHours(),
      i: theNewDate.getMinutes(),
      s: theNewDate.getSeconds(),
      w: theNewDate.getDay()
    }
    : null
}
