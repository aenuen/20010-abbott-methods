/**
 * @description 获取object的key和value，输出两个数组
 * @param {Object} theObject
 * @returns {[]}
 */
export const objectKeyAndValue = (
  theObject: Record<string | number | symbol, any>
): any[] => {
  const keysAry = [] as any[]
  const valueAry = [] as any[]
  Object.keys(theObject).forEach((keys) => {
    keysAry.push(String(keys))
    valueAry.push(theObject[keys])
  })
  return [keysAry, valueAry]
}
