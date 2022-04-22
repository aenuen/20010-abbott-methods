import { formatDate } from './formatDate'

/**
 * @description 是否 dateTime 格式
 * @param {String} string
 * @returns {Boolean}
 */
export const formatDatetime = (string: string) => {
  if (/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/.test(String(string))) {
    const [date, time] = string.split(' ')
    const [h, m, s] = time.split('-')
    return formatDate(date) && +h < 24 && +m < 60 && +s < 60
  } else {
    return false
  }
}
