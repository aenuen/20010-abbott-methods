/**
 * 解析字符串得出排序SQL语句
 * @param {[]} sortAry
 * @param {boolean} byOrder
 * @returns
 */
export const parseSort = (sortAry: string[], byOrder = true): string => {
  let sql = ''
  if (sortAry.length > 0) {
    for (let i = 0; i < sortAry.length; i++) {
      const sort = sortAry[i]
      const symbol = sort[0]
      const field = sort.slice(1, sort.length)
      const order = symbol === '+' ? 'asc' : 'desc'
      sql = sql + `\`${field}\` ${order}` + ','
    }
    sql = sql.slice(0,-1)
    sql = byOrder ? ` order by ${sql}` : sql
  }
  return sql
}
