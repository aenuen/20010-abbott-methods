import { formatEmail } from '../format/formatEmail'

/**
 * @desc 验证是否电子邮箱格式
 * @param {*} rule
 * @param {String} validateValue
 * @param {*} callback
 * @param {Number} [min]
 * @param {Number} [max]
 */
export const validateEmail = (
  rule: any,
  validateValue: string,
  callback: any,
  min = 5,
  max = 30
) => {
  const field = '电子邮箱'
  if (validateValue.length === 0) {
    callback(new Error(`${field}必须填写`))
  } else {
    if (formatEmail(validateValue)) {
      if (validateValue.length <= min || validateValue.length >= max) {
        callback(new Error(`${field}在${min}-${max}个字符之间`))
      } else {
        callback()
      }
    } else {
      callback(new Error(`请填写正确的${field}`))
    }
  }
}
