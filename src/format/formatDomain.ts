/**
 * @description 是否 domain 格式
 * @param {String} string
 * @returns {Boolean}
 */
export const formatDomain = (string: string): boolean =>
  /^[a-z0-9]+(([.-])[a-z0-9]+)*\.[a-z0-9]+$/.test(String(string))
