import { arrayOrderByField } from '../array/arrayOrderByField'
/**
 * 树状数据排序
 * @param {Array} tree 树状数据
 * @param {String} byField 根据字段
 * @param {Boolean} byOrder 排序方式
 * @returns
 */
export const treeSort = (tree: any[], byField: string = 'sort', byOrder: boolean = true) => {
  tree = arrayOrderByField(tree, byField, byOrder)
  tree.forEach((item) => {
    if (item.children && item.children.length > 0) {
      item.children = arrayOrderByField(item.children, byField, byOrder)
    }
  })
  return tree
}
