/*
 * @Author: abbott
 * @Date: 2022-12-06 16:34:32
 * @LastEditors: abbott
 * @LastEditTime: 2022-12-06 16:52:45
 * @Description:
 */
/**
 * @description 26个字母 true 大写 无参数或false 小写
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
