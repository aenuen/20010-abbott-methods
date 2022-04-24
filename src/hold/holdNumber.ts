/**
 * @description 保留数字
 * @param {string} string
 * @returns {string}
 */
export const holdNumber = (string: string): string => {
  return String(string).replace(/[^0-9]/g, '')
}

