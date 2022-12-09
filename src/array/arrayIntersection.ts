/**
 * @param {[]} arrayAny1
 * @param {[]} arrayAny2
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 */
export const arrayIntersection = (
  arrayAny1: any[],
  arrayAny2: any[]
): any[] => {
  const len = Math.min(arrayAny1.length, arrayAny2.length)
  let i = -1
  const res = []
  while (++i < len) {
    const item = arrayAny2[i]
    if (arrayAny1.indexOf(item) > -1) {
      res.push(item)
    }
  }
  return res
}
