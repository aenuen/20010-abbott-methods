import { formatMobile } from '../format/formatMobile'
import { typeEmpty } from '../type/typeEmpty'
/**
 * @desc 验证是否手机号码格式
 * @param {*} rule
 * @param {String} validateValue
 * @param {*} callback
 * @param {String} field
 * @param {String} action
 */
export const validateMobile = (rule: any, validateValue: string, callback: any, field: string = '手机号码', action = '填写') => {
  field = field || '手机号码'
  const number = 11
  if (typeEmpty(validateValue)) {
    action = action || '填写'
    callback(new Error(`${field}必须${action}`))
  } else {
    if (formatMobile(validateValue)) {
      if (validateValue.length !== number) {
        callback(new Error(`${field}为${number}个字符`))
      } else {
        callback()
      }
    } else {
      callback(new Error(`请${action}正确的${field}`))
    }
  }
}
