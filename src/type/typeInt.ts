import { typeNumber } from './typeNumber'
/**
 * @description 是否int类型
 * @param {*} typeValue
 * @returns {Boolean}
 */
export const typeInt = (typeValue: any): boolean =>
  typeNumber(typeValue) && typeValue % 1 === 0
