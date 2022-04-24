/**
 * @description 保留中文
 * @param {Number|String} string
 * @returns {String}
 */
export const holdCn = (string: string): string => {
  return String(string).replace(/[^\u4e00-\u9fa5]/g, '')
}

