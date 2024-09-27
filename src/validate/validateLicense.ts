import { formatLicense } from '../format/formatLicense'
import { typeEmpty } from '../type/typeEmpty'

/**
 * @desc 验证是否营业执照格式
 * @param {*} rule
 * @param {String} validateValue
 * @param {*} callback
 * @param {String} field
 * @param {String} [action]
 */
export const validateLicense = (rule: any, validateValue: string, callback: any, field = '统一信用代码', action = '填写') => {
  if (typeEmpty(validateValue)) {
    callback(new Error(`${field}必须${action}`))
  } else {
    if (formatLicense(validateValue)) {
      callback()
    } else {
      callback(new Error(`${field}格式不正确`))
    }
  }
}
