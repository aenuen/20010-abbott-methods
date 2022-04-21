/**
 * @description 是否array类型
 * @param {*} typeValue
 * @returns {Boolean}
 */
export const typeArray = (typeValue: any) =>
  Object.prototype.toString.call(typeValue).toLowerCase() === '[object array]'
