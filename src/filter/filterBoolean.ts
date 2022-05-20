/**
 * @description defineBooleanAry filter
 * @param {number|string} value
 * @returns {String}
 */
export const filterBoolean = (value: number | string): string => {
  return +value === 1 ? '是' : '否'
}
