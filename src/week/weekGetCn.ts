import {timeObject} from '../time/timeObject'
import {timeGetWeek} from '../time/timeGetWeek'
import {weekAryCn} from './weekAryCn'

/**
 * @description 根据时间计算周几的中文
 * @param {*} timeValue 时间
 * @param {boolean} [isWeek] 是否使用周
 * @returns {Null|String}
 */
export const weekGetCn = (timeValue: any = new Date(), isWeek = false) => {
  const theObject = timeObject(timeValue)
  if (theObject !== null) {
    const number = timeGetWeek(timeValue)
    if (number !== null && number < weekAryCn.length && number >= 0) {
      const week = isWeek ? '周' : '星期'
      return `${week}${weekAryCn[number]}`
    } else {
      return null
    }
  } else {
    return null
  }
}
