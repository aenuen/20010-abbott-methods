import { formatEmail } from '../format/formatEmail'
import { typeEmpty } from '../type/typeEmpty'

/**
 * @desc 验证是否电子邮箱格式
 * @param {*} rule
 * @param {String} validateValue
 * @param {*} callback
 * @param {String} field
 * @param {String} [action]
 */
export const validateEmail = (rule: any, validateValue: string, callback: any, field = '电子邮箱', action = '填写') => {
  if (typeEmpty(validateValue)) {
    action = action || '填写'
    callback(new Error(`${field}必须${action}`))
  } else {
    if (formatEmail(validateValue)) {
      callback()
    } else {
      callback(new Error(`请填写正确的${field}`))
    }
  }
}
