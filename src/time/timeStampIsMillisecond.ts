/**
 * @description 判断时间戳格式是否是毫秒
 * @param {Number} timestamp
 * @returns {Boolean}
 */
export const timeStampIsMillisecond = (timestamp: number | string) =>
  String(timestamp).length > 10
