/**
 * @description 是否十六进制颜色的格式
 * @param {string} string
 * @returns {boolean}
 */
export const formatHexColor = (string: string) => {
  const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/
  return reg.test(string)
}
