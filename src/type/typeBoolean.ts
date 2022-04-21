/**
 * @description 是否boolean类型
 * @param {*} typeValue
 * @returns {Boolean}
 */
export const typeBoolean = (typeValue: any) =>
  Object.prototype.toString.call(typeValue).toLowerCase() === '[object boolean]'
