import { formatAllCn } from '../format/formatAllCn'

/**
 * @desc 验证是否全中文
 * @param {*} rule
 * @param {String} validateValue
 * @param {*} callback
 * @param {String} field
 * @param {Number} [min]
 * @param {Number} [max]
 */
export const validateAllCn = (
  rule: any,
  validateValue: string,
  callback: any,
  field = '未知',
  min = 2,
  max = 10
) => {
  if (validateValue.length === 0) {
    callback(new Error(`${field}必须填写`))
  } else {
    if (formatAllCn(validateValue)) {
      if (validateValue.length < min || validateValue.length > max) {
        callback(new Error(`${field}在${min}-${max}个字符之间`))
      } else {
        callback()
      }
    } else {
      callback(new Error(`${field}必须是全中文`))
    }
  }
}
