/**
 * @description 字符串中是否含有指定的字符（串）
 * @param {String} string
 * @param {String} haveAssign
 * @returns {Boolean}
 */
export const haveAssign = (string: string, haveAssign: string): boolean => {
  return String(string).indexOf(String(haveAssign)) >= 0
}

