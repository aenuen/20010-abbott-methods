import { typeInt } from './typeInt'
/**
 * @description 是否intMinus类型
 * @param {*} typeValue
 * @returns {Boolean}
 */
export const typeIntMinus = (typeValue: any): boolean => typeInt(typeValue) && typeValue < 0
