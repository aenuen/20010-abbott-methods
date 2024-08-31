/**
 * @description 保留字母和数学
 * @param {string} string
 * @returns {string}
 */
export const holdLetterNumber = (string: string): string => {
  return string.replace(/[^0-9a-zA-Z]/g, '')
}
