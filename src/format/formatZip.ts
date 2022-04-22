/**
 * @description 是否 zip 格式
 * @param {String} string
 * @returns {Boolean}
 */
export const formatZip = (string: string): boolean =>
  /^\d{6}$/.test(String(string))
