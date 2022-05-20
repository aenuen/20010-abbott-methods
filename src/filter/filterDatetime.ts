import {timeFormat} from '../time/timeFormat'
import {H_DATETIME} from '../time/timeText'

/**
 * @description :2022-01-01 01:01:01
 * @param {*} time
 * @returns {String}
 */
export const filterDatetime = (time: any) => {
  return timeFormat(time, H_DATETIME) as string
}
