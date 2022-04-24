/**
 * 将多层级的数组扁平化
 * @param {Array} anyAry
 * @returns {Array}
 */
export const arrayFlatten = (anyAry: any[]): any[] => {
  while (anyAry.some((item) => Array.isArray(item))) {
    anyAry = [].concat(...anyAry)
  }
  return anyAry
}
