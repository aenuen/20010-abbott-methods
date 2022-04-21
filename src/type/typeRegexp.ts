/**
 * @description 是否regexp类型
 * @param {*} typeValue
 * @returns {Boolean}
 */
export const typeRegexp = (typeValue: any): boolean =>
  Object.prototype.toString.call(typeValue).toLowerCase() === '[object regexp]'
