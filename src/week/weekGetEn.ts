import {timeObject} from '../time/timeObject'
import {timeGetWeek} from '../time/timeGetWeek'
import {weekAryEn} from './weekAryEn'

/**
 * @description 根据时间计算周几的英文
 * @param {*} timeValue 时间
 * @returns {Null|String}
 */
export const weekGetEn = (timeValue: any = new Date()) => {
  const theObject = timeObject(timeValue)
  if (theObject !== null) {
    const number = timeGetWeek(timeValue)
    if (number !== null && number < weekAryEn.length && number >= 0) {
      return weekAryEn[number]
    } else {
      return null
    }
  } else {
    return null
  }
}
