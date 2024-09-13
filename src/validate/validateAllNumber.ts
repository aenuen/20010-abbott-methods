import { formatAllNumber } from '../format/formatAllNumber'

/**
 * @desc 验证是否数字格式
 * @param {*} rule
 * @param {String} validateValue
 * @param {*} callback
 * @param {String} field
 * @param {String} [action]
 * @param {Number} [min]
 * @param {Number} [max]
 */
export const validateAllNumber = (rule: any, validateValue: string, callback: any, field: string, action = '填写', min: number, max: number) => {
  if ((!validateValue || validateValue.length === 0) && +validateValue !== 0) {
    callback(new Error(`${field}必须${action}`))
  } else {
    if (formatAllNumber(validateValue)) {
      if (min && max && (validateValue.length < ~~Math.abs(min) || validateValue.length > ~~Math.abs(max))) {
        callback(new Error(`${field}在${~~Math.abs(min)}-${~~Math.abs(max)}个字符之间`))
      } else {
        callback()
      }
    } else {
      callback(new Error(`${field}格式不正确`))
    }
  }
}
