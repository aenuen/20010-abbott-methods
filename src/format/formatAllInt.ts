import { typeInt } from '../type/typeInt'
/**
 * @description 是否全整数格式
 * @param {String} string
 * @returns {Boolean}
 */
export const formatAllInt = (string: string): boolean => typeInt(string)
