/**
 * @description 是否date类型
 * @param {*} typeValue
 * @returns {Boolean}
 */
export const typeDate = (typeValue: any) => typeValue instanceof Date && !isNaN(typeValue.getTime())
