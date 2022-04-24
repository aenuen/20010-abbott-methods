import {somePluralize} from '../some/somePluralize'
import {H_DATETIME} from './timeText'
import {timeFormat} from './timeFormat'
import {timestamp} from './timestamp'

/**
 * @description 多少时间前（英文）
 * @param {*} timeValue
 * @param {string} [format]
 * @param {boolean} [zero] 是否加零，默认加零
 * @returns {null|string}
 */
export const timeAgoEn = (
  timeValue: any,
  format: string = H_DATETIME,
  zero: boolean = true
): string | null => {
  const theTimestamp = timestamp(timeValue) // 时间戳(10位)
  if (theTimestamp !== null) {
    const nowTimestamp = ~~(Date.now() / 1000) // 时间戳(10位)
    const diff = nowTimestamp - theTimestamp
    return diff < 60
      ? 'now'
      : diff < 3600
        ? somePluralize(~~(diff / 60), ' minute') + 'ago'
        : diff < 86400
          ? somePluralize(~~(diff / 3600), ' hour') + 'ago'
          : diff < 691200
            ? somePluralize(~~(diff / 86400), ' day') + 'ago'
            : timeFormat(time, format, zero)
  } else {
    return null
  }
}
