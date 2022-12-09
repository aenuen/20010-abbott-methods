import { typeArray } from '../type/typeArray'
import { typeObject } from '../type/typeObject'
import { typeString } from '../type/typeString'
import { modelAnd } from './modelAnd'

/**
 * @description 处理Where数据,使用在query、update或delete语句
 * @param {[]|{}|string} mysqlMulti 数据
 * @param {boolean} [byAnd] 是否在语名前加“ and ”
 * @returns {string}
 */
export const modelWhere = (
  mysqlMulti: any[] | Record<string | number | symbol, any> | string
): string => {
  if (typeObject(mysqlMulti)) {
    return objectAction(mysqlMulti as Record<string | number | symbol, any>)
  } else if (typeArray(mysqlMulti)) {
    return modelAnd(mysqlMulti as any[])
  } else if (typeString(mysqlMulti)) {
    return mysqlMulti as string
  } else {
    return ''
  }
}

const objectAction = (
  mysqlObject: Record<string | number | symbol, any>
): string => {
  const result = [] as any
  Object.keys(mysqlObject).forEach((key) => {
    result.push(`\`${key}\`='${mysqlObject[key]}'`)
  })
  return result.join(',')
}
