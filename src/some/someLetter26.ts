/*
 * @Author: abbott
 * @Date: 2022-12-06 16:34:32
 * @LastEditors: abbott
 * @LastEditTime: 2022-12-06 16:48:23
 * @Description:
 */
/**
 * @description 26个小写字母
 * @param {Boolean} [isBig]
 * @returns {String}
 */
export const someLetter26 = (isBig: Boolean = false): string => {
  let result = ''
  for (let index = 0; index < 26; index++) {
    result += String.fromCharCode((isBig ? 65 : 97) + index)
  }
  return result
}
