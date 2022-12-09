import { typeObject } from '../type/typeObject'
import { typeString } from '../type/typeString'
/**
 * @description 处理数据连接,使用在addNumber语句
 * @param {{}|string} mysqlModel 数据
 * @returns {string}
 */
export const concatNumber = (
  mysqlOs: Record<string | number | symbol, any> | string
): string => {
  if (typeObject(mysqlOs)) {
    return objectAction(mysqlOs as Record<string | number | symbol, any>)
  } else if (typeString(mysqlOs)) {
    return mysqlOs as string
  } else {
    return ''
  }
}
const objectAction = (
  mysqlObject: Record<string | number | symbol, any>
): string => {
  const result = [] as any[]
  Object.keys(mysqlObject).forEach((key) => {
    result.push(`\`${key}\`=\`${key}\`+'${mysqlObject[key]}'`)
  })
  return result.join(',')
}
