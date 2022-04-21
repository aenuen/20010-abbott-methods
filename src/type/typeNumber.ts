/**
 * @description 是否number类型
 * @param {*} typeValue
 * @returns {Boolean}
 */
export const typeNumber = (typeValue: any): boolean =>
  typeof typeValue === 'number' || (!isNaN(typeValue) && typeof typeValue === 'string')
