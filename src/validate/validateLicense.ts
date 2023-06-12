import { formatLicense } from '../format/formatLicense'

/**
 * @desc 验证是否dateTime格式
 * @param {*} rule
 * @param {String} validateValue
 * @param {*} callback
 * @param {String} field
 * @param {String} [action]
 */
export const validateLicense = (
  rule: any,
  validateValue: string,
  callback: any,
  action = '填写'
) => {
  const field = '统一信用代码'
  if ((!validateValue || validateValue.length === 0) && +validateValue !== 0) {
    callback(new Error(`${field}必须${action}`))
  } else {
    if (formatLicense(validateValue)) {
      callback()
    } else {
      callback(new Error(`${field}格式不正确`))
    }
  }
}
