/**
 * @description 是否 imageBase 格式
 * @param {String} string
 * @returns {Boolean}
 */
export const formatImageBase = (string: string): boolean =>
  /^data:image\/(bmp|png|gif|jpg|jpeg);base64,/.test(String(string))
