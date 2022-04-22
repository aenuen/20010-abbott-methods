/**
 * @description 是否 idCard 格式
 * @param {String} string
 * @returns {Boolean}
 */
export const formatIdCard = (string: string): boolean =>
  /^[1-9](\d{14}|\d{16}[0-9x])$/i.test(String(string))
