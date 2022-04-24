import {timeObject} from '../time/timeObject'

/**
 * @description 获取日期的月尾日期
 * @param {*} [dateValue]
 * @returns {String|Null}
 */
export const dateMonthFoot = (dateValue: any = new Date()): string | null => {
  const theObject = timeObject(dateValue)
  if (theObject !== null) {
    const year = String(theObject.y).padStart(4, '0')
    const month = String(theObject.m).padStart(2, '0')
    const day = new Date(+year, +month, 0).getDate()
    return `${year}-${month}-${day}`
  } else {
    return null
  }
}
