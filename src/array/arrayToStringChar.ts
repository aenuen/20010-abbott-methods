/**
 * @description 以assign分隔arrayAny组成新的string
 * @param {[]} arrayAny 要分隔的数组
 * @param {String} char
 * @returns {String}
 */
export const arrayToStringChar = (arrayAny: any[], char: string): string =>
  arrayAny.join(String(char))
