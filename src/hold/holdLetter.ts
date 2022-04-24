/**
 * @description 保留字母
 * @param {string} string
 * @returns {string}
 */
export const holdLetter = (string: string): string => {
  return String(string).replace(/[^a-zA-Z]/g, '')
}

