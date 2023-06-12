import { formatIdCard } from '../format/formatIdCard'
/**
 * @desc 验证是否身份证号码格式
 * @param {*} rule
 * @param {String} validateValue
 * @param {*} callback
 * @param {String} action
 */
export const validateIdCard = (
  rule: any,
  validateValue: string,
  callback: any,
  action = '填写'
) => {
  const field = '身份证号码'
  const number = 18
  if ((!validateValue || validateValue.length === 0) && +validateValue !== 0) {
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
