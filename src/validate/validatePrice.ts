import { formatPrice } from '../format/formatPrice'

/**
 * @desc 验证是否价格格式
 * @param {*} rule
 * @param {String} validateValue
 * @param {*} callback
 * @param {String} field
 * @param {String} [action]
 * @param {Number} [min]
 * @param {Number} [max]
 */
export const validatePrice = (
  rule: any,
  validateValue: string,
  callback: any,
  field = '价格',
  action = '填写',
  min = 1,
  max = 10
) => {
  if (!validateValue || validateValue.length === 0) {
    callback(new Error(`${field}必须${action}`))
  } else {
    if (formatPrice(validateValue)) {
      if (validateValue.length < ~~Math.abs(min) || validateValue.length > ~~Math.abs(max)) {
        callback(
          new Error(`${field}在${~~Math.abs(min)}-${~~Math.abs(max)}个字符之间`)
        )
      } else {
        callback()
      }
    } else {
      callback(new Error(`${field}只能是数字（最多2位小数）`))
    }
  }
}
