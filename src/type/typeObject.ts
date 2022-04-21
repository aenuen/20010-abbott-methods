/**
 * @description 是否object类型
 * @param {*} typeValue
 * @returns {Boolean}
 */
export const typeObject = (typeValue: any): boolean =>
  Object.prototype.toString.call(typeValue).toLowerCase() === '[object object]'
