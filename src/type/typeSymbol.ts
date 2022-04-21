/**
 * @description 是否symbol类型
 * @param {*} typeValue
 * @returns {Boolean}
 */
export const typeSymbol = (typeValue: any): boolean =>
  Object.prototype.toString.call(typeValue).toLowerCase() === '[object symbol]'
