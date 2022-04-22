/**
 * @description 是否 price 格式
 * @param {String} string
 * @returns {Boolean}
 */
export const formatPrice = (string: string): boolean =>
  /^\d+\.?\d{0,2}$/.test(String(string))
