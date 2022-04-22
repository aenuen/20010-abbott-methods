/**
 * @description 是否全中文格式
 * @param {String} string
 * @returns {Boolean}
 */
export const formatAllCn = (string: string): boolean =>
  /^[\u4e00-\u9fa5]+$/i.test(String(string))
