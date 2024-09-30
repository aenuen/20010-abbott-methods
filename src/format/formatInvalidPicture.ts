/**
 * @description 判断是否无效的图片格式
 * @param {String} string
 * @returns {Boolean}
 */
export const formatInvalidPicture = (string: string): boolean => /^[C-Z]:/i.test(String(string)) || String(string).length === 0 || string === null || string === undefined
