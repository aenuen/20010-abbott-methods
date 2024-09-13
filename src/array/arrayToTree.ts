export const arrayToTree = (arrayAny: any[], parentId = 0): any[] => {
  const tree: any[] = []
  arrayAny.forEach((item) => {
    if (item.parentId === parentId) {
      item.children = arrayToTree(arrayAny, item.id)
      tree.push(item)
    }
  })
  return tree
}
