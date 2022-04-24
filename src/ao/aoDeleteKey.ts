import { typeArray } from '../type/typeArray'
import { aoWhetherIn } from './aoWhetherIn'

/**
 * @description 删除键
 * @param {Array|Object} ao array或object
 * @param {Array|String} aoKey 要删除的键，可字符或数组
 * @returns {Array|Object}
 */
export const aoDeleteKey = (
  ao: any[] | Record<string | number | symbol, any>,
  aoKey: string | number
) => {
  const aoKeyAry = (typeArray(aoKey) ? aoKey : [aoKey]) as any[]
  const result: any[] | Record<string | number | symbol, any> = typeArray(ao)
    ? []
    : {}
  for (const i in ao) {
    if (!aoWhetherIn(aoKeyAry, i, false)) {
      typeArray(ao) ? result.push(ao[i]) : (result[i] = ao[i])
    }
  }
  return result
}
