import { typeObject } from '../type/typeObject'
import { typeString } from '../type/typeString'

/**
 * @description 处理Comma数据,使用在update语句
 * @param {{}} mysqlOs 数据
 * @returns {string}
 */
export const modelComma = (
  mysqlOs: Record<string | number | symbol, any> | string
) => {
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
    result.push(`\`${key}\`='${mysqlObject[key]}'`)
  })
  return result.join(',')
}
