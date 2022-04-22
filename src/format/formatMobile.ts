/**
 * @description 是否 mobile 格式
 * @param {String} string
 * @returns {Boolean}
 */
export const formatMobile = (string: string): boolean =>
  /^(13|14|15|16|17|18)[0-9]{9}$/.test(String(string))
