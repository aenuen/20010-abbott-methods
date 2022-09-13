/**
 * @description 从字符串中提取文件的文件全名
 * @param {String} string
 * @returns {String}
 */
export const fileFullName = (string: string): string => {
  const pos1 = string.lastIndexOf('/')
  const pos2 = string.lastIndexOf('\\')
  const pos3 = Math.max(pos1, pos2)
  if (pos3 < 0) {
    return string
  } else {
    return string.substring(pos3 + 1)
  }
}
