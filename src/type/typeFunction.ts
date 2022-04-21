/**
 * @description 是否function类型
 * @param {*} typeValue
 * @returns {Boolean}
 */
export const typeFunction = (typeValue: unknown): boolean =>
  Object.prototype.toString.call(typeValue).toLowerCase() === '[object function]'
