import {timeFormat} from '../time/timeFormat'
import {H_Y_M_D_H_I} from '../time/timeText'

/**
 * @description :2022-01-01 01:01
 * @param {*} time
 * @returns {String}
 */
export const filterDateHI = (time: any): string => {
  return timeFormat(time, H_Y_M_D_H_I) as string
}
