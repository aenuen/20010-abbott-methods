import { formatIdCard } from '../format/formatIdCard'
import { typeEmpty } from '../type/typeEmpty'
/**
 * @desc 验证是否身份证号码格式
 * @param {*} rule
 * @param {String} validateValue
 * @param {*} callback
 * @param {String} field
 * @param {String} action
 */
export const validateIdCard = (rule: any, validateValue: string, callback: any, field = '身份证号码', action = '填写') => {
  const number = 18
  if (typeEmpty(validateValue)) {
    callback(new Error(`${field}必须${action}`))
  } else {
    if (formatIdCard(validateValue)) {
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
