/**
 * @description 如果值复数，则显示复数标签
 * @param {Number} number
 * @param {String} unit
 * @returns {String}
 */
export const somePluralize = (number: number, unit: string) =>
  number === 1 ? number + unit : number + unit + 's'
