import {H_DATETIME} from './timeText'
import {timeFormat} from './timeFormat'
import {timestamp} from './timestamp'

/**
 * @description 多少时间前（中文）
 * @param {*} timeValue
 * @param {string} [format]
 * @param {boolean} [zero] 是否加零，默认加零
 * @returns {null|string}
 */
export const timeAgoCn = (
  timeValue: any,
  format: string = H_DATETIME,
  zero: boolean = true
): string | null => {
  const theTimestamp = timestamp(timeValue) // 时间戳(10位)
  if (theTimestamp !== null) {
    const nowTimestamp = ~~(Date.now() / 1000) // 时间戳(10位)
    const diff = nowTimestamp - theTimestamp
    return diff < 60
      ? '刚刚'
      : diff < 3600
        ? ~~(diff / 60) + '分钟前'
        : diff < 86400
          ? ~~(diff / 3600) + '小时前'
          : diff < 691200
            ? ~~(diff / 86400) + '天前'
            : timeFormat(timeValue, format, zero)
  } else {
    return null
  }
}
