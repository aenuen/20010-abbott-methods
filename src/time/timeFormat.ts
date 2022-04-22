import {H_DATETIME} from './timeText'
import {timeObject} from './timeObject'

/**
 * @description 时间格式化
 * @param {*} [timeValue]
 * @param {String} [format] 格式
 * @param {Boolean} [zero] 是否加零，默认加零
 * @returns {Null|String}
 */
export const timeFormat = (
  timeValue: any,
  format: string,
  zero?: boolean
): string | null => {
  const theObject = timeValue ? timeObject(timeValue) : timeObject(new Date())
  if (theObject !== null) {
    format = format || H_DATETIME
    zero = zero || true
    return format.replace(/{([ymdhisw])+}/g, (result, key) => {
      const timeValue = theObject[key]
      return key === 'w'
        ? ['日', '一', '二', '三', '四', '五', '六'][timeValue]
        : zero
          ? String(timeValue).padStart(2, '0')
          : String(timeValue)
    })
  } else {
    return null
  }
}
