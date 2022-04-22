/**
 * @description 是否 telephone 格式
 * @param {String} string
 * @returns {Boolean}
 */
export const formatTelephone = (string: string): boolean =>
  /^[0-9-()]{5,18}$/.test(String(string))
