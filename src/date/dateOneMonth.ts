import {timeNewDate} from '../time/timeNewDate'
import {dateApart} from './dateApart'
import {dateMonthFoot} from './dateMonthFoot'
import {dateOneWeek} from './dateOneWeek'

/**
 * @description 获取日期一月的日期
 * @param {*} [dateValue]
 * @returns {Array|Null}
 */
export const dateOneMonth = (dateValue: any = new Date()): any[] | null => {
  const theObject = timeNewDate(dateValue)
  if (theObject) {
    const array = []
    const monthFoot = dateMonthFoot(dateValue)
    const oneWeek = dateOneWeek(monthFoot) as string[]
    array.push(oneWeek)
    for (let i = 0; i < 6; i++) {
      const apart = dateApart(oneWeek[0], -(i * 7 + 1))
      if (new Date(String(apart)).getMonth() + 1 !== theObject.getMonth() + 1) {
        break
      }
      const theWeek = dateOneWeek(apart)
      array.unshift(theWeek)
    }
    return array
  } else {
    return null
  }
}
