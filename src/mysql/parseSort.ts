import { typeArray } from '../type/typeArray'
import { typeString } from '../type/typeString'
/**
 * @description 解析字符串得出排序SQL语句
 * @param {[]|string} mysqlAs 排序数据
 * @param {boolean} byOrder 是否在语名前加"order by "
 * @returns {string}
 */
export const parseSort = (mysqlAs: any[] | string, byOrder = true) => {
  if (typeArray(mysqlAs)) {
    let sql = ''
    if (mysqlAs.length > 0) {
      for (let i = 0; i < mysqlAs.length; i++) {
        const sort = mysqlAs[i]
        const symbol = sort[0]
        const field = sort.slice(1, sort.length)
        const order = symbol === '+' ? 'asc' : 'desc'
        sql += `${field} ${order}` + ','
      }
      sql = sql.slice(0, -1)
      sql = byOrder ? ` order by ${sql}` : sql
    }
    return sql
  } else if (typeString(mysqlAs)) {
    return byOrder ? ` order by ${mysqlAs}` : mysqlAs
  } else {
    return ''
  }
}
