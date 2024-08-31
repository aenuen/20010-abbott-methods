/**
 * @description 将固定电话字符串转成数组
 * @param {string} telString
 * @returns {Array}
 */
export const telToArray = (telString: string): any[] => {
  const regex = /^(\(\d+\))?\s*(\d+)\s*(转\s*\d+)?$/
  const match = telString.match(regex)
  if (match) {
    return [
      match[1] ? match[1].slice(1, -1) : '',
      match[2],
      match[3] ? match[3].slice(2) : ''
    ]
  }
  return ['', '', '']
}
