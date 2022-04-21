import { typeInt } from './typeInt'
/**
 * @description  是否intPositive类型
 * @param {*} typeValue
 * @returns {Boolean}
 */
export const typeIntPositive = (typeValue: any): boolean =>
  typeInt(typeValue) && typeValue > 0
