/**
 * @description 是否有字节点
 * @param {Object} theObject 要检查的对像
 * @param {String} [nodeName] 节点名称
 * @returns {Boolean}
 */
export const objectHasChildren = (
  theObject: Record<string | number | symbol, any>,
  nodeName: string
): boolean => {
  nodeName = nodeName || 'children'
  return theObject[nodeName] && theObject[nodeName].length > 0
}
