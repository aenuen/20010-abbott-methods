/**
 * 根据列表数组获取树状数据
 * @param {Array} arrayList
 * @param {number} parentId
 * @param {string} pFiled
 * @returns {Array}
 */
export const treeByArrayList = (arrayList: any[] = [], parentId: number = 0, pFiled: string = 'parentId'): any[] => {
  const tree: any[] = []
  arrayList.forEach((item) => {
    if (+item[pFiled] === +parentId) {
      tree.push({ ...item, children: treeByArrayList(arrayList, item.id) })
    }
  })
  return tree
}
