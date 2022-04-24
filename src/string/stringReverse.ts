/**
 * @description 字符串反序
 * @param {Number|String} string
 * @returns {String}
 */
export const stringReverse = (string: string): string => {
  return String(string).split('').reverse().join('')
}

