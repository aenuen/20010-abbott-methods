import {timeNewDate} from '../time/timeNewDate'
import {dateApart} from './dateApart'
import {dateWeekSunday} from './dateWeekSunday'

/**
 * @description 获取日期一周的日期
 * @param {*} [dateValue]
 * @returns {Array|Null}
 */
export const dateOneWeek = (dateValue: any = new Date()): string[] | null => {
  const theObject = timeNewDate(dateValue)
  if (theObject !== null) {
    const array = []
    const sunday = dateWeekSunday(dateValue)
    for (let i = 0; i < 7; i++) {
      const apart = dateApart(sunday, i) as string
      array.push(apart)
    }
    return array
  } else {
    return null
  }
}
