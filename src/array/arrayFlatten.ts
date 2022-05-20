/**
 * 将多层级的数组扁平化
 * @param {[]} arrayAny
 * @returns {[]}
 */
export const arrayFlatten = (arrayAny: any[]): any[] => {
  while (arrayAny.some((item) => Array.isArray(item))) {
    arrayAny = [].concat(...arrayAny)
  }
  return arrayAny
}
