import { typeEmpty } from '../type/typeEmpty'
/**
 * @desc 验证是否已填
 * @param {*} rule
 * @param {String} validateValue
 * @param {*} callback
 * @param {String} field
 * @param {String} [action]
 * @param {Number} [min]
 * @param {Number} [max]
 */
export const validateRequire = (rule: any, validateValue: string, callback: any, field: string, action = '填写', min: number, max: number) => {
  if (typeEmpty(validateValue)) {
    callback(new Error(`${field}必须${action}`))
  } else {
    if (min && max && (validateValue.length < ~~Math.abs(min) || validateValue.length > ~~Math.abs(max))) {
      callback(new Error(`${field}在${~~Math.abs(min)}-${~~Math.abs(max)}个字符之间`))
    } else {
      callback()
    }
  }
}
