/**
 * @description 是否全数字格式
 * @param {String} string
 * @returns {Boolean}
 */
export const formatAllNumber = (string: string): boolean =>
  /^[0-9]+$/.test(String(string))
