import { typeFunction } from './typeFunction'
import { typeRegexp } from './typeRegexp'
/**
 * @description 是否empty类型
 * @param {*} typeValue
 * @returns {Boolean}
 */
export const typeEmpty = (typeValue: any): boolean =>
  !typeFunction(typeValue) &&
  !typeRegexp(typeValue) &&
  (typeValue == null ||
    typeValue === 'undefined' ||
    typeValue.length === 0 ||
    JSON.stringify(typeValue) === '{}')
