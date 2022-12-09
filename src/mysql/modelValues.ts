import { typeObject } from '../type/typeObject'
import { typeString } from '../type/typeString'

/**
 * @description 处理Values数据,使用在insert语句
 * @param {{}|string} mysqlOs 数据
 * @returns {string}
 */
export const modelValues = (
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
  const keys = [] as any[]
  const values = [] as any[]
  Object.keys(mysqlObject).forEach((key) => {
    keys.push(`\`${key}\``)
    values.push(`'${mysqlObject[key]}'`)
  })
  if (keys.length > 0 && values.length > 0 && keys.length === values.length) {
    return `(${keys.join(',')}) values (${values.join(',')})`
  } else {
    return ''
  }
}
