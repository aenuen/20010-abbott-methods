import { typeNumber } from './typeNumber'

/**
 * @description 是否string类型
 * @param {*} typeValue
 * @returns {Boolean}
 */
export const typeString = (typeValue: any): boolean =>
  Object.prototype.toString.call(typeValue).toLowerCase() === '[object string]' ||
  typeNumber(typeValue)
