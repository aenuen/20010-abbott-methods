/**
 * 将数组转换为树形结构
 * @param {Array} arrayAny
 * @param {number} parentId
 * @param {string} pFiled
 * @returns {Array}
 */
export const arrayToTree = (arrayAny: any[], parentId = 0, pFiled = 'parentId'): any[] => {
  const tree: any[] = []
  arrayAny.forEach((item) => {
    if (item[pFiled] === parentId) {
      item.children = arrayToTree(arrayAny, item.id, pFiled)
      tree.push(item)
    }
  })
  return tree
}
