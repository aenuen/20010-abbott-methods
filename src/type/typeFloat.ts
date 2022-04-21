import { typeNumber } from './typeNumber'
/**
 * @description 是否float类型
 * @param {*} typeValue
 * @returns {Boolean}
 */
export const typeFloat = (typeValue: any): boolean =>
  typeNumber(typeValue) && typeValue % 1 !== 0
