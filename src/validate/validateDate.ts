import { formatDate } from '../format/formatDate'
import { typeEmpty } from '../type/typeEmpty'
/**
 * @desc 验证是否date格式
 * @param {*} rule
 * @param {String} validateValue
 * @param {*} callback
 * @param {String} field
 * @param {String} [action]
 */
export const validateDate = (rule: any, validateValue: string, callback: any, field = '日期', action = '填写') => {
  if (typeEmpty(validateValue)) {
    action = action || '填写'
    callback(new Error(`${field}必须${action}`))
  } else {
    if (formatDate(validateValue)) {
      callback()
    } else {
      callback(new Error(`${field}格式不正确`))
    }
  }
}
