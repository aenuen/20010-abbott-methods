/**
 * @description 获取object的长度
 * @param {Object} theObject
 * @returns {Number}
 */
export const objectLength = (
  theObject: Record<string | number | symbol, any>
): number => {
  let len = 0
  Object.keys(theObject).forEach(() => {
    len++
  })
  return len
}
