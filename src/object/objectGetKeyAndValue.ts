/**
 * @description 获取object的key和value，输出两个数组
 * @param {Object} theObject
 * @returns {[]}
 */
export const objectGetKeyAndValue = (
  theObject: Record<string | number | symbol, any>
): Record<string | number | symbol, any> => {
  const key = [] as any[]
  const value = [] as any[]
  Object.keys(theObject).forEach((keys) => {
    key.push(String(keys))
    key.push(String(theObject[keys]))
  })
  return { key, value }
}
