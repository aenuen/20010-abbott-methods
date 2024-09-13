/**
 * @description 是否全数字格式
 * @param {String} string
 * @returns {Boolean}
 */
export const formatAllNumber = (string: string): boolean => /^-?\d+(\.\d+)?$/.test(String(string))
