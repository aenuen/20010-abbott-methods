import { formatDatetime } from '../format/formatDatetime'

/**
 * @desc 验证是否dateTime格式
 * @param {*} rule
 * @param {String} validateValue
 * @param {*} callback
 * @param {String} field
 * @param {String} [action]
 */
export const validateDatetime = (
  rule: any,
  validateValue: string,
  callback: any,
  field = '未知',
  action = '填写'
) => {
  if ((!validateValue || validateValue.length === 0) && +validateValue !== 0) {
    callback(new Error(`${field}必须${action}`))
  } else {
    if (formatDatetime(validateValue)) {
      callback()
    } else {
      callback(new Error(`${field}格式不正确`))
    }
  }
}
