import { formatUsername } from '../format/formatUsername'
import { typeEmpty } from '../type/typeEmpty'
/**
 * @desc 验证是否用户名格式
 * @param {*} rule
 * @param {String} validateValue
 * @param {*} callback
 * @param {String} field
 * @param {String} [action]
 * @param {Number} [min]
 * @param {Number} [max]
 */
export const validateUsername = (rule: any, validateValue: string, callback: any, field: string = '用户名', action: string = '填写', min: number, max: number) => {
  if (typeEmpty(validateValue)) {
    action = action || '填写'
    callback(new Error(`${field}必须${action}`))
    if (formatUsername(validateValue)) {
      if (min && max && (validateValue.length < ~~Math.abs(min) || validateValue.length > ~~Math.abs(max))) {
        callback(new Error(`${field}在${~~Math.abs(min)}-${~~Math.abs(max)}个字符之间`))
      } else {
        callback()
      }
    } else {
      callback(new Error(`${field}必须是以字母为开头，由字母、数字、减号、点、下划线组成`))
    }
  }
}
