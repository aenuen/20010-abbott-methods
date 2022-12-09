import { typeArray } from '../type/typeArray'
import { typeString } from '../type/typeString'
/**
 * @description 整理搜索条件
 * @param {[]} param 参数
 * @param {boolean} [byAnd] 语名前是否加" and "
 * @returns {string}
 */
export const listParam = (mysqlAs: any[] | string): string => {
  if (typeArray(mysqlAs)) {
    const result = []
    for (let i = 0; i < mysqlAs.length; i++) {
      const row = mysqlAs[i]
      const key = row[0]
      const value = row[1]
      const char = row[2]
      if (char === '=') {
        result.push(value ? `\`${key}\`='${value}'` : '')
      } else if (char === '!=') {
        result.push(value ? `\`${key}\` != '${value}'` : '')
      } else if (char === 'in') {
        result.push(value ? `\`${key}\` in (${value.join(',')})` : '')
      } else if (char === '!in') {
        result.push(value ? `\`${key}\` not in (${value.join(',')})` : '')
      } else if (char === 'like') {
        result.push(value ? `\`${key}\` like '%${value}%'` : '')
      } else if (char === '!like') {
        result.push(value ? `\`${key}\` not like '%${value}%'` : '')
      } else if (char === 'scope') {
        if (value && typeArray(value) && value.length >= 2) {
          result.push(`\`${key}\` >= '${value[0]}'`)
          result.push(`\`${key}\` <= '${value[1]}'`)
        }
      } else if (char === '<') {
        result.push(value ? `\`${key}\` < '${value}'` : '')
      } else if (char === '<=') {
        result.push(value ? `\`${key}\` <= '${value}'` : '')
      } else if (char === '>') {
        result.push(value ? `\`${key}\` > '${value}'` : '')
      } else if (char === '=>') {
        result.push(value ? `\`${key}\` >= '${value}'` : '')
      }
    }
    const newResult = []
    for (let i = 0; i < result.length; i++) {
      const line = result[i]
      if (line) {
        newResult.push(line)
      }
    }
    return newResult.join(' and ')
  } else if (typeString(mysqlAs)) {
    return mysqlAs as string
  } else {
    return ''
  }
}
