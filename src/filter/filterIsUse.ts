/**
 * @description defineIsUseAry filter
 * @param {number|string} value
 * @returns {String}
 */
export const filterIsUse = (value: number | string): string => {
  return +value === 1 ? '已启用' : '已禁用'
}
