import {timeFormat} from '../time/timeFormat'
import {H_DATE} from '../time/timeText'
/**
 * @description :2022-01-01
 * @param {*} time
 * @returns {String}
 */
export const filterDate = (time: any): string => {
  return timeFormat(time, H_DATE) as string
}
