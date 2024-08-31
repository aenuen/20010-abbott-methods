/**
 * @description 固定电话字符串转数组
 * @param {string} telString 电话字符串
 * @returns {Array}
 */
export const telToArray = (telString: string): string[] => {
  telString = telString
    .replace(/\(（/g, '') // 先去除左括号
    .replace(/[,\-\\\)）/转]/g, '|') // 匹配 ",", "/", ")", "）", "转"，使用 | 替换
    .replace(/\s+/g, '') // 去除空格
  return telString.split('|') // 将处理过的 telString 依据 | 进行分割，返回分割后的电话号码字符串数组
}
