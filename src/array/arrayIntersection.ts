/**
 * @param {Array} anyAry1
 * @param {Array} anyAry2
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 */
export const arrayIntersection = (anyAry1: any[], anyAry2: any[]) => {
  const len = Math.min(anyAry1.length, anyAry2.length)
  let i = -1
  const res = []
  while (++i < len) {
    const item = anyAry2[i]
    if (anyAry1.indexOf(item) > -1) {
      res.push(item)
    }
  }
  return res
}
