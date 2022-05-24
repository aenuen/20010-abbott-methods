/**
 * 解析字符串得出排序SQL语句
 * @param {string} sort
 * @param {boolean} byOrder
 * @returns
 */
export const parseSort = (sort: string, byOrder=true): string => {
  let sql = ''
  if (sort) {
    const symbol = sort[0]
    const field = sort.slice(1, sort.length)
    const order = symbol === '+' ? 'asc' : 'desc'
    sql = byOrder?` order by \`${field}\` ${order}`:`\`${field}\` ${order}`
  }
  return sql
}
