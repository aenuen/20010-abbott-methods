/**
 * @description 是否 username 格式
 * @param {String} string
 * @returns {Boolean}
 */
export const formatUsername = (string: string): boolean =>
  /^[a-z]+[a-z0-9]+[-_.]*[a-z0-9]+$/i.test(String(string))
