/**
 * @description 是否统一信用代码格式
 * @param {String} string
 * @returns {Boolean}
 */

export const formatLicense = (string: string): boolean =>
  /^[A-Z0-9]{15}$|^[A-Z0-9]{17}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/.test(
    String(string)
  )
