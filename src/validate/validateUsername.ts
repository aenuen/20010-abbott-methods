import { formatUsername } from '../format/formatUsername'

/**
 * @desc 验证是否用户名格式
 * @param {*} rule
 * @param {String} validateValue
 * @param {*} callback
 * @param {Number} [min]
 * @param {Number} [max]
 */
export const validateUsername = (rule: any, validateValue: string, callback: any, min: number, max: number) => {
  const field = '用户名'
  if ((!validateValue || validateValue.length === 0) && +validateValue !== 0) {
    callback(new Error(`${field}必须填写`))
  } else {
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
