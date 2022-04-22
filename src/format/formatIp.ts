/**
 * @description 是否 ip 格式
 * @param {String} string
 * @returns {Boolean}
 */

export const formatIp = (string: string): boolean => {
  if (/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.test(String(string))) {
    const [a, b, c, d] = string.split('.')
    return +a < 256 && +b < 256 && +c < 256 && +d < 256
  } else {
    return false
  }
}
