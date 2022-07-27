import { H_H_I, H_M_D_H_I, H_Y_M_D_H_I } from './timeText'
import { timeFormat } from './timeFormat'
import { timeDifference } from './timeDifference'
import { timeObject } from './timeObject'

/**
 * @description 短时间
 * @param {*} timeValue
 * @returns {Null|String}
 */
export const timeShort = (timeValue: any = new Date()) => {
  const theObject = timeValue ? timeObject(timeValue) : timeObject(new Date())
  if (theObject !== null) {
    const nowObject = timeObject(new Date())
    const dateOne = `${theObject?.y}-${theObject?.m}-${theObject?.d}`
    const dateTwo = `${nowObject?.y}-${nowObject?.m}-${nowObject?.d}`
    const diff = +(timeDifference(dateOne, dateTwo, false) as number)
    const oneDaySeconds = 86400 // 一天秒数
    return diff === oneDaySeconds * 2
      ? '后天 ' + timeFormat(timeValue, H_H_I, true)
      : diff === oneDaySeconds
      ? '明天 ' + timeFormat(timeValue, H_H_I, true)
      : diff === 0
      ? timeFormat(timeValue, H_H_I, true)
      : diff === -oneDaySeconds
      ? '昨天 ' + timeFormat(timeValue, H_H_I, true)
      : diff === -oneDaySeconds * 2
      ? '前天 ' + timeFormat(timeValue, H_H_I, true)
      : theObject.y === nowObject?.y
      ? timeFormat(timeValue, H_M_D_H_I, true)
      : timeFormat(timeValue, H_Y_M_D_H_I, true)
  } else {
    return null
  }
}
