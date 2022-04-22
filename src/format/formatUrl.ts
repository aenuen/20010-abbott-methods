/**
 * @description 是否 url 格式
 * @param {String} string
 * @returns {Boolean}
 */
export const formatUrl = (string: string): boolean =>
  /^((https?:)?\/\/)?[a-z0-9]+(([.-])[a-z0-9]+)*\.[a-z0-9]+/.test(String(string))
