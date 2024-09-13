import { formatEmail } from '../format/formatEmail'

/**
 * @desc 验证是否电子邮箱格式
 * @param {*} rule
 * @param {String} validateValue
 * @param {*} callback
 * @param {String} field
 * @param {String} [action]
 */
export const validateEmail = (rule: any, validateValue: string, callback: any, field = '电子邮箱', action = '填写') => {
  if ((!validateValue || validateValue.length === 0) && +validateValue !== 0) {
    callback(new Error(`${field}必须${action}`))
  } else {
    if (formatEmail(validateValue)) {
      callback()
    } else {
      callback(new Error(`请填写正确的${field}`))
    }
  }
}
