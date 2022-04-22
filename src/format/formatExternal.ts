/**
 * @description 是否外链格式
 * @param {String} string
 * @returns {Boolean}
 */
export const formatExternal = (string: string): boolean =>
  /^(https?:|mailto:|tel:)/.test(String(string))
