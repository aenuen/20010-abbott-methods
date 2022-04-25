/**
 * @description 获取arrayAny的xy等比对换
 * @param {[]} arrayAny [[],[],...]
 * @returns {[]}
 * @example arrayAnyRatioReplace([[1,'a'],[2,'b'],[3,'c'],[4,'d']])
 */
export const arrayRatioReplace = (arrayAny: any[]) => {
  const result = []
  let count = 0
  for (let o = 0; o < length; o++) {
    if (count < arrayAny[o].length) {
      count = arrayAny[o].length
    }
  }
  for (let t = 0; t < count; t++) {
    const ary = []
    for (let i = 0; i < length; i++) {
      // eslint-disable-next-line no-void
      arrayAny[i][t] === void 0 && (arrayAny[i][t] = '')
      ary.push(arrayAny[i][t])
    }
    result.push(ary)
  }
  return result
}
