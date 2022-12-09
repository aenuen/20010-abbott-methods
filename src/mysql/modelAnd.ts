import { typeArray } from '../type/typeArray'
import { typeString } from '../type/typeString'
/**
 * @description 整理搜索条件
 * @param {[]} mysqlAs 参数
 * @param {byAnd} bySpace 语名前是否加" and "
 * @returns {string}
 */
export const modelAnd = (mysqlAs: any[] | string): string => {
  if (typeArray(mysqlAs)) {
    return arrayAction(mysqlAs as any[])
  } else if (typeString(mysqlAs)) {
    return mysqlAs as string
  } else {
    return ''
  }
}

const arrayAction = (mysqlArray: any[]): string => {
  const result = []
  for (let i = 0; i < mysqlArray.length; i++) {
    const row = mysqlArray[i]
    const key = row[0]
    const value = row[1]
    const char = row[2]
    if (char === '=') {
      result.push(`\`${key}\`='${value}'`)
    } else if (char === '!') {
      result.push(`\`${key}\` != '${value}'`)
    } else if (char === 'in') {
      result.push(`\`${key}\` in (${value.join(',')})`)
    } else if (char === '!in') {
      result.push(`\`${key}\` not in (${value.join(',')})`)
    } else if (char === 'like') {
      result.push(`\`${key}\` like '%${value}%'`)
    } else if (char === '!like') {
      result.push(`\`${key}\` not like '%${value}%'`)
    } else if (char === 'scope') {
      if (value && typeArray(value) && value.length >= 2) {
        result.push(`\`${key}\` > '${value[0]}'`)
        result.push(`\`${key}\` < '${value[1]}'`)
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
  return result.join(' and ')
}
